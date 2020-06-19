import React from 'react';
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Keypad from "./_keypad";

describe("Keypad testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Keypad />);
    expect(input.toJSON()).toMatchSnapshot();
  });
  test("should have keypad", () => {
    const { getByTestId } = render(<Keypad />);
    expect(getByTestId("keypad")).toBeInTheDocument();
  });
  
  test("should have all buttons buttons", () => {
    const { getAllByTestId } = render(<Keypad />);
    expect(getAllByTestId("button")).toHaveLength(18);
  });

});