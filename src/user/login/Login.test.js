import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  renderHook,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Login from "./Login";
import { useForm, Controller } from "react-hook-form";
import "@testing-library/jest-dom";

describe("Login Component", () => {
  const onSubmit = jest.fn();
  it("renders Login component with correct elements", () => {
    render(<Login />);

    // Check if the heading is rendered
    expect(
      screen.getByText("Login to enjoy your treats..")
    ).toBeInTheDocument();

    // Check if the phone number input field is rendered
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();

    // Check if the Login button is rendered
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    const { result } = renderHook(() => useForm());
    const { control } = result.current;

    render(<LoginWrapper control={control} onSubmit={onSubmit} />);

    // Type a valid phone number
    fireEvent.change(screen.getByPlaceholderText("Phone Number"), {
      target: { value: "1234567890" },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      // Check if the error message is rendered
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  it("shows error message for invalid phone number", async () => {
    render(<Login />);

    // Submit the form without entering a phone number
    fireEvent.submit(screen.getByRole("button", { name: "Login" }));

    // Wait for the error message to appear
    await waitFor(() => {
      // Check if the error message is rendered
      expect(screen.getByText("Phone Number is required")).toBeInTheDocument();
    });
  });
});

// Helper component to wrap Login with react-hook-form's Controller
const LoginWrapper = ({ control, onSubmit }) => {
  return (
    <Controller
      name="phoneNumber"
      control={control}
      rules={{ required: "Phone Number is required" }}
      render={({ field, fieldState }) => (
        <Login
          onSubmit={onSubmit}
          phoneNumberField={field}
          phoneNumberFieldState={fieldState}
        />
      )}
    />
  );
};
