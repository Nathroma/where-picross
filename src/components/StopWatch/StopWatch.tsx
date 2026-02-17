import "./StopWatch.scss"

type StopWatchProps = {
    timer: number
}

export function formatTimer(timer: number): string {
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

function StopWatch({timer}: StopWatchProps) {
    return (
        <p>{formatTimer(timer)}</p>
    )
}

export default StopWatch