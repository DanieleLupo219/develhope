function Age(props) {
  return <p>Your age is {props.age}.</p>;
}

function Welcome(props) {
  const renderAge = props.name == "John" && props.age > 18 && props.age < 65;
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      {renderAge && <Age age={props.age} />}
    </div>
  );
}

Welcome.defaultProps = {
  name: "Joe",
};

export default Welcome;
