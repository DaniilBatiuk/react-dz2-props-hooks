export default function DivRGB(props) {
    return <>
        <div className="divRGB" style={{ backgroundColor: `rgb(${props.R}, ${props.G}, ${props.B})` }}>rgb {props.R} {props.G} {props.B}</div>
    </>
}