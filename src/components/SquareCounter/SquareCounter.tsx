import "./SquareCounter.scss";

type CounterProps = {
    counter: number
}

function SquareCounter({ counter }: CounterProps) {

    return (
        <div>
            <p> : {counter}</p>
        </div>
    )
}

export default SquareCounter