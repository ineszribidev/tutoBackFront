import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Button from "./Button";

function Home(props) {
  const [name, setName] = useState("home");
  const [form, setForm] = useState({});
  const onChange = (e) => {
    setForm(e.target.value);
  };
  const changeName = () => {
    // setName("ines update");
    setName(form);
  };

  return (
    <div>
      <NavBar name="Home" />
      <div>
        <div className="alert alert-warning">{name}</div>
        <input
          name="inpu"
          type="text "
          className="form-control"
          onChange={onChange}
        ></input>
        <button className="btn btn-info" onClick={changeName}>
          change Name
        </button>
        <Button
          class="btn btn-info"
          onChangeHandler={changeName}
          label="nommmmm"
        />
      </div>
    </div>
  );
}

export default Home;
