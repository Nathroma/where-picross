import { useEffect, useRef } from "react";
import style from "./PhotoToPicross.module.scss";

const canvasSize: number = 400
const rectSize = 100

function PhotoToPicross() {
    const rotationRef = useRef<number>(10)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const render = (context: CanvasRenderingContext2D) => {
        context.resetTransform()
        context.clearRect(0, 0, canvasSize, canvasSize)
        context.translate(canvasSize/2, canvasSize/2)
        context.rotate(rotationRef.current)
        context.fillStyle = "rgb("+((rotationRef.current /1000 ) % 255).toFixed()+", 0, 0)";
        context.fillRect(-rectSize/2, -rectSize/2, rectSize, rectSize);
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const interval = setInterval(() => {
            rotationRef.current += 0.15
            if (canvas !== null) {
                const context = canvas.getContext("2d")
                if (context !== null) {
                    render(context)
                }
            }
        }, 20)
        return () => clearInterval(interval)
    }, [])

    return(
        <div className={style.test}>
            <canvas ref={canvasRef} width={canvasSize} height={canvasSize}/>
        </div>
    )
}

export default PhotoToPicross