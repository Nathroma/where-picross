import "./SquareCounter.scss";

type CounterProps = {
    counter: string
}

function SquareCounter({ counter }: CounterProps) {

    return (
        <div>
            <p> : {counter}</p>
        </div>
    )
}

export default SquareCounter