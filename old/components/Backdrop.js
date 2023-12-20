// We are forwarding the onClick prop of our custom component to the onClick of the React div component

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

export default Backdrop;
