import React from "react";
import { hot } from "react-hot-loader/root";
import Input from "./Input";

class App extends React.Component {
  render() {
    return <Inputs />;
  }
}

function Inputs() {
  const [inputs, setInput] = React.useState(2);
  function increment() {
    setInput(inputs + 1);
  }
  function decrement() {
    setInput(inputs - 1);
  }
  return (
    <>
      {new Array(inputs).fill("").map((_, index) => (
        <Input key={index} />
      ))}
      <br />
      <button onClick={decrement}>remove input</button>
      <button onClick={increment}>add input</button>
    </>
  );
}

export default hot(App);
