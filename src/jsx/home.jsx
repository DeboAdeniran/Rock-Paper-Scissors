import React, { useEffect, useState } from "react";
import "../css/home.css";
import ErrorTab from "./errorTab";
import { useNavigate } from "react-router-dom";

function Home() {
  const [formData, setFormData] = useState({ name: "", computerName: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errorMsg = "";

    if (formData.name === "" && formData.computerName === "") {
      errorMsg = "Name and computer name input is empty";
    } else if (formData.name === "") {
      errorMsg = "Name input is empty";
    } else if (formData.computerName === "") {
      errorMsg = "Computer name input is empty";
    } else if (formData.name === formData.computerName) {
      errorMsg = "Name and computer name cannot be the same";
    }

    if (errorMsg) {
      setError(errorMsg);
    } else {
      localStorage.setItem("name", formData.name);
      localStorage.setItem("compName", formData.computerName);
      // window.location.href = "/game";
      navigate("/game");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      {error && <ErrorTab error_msg={error} />}
      <div className="home">
        <form action="">
          <div>
            <p>Rock Paper Scissors</p>
            <label htmlFor="">Input in all fields</label>
          </div>
          <div className="input-group">
            <label htmlFor="name">Enter your name:</label>
            <input
              type="text"
              placeholder=""
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="input-group">
            <label htmlFor="computerName">Enter a name for the computer:</label>
            <input
              type="text"
              name="computerName"
              placeholder=""
              id="computerName"
              onChange={handleChange}
              value={formData.computerName}
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Next
          </button>
        </form>
      </div>
    </>
  );
}
export default Home;
