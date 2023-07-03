function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      <p>Your age is {props.age}.</p>
    </div>
  );
}

Welcome.defaultProps = {
  name: "Joe",
};

export default Welcome;
