import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
//import "@testing-library/jest-dom/extend-expect";
import Calculator from "./_calc";

describe("Calculator testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Calculator />);
    expect(input.toJSON()).toMatchSnapshot();
  });
  test("should have page", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("calc-page")).toBeInTheDocument();
  });

  
});