
const Button = ({text,  style,onClick}) => {
  return (
    <button onClick={onClick} className={style}>
    {text}
    </button>
  )
}

export default Button