function Welcome(props) {
  return <p>Welcome, {props.name}!</p>;
}

Welcome.defaultProps = {
  name: "Joe",
};

export default Welcome;
