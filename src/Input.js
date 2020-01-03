import React from "react";
import connect from "./store";
const Input = props => {
  function handleInputChange({ target: { value } }) {
    props.actions.setInputValue(value);
  }
  return (
    <>
      <pre>{JSON.stringify(props)}</pre>
      <input onChange={handleInputChange} value={props.inputValue} />
    </>
  );
};

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  moreValue: state.fasdf
});

const mapDispatchToProps = ({ setInputValue }) => ({ setInputValue });

export default connect(mapStateToProps, mapDispatchToProps)(Input);
