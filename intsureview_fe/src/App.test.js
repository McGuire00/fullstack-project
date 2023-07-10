// import { render, screen } from "@testing-library/react";
// import App from "./App";
// import Form from "./Components/Form/Form";
//
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Components/Form/Form.js";

describe("Form", () => {
  test("submits the form successfully", async () => {
    render(<Form />);

    // Fill out the form fields
    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const emailInput = screen.getByLabelText("Email:");
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });

    const birthdayInput = screen.getByLabelText("Birthday:");
    fireEvent.change(birthdayInput, { target: { value: "1990-01-01" } });

    const promoEmailSelect = screen.getByLabelText("Promotional Emails");
    fireEvent.change(promoEmailSelect, { target: { value: "True" } });

    const frequencyRadio = screen.getByLabelText("Daily");
    // const frequencyRadio = screen.getBy("Daily");
    fireEvent.click(frequencyRadio);

    // Submit the form
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Verify that the success message is displayed
    const successMessage = await screen.findByText(
      "Form submitted successfully!"
    );
    expect(successMessage).toBeInTheDocument();

    // Verify that the form fields are reset
    expect(nameInput.value).toBe("");
    expect(emailInput.value).toBe("");
    expect(birthdayInput.value).toBe("");
    expect(promoEmailSelect.value).toBe("True");
    expect(frequencyRadio.checked).toBe(true);
  });

  test("displays error messages for missing fields", async () => {
    render(<Form />);

    // Submit the form without filling out the fields
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);

    // Verify that the error messages are displayed
    const nameError = await screen.findByText("Name is required");
    expect(nameError).toBeInTheDocument();
  });
});
