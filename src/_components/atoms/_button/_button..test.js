import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./_button";

describe("Button testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Button />);
    expect(input.toJSON()).toMatchSnapshot();
  });
  test("should have button", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toBeInTheDocument();
  });
  test("should have button value as 1", () => {
    const { getByTestId } = render(<Button value={1}/>);
    expect(getByTestId("button")).toHaveTextContent("1");
  });
  test("should be enabled", () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId("button")).toBeEnabled();
  });
  
});