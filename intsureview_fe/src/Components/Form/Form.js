import "./Form.css";
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [emailFrequency, setEmailFrequency] = useState("DAILY");
  const [promotionalEmail, setPromotionalEmail] = useState("True");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleFrequencyChange(e) {
    setEmailFrequency(e.target.value);
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
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
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
