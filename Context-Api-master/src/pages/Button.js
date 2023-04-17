import React from "react";

function Button({ Class, onChangeHandler, label }) {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}

export default Button;
