import { useEffect, useState } from "react"
import "./StopWatch.scss"

type StopWatchProps = {
    stopTimer: boolean
}

function StopWatch({stopTimer}: StopWatchProps) {

    const [timer, setTimer] = useState<number>(0)

    useEffect(()=> {
        if (!stopTimer) {
            const interval = setInterval(() => {
                setTimer(timer => timer + 1)
            }, 1000)
            return () => clearTimeout(interval)
        }
       
    }, [stopTimer])

    const formattedTimer = () => {
        const rawHour: number = Math.floor(timer / 3600)
        const rawMinute: number = Math.floor(timer / 60) % 60
        const rawSecond: number = timer % 60

        if (rawHour === 0) {
            const formattedMinute: string = String(rawMinute)
            const formattedSecond: string = String(rawSecond).padStart(2, "0")
            return `${formattedMinute}:${formattedSecond}`
        } else {
            const formattedHour: string = String(rawHour)
            const formattedMinute: string = String(rawMinute).padStart(2, "0")
            const formattedSecond: string = String(rawSecond).padStart(2, "0")
            return `${formattedHour}:${formattedMinute}:${formattedSecond}`
        }
    }

    return (
        <p>{formattedTimer()}</p>
    )
}

export default StopWatch