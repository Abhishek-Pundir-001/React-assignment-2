import './button.css'
function Button(props){
    return <button className="btn" onClick={props.onClick}>Sign In</button>
}
export default Button;