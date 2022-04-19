import React, { useContext } from "react";
import { AppContext } from "./ThemeContext";
function Child() {
  const state = useContext(AppContext);
  console.log(state);
  return (
    <>
      Child Theme - {state.dark ? "True" : "False"}
      <br />
      <button onClick={state.handleChange}>Change Background</button>
    </>
  );
}

export default Child;
