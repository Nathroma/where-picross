import { useEffect, useRef } from "react";
import style from "./PhotoToPicross.module.scss";

const canvasSizeSquare: number = 400
const imageCanvasSize = 50

type Pixel = [number, number, number]

const transformPixel = (pixel: Pixel): Pixel => {
    return [
        (0.30*pixel[0]), 
        (0.59*pixel[1]), 
        (0.11*pixel[2])
    ]
}

function PhotoToPicross() {
    const canvasImageRef = useRef<HTMLCanvasElement>(null)
    const canvasGeneratedImageRef = useRef<HTMLCanvasElement>(null)
    
    const renderImage = (ctx: CanvasRenderingContext2D) => {
        ctx.resetTransform()
        ctx.clearRect(0, 0, canvasSizeSquare, canvasSizeSquare)
        const image = new Image();
        image.src = "src/assets/cat-image.jpg";
        image.addEventListener("load", () => {

            ctx.drawImage(image, 0, 0, imageCanvasSize, imageCanvasSize);
            const imageData = ctx.getImageData(0, 0, imageCanvasSize, imageCanvasSize);
            const pixelCount = imageData.height * imageData.width

            const pixelList: number[][] = []
            for (let index = 0; index < pixelCount*4; index+= 4) {
                const red = imageData.data[index]
                const green = imageData.data[index + 1]
                const blue = imageData.data[index + 2]
                
                const pixel: Pixel = [red, green, blue] 
                pixelList.push(transformPixel(pixel))
            }
            generate(pixelList)
        })
    }

    const generate = (pixelList: number[][]) => {
        const canvasGenerated = canvasGeneratedImageRef.current
        if (canvasGenerated !== null) {
            const context = canvasGenerated.getContext("2d")
            if (context !== null) {
                renderNewImage(context, pixelList)
            }
        }
    }

    const renderNewImage = (ctx: CanvasRenderingContext2D, pixelList: number[][]) => {
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

    useEffect(() => {
        const canvas = canvasImageRef.current
        if (canvas !== null) {
            const context = canvas.getContext("2d")
            if (context !== null) {
                renderImage(context)
            }
        }
    }, [])


    return(
        <div className={style.canvasDiv}>
            <canvas className={style.imageCanvas} ref={canvasImageRef} width={imageCanvasSize} height={imageCanvasSize}/>
            <canvas className={style.imageCanvas} ref={canvasGeneratedImageRef} width={imageCanvasSize} height={imageCanvasSize}/>
        </div>
    )
}

export default PhotoToPicross