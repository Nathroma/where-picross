import "./VerticalSquareCounter.scss";

type CounterProps = {
    counter: string
}

function VerticalSquareCounter({ counter }: CounterProps) {

    return (
        <div>
            <p className="vertical-p"> : {counter}</p>
        </div>
    )
}

export default VerticalSquareCounter