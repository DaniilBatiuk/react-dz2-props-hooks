export default function Buttons(props) {
    const Click = ()=>{
        if(props.Text === "+1"){
            props.set(props.Type+1)
        }
        else{
            props.set(props.Type - 1)
        }
    }
    return <button className="ButtonRGB" style={{backgroundColor: props.Color}} onClick={Click}>{props.Text}</button>

}