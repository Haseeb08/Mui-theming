import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import Input from "./_input";

describe("Input testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Input />);
    expect(input.toJSON()).toMatchSnapshot();
  });
  test("should have input bar", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("input")).toBeInTheDocument();
  });
  test("should be have default value, if prop is not provided", () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId("input")).toHaveTextContent("1+2+3");
  });
  test("should be have input value from props", () => {
    const { getByTestId } = render(<Input input="1234"/>);
    expect(getByTestId("input")).toHaveTextContent("1234");
  });
  
});