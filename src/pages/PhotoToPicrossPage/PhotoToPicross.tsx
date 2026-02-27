import { useRef } from "react";
import style from "./PhotoToPicross.module.scss";

const canvasSizeSquare: number = 400
const imageCanvasSize = 25

type Pixel = [number, number, number]

enum GrayscaleRenderMethod {
    classic = "classic",
    luma = "luma",
    luminance = "luminance",
    lightness = "lightness",

}

const transformPixel = (pixel: Pixel, method: GrayscaleRenderMethod): Pixel => {
    if (method === GrayscaleRenderMethod.classic) {
        return Array<number>(3).fill(3*pixel[0] + 4*pixel[1] + pixel[2] >>> 3) as Pixel
    } else if (method === GrayscaleRenderMethod.luma) {
        return Array<number>(3).fill(pixel[0]*.299 + pixel[1]*.587 + pixel[2]*.114) as Pixel
    } else if (method === GrayscaleRenderMethod.luminance) {
        return Array<number>(3).fill(0.2126 * pixel[0] + 0.715 * pixel[1] + 0.0722 * pixel[2]) as Pixel
    } else {
        // lightness
        return Array<number>(3).fill((pixel[0] + pixel[1] + pixel[2]) / 3) as Pixel
    }
}

function PhotoToPicross() {
    const canvasImageRef = useRef<HTMLCanvasElement>(null)
    const canvasGeneratedImageRef = useRef<HTMLCanvasElement>(null)
    const grayscaleRenderMethodRef = useRef<GrayscaleRenderMethod>(GrayscaleRenderMethod.classic)
    const filterScaleRef = useRef<number>(1)
    const pixelListRef = useRef<Pixel[] | null>(null)

    const onNewImage = (image: HTMLImageElement) => {
        const canvas = canvasImageRef.current
        const ctx = (canvas !== null) ? canvas.getContext("2d") : null
        if (ctx === null) {
            return
        }

        ctx.resetTransform()
        ctx.clearRect(0, 0, canvasSizeSquare, canvasSizeSquare)
        ctx.drawImage(image, 0, 0, imageCanvasSize, imageCanvasSize);
        const imageData = ctx.getImageData(0, 0, imageCanvasSize, imageCanvasSize);
        const pixelCount = imageData.height * imageData.width

        const pixelList: Pixel[] = []
        for (let index = 0; index < pixelCount*4; index+= 4) {
            const red = imageData.data[index]
            const green = imageData.data[index + 1]
            const blue = imageData.data[index + 2]
            
            const pixel: Pixel = [red, green, blue] 
            pixelList.push(pixel)
        }
        pixelListRef.current = pixelList
        generate()
    }

    const onFilesUploaded = (files: FileList | null) => {
        if (files === null) {
            return
        }

        const fileReader = new FileReader
        fileReader.onload = () => {
            const image = new Image
            image.onload = () => onNewImage(image)
            image.src = fileReader.result as string
        }
        fileReader.readAsDataURL(files[0])
    }
    
    const renderNewImage = (ctx: CanvasRenderingContext2D) => {
        if (pixelListRef.current === null) {
            return
        }

        const pixelList = pixelListRef.current
            .map(pixel => transformPixel(pixel, grayscaleRenderMethodRef.current))
            .map(pixel => {
                const grayscaleValue = ((pixel[0] + pixel[1] + pixel[2]) / 3) * (100 / 255);
                if (grayscaleValue < filterScaleRef.current) {
                    return [0, 0, 0]
                } else {
                    return  [255, 255, 255]
                }
            })

        const data = new Uint8ClampedArray(pixelList.length * 4)
        for (let i = 0; i < pixelList.length; i += 1) {
            const pixel = pixelList[i]
            const offset = i * 4
            data[offset] = pixel[0];
            data[offset + 1] = pixel[1];
            data[offset + 2] = pixel[2];
            data[offset + 3] = 255;
        }
        const copiedImageData = new ImageData(data, imageCanvasSize, imageCanvasSize)
        ctx.resetTransform()
        ctx.clearRect(0, 0, imageCanvasSize, imageCanvasSize)
        ctx.putImageData(copiedImageData, 0, 0)
    }
    
    const generate = () => {
        const canvasGenerated = canvasGeneratedImageRef.current
        if (canvasGenerated === null) {
            return
        }
        const context = canvasGenerated.getContext("2d")
        if (context === null) {
            return
        }

        renderNewImage(context)
    }

    const onRangeValue = (value: number) => {
        filterScaleRef.current = value
        generate()
    }

    const selectMethod = (method: GrayscaleRenderMethod) => {
        grayscaleRenderMethodRef.current = method
        generate()
    }

    return(
        <div className={style.canvasDiv}>
            <input type="file" onChange={(e) => onFilesUploaded(e.target.files)}/>
            <canvas className={style.imageCanvas} ref={canvasImageRef} width={imageCanvasSize} height={imageCanvasSize}/>
            <div className={style.grayscaleRender}>
                <canvas className={style.imageCanvas} ref={canvasGeneratedImageRef} width={imageCanvasSize} height={imageCanvasSize}/>
                <div className={style.theButtonLegion}>
                    <button onClick={() => selectMethod(GrayscaleRenderMethod.classic)}>Classic</button>
                    <button onClick={() => selectMethod(GrayscaleRenderMethod.luma)}>Luma</button>
                    <button onClick={() => selectMethod(GrayscaleRenderMethod.luminance)}>Luminance</button>
                    <button onClick={() => selectMethod(GrayscaleRenderMethod.lightness)}>Lightness</button>
                </div>
                <input type="range" name="Slider" id="slider" 
                    defaultValue={filterScaleRef.current}
                    min={0}
                    max={100}
                    onChange={(e) => onRangeValue(Number(e.target.value))}/>
            </div>
        </div>
    )
}

export default PhotoToPicross