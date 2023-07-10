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
  const [successMessage, setSuccessMessage] = useState("");

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
          //
          setSuccessMessage("Form submitted successfully!");
          setName("");
          setEmail("");
          setBirthday("");
          setEmailFrequency("DAILY");
          setPromotionalEmail("True");
          setNameError(false);
          setEmailError(false);
        } else {
          setSuccessMessage("");
          console.error("Error:", response.status);
        }
      })
      .catch((error) => {
        setSuccessMessage("");
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
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Your name"
            onChange={handleNameChange}
            className={nameError ? "error" : ""}
          ></input>
          {nameError && <p className="error-message">Name is required</p>}
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={handleEmailChange}
          ></input>
          {emailError && <p className="error-message">Email is required</p>}
          <label htmlFor="birthday">Birthday: </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            max="2040-12-31"
          ></input>
          <label htmlFor="promo-email">Promotional Emails </label>
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
              id="daily"
              name="frequency"
              onChange={handleFrequencyChange}
              defaultChecked={true}
            />
            <label htmlFor="daily">Daily</label>
            <input
              type="radio"
              value="WEEKLY"
              id="weekly"
              name="frequency"
              onChange={handleFrequencyChange}
            />
            <label htmlFor="weekly">Weekly</label>
            <input
              type="radio"
              value="SEMI-MONTHLY"
              id="semi-monthly"
              name="frequency"
              onChange={handleFrequencyChange}
            />
            <label htmlFor="semi-monthly">Semi-monthly</label>
            <input
              type="radio"
              value="MONTHLY"
              id="monthly"
              name="frequency"
              onChange={handleFrequencyChange}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>

          {/*<input type="text" id="promo-email" name="promo-email"></input>*/}
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </>
  );
}

export default Form;
