import "./Form.css";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [emailFrequency, setEmailFrequency] = useState("DAILY");
  const [promotionalEmail, setPromotionalEmail] = useState("True");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setNameError(true);
      return;
    }

    if (!email) {
      setEmailError(true);
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        birthday: birthday,
        receive_promotional_emails: promotionalEmail,
        frequency_of_emails: emailFrequency,
      }),
    };

    return fetch(
      "http://localhost:8000/api/v1/newsletters/recipients/",
      requestOptions
    )
      .then((response) => {
        // Reset form fields
        if (response.ok) {
          alert("Form Submitted Successfully");
          setName("");
          setEmail("");
          setBirthday("");
          setEmailFrequency("DAILY");
          setPromotionalEmail("True");
          setNameError(false);
          setEmailError(false);
        } else {
          console.error("Error:", response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // Reset form fields
    // setName("");
    // setEmail("");
    // setBirthday("");
    // setEmailFrequency("Daily");
    // setPromotionalEmail("True");
    // setNameError(false);
    // setEmailError(false);
  };

  function handleFrequencyChange(e) {
    setEmailFrequency(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    if (nameError) {
      setNameError(false);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(false);
    }
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {/*<Form/>*/}
        <div className="form-fields">
          <label>Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            className={nameError ? "error" : ""}
          ></input>
          {nameError && <p className="error-message">Name is required</p>}
          <label>Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          {emailError && <p className="error-message">Email is required</p>}
          <label>Birthday: </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            max="2040-12-31"
          ></input>
          <label>Promotional Emails </label>
          <select
            name="promo-email"
            id="promo-email"
            value={promotionalEmail}
            onChange={(e) => setPromotionalEmail(e.target.value)}
          >
            <option value="True" selected="selected">
              Yes
            </option>
            <option value="False">No</option>
          </select>

          <div className="radio">
            <input
              type="radio"
              value="DAILY"
              name="frequency"
              onChange={handleFrequencyChange}
              defaultChecked={true}
            />{" "}
            Daily
            <input
              type="radio"
              value="WEEKLY"
              name="frequency"
              onChange={handleFrequencyChange}
            />{" "}
            Weekly
            <input
              type="radio"
              value="SEMI-MONTHLY"
              name="frequency"
              onChange={handleFrequencyChange}
            />
            Semi-monthly
            <input
              type="radio"
              value="MONTHLY"
              name="frequency"
              onChange={handleFrequencyChange}
            />{" "}
            Monthly
          </div>

          {/*<input type="text" id="promo-email" name="promo-email"></input>*/}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
