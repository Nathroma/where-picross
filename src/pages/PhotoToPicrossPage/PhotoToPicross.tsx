import { useEffect, useRef, useState } from "react";
import style from "./PhotoToPicross.module.scss";

function PhotoToPicross() {
    const [position, setPosition] = useState<number>(10)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const canvas = canvasRef.current

    const render = (context: CanvasRenderingContext2D) => {
        context.clearRect(0, 0, 400, 400)
        context.fillStyle = "green";
        context.fillRect(position, position, 150, 100);
    }

    useEffect(() => {
        if (canvas !== null) {
            const context = canvas.getContext("2d");
            if (context !== null) {
                render(context)
            }
        }
    }, [canvas, position])
    
    const makeSquareMove = () => {
        setPosition(position => position + 10)
    }

    return(
        <div className={style.test}>
            <canvas ref={canvasRef} width={400} height={400}/>
            <button onClick={() => makeSquareMove()}>Test</button>
        </div>
    )
}

export default PhotoToPicross