
const Button = (props) => {
    return <button 
                onClick={props.handleClick}
                style={{
                    color: 'white',
                    backgroundColor: 'red',
                }}
            >
                    {props.label}
            </button>
}

export default Button