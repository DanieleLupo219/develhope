function Age(props) {
  if (props.age > 18) {
    return <p>Your age is {props.age}.</p>;
  } else {
    return <p>You are very young!</p>;
  }
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
