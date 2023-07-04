import Age from "./Age";

function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      <Age age={props.age} />
    </div>
  );
}

Welcome.defaultProps = {
  name: "Joe",
};

export default Welcome;
