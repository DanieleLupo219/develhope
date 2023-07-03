function Age(props) {
  return <p>Your age is {props.age}.</p>;
}

function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      {props.age && <Age age={props.age} />}
    </div>
  );
}

Welcome.defaultProps = {
  name: "Joe",
};

export default Welcome;
