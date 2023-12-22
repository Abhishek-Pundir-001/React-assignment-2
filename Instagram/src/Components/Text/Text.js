import './text.css'
function Text(props) {
    return (
        <div>
            <span className="text">Don't you have an account?</span><button className="button" onClick={props.onClick}>SignUp</button>
        </div>
    )
}
export default Text;