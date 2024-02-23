
function Button(props) {
  return <button onClick={props.eventHandler} className={props.class_name} >{props.children}</button>;
}
export default Button;
