import React from "react";
import { create } from "react-test-renderer";
import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calculator from "./_calculator";

describe("Calculator testing", () => {
  test("Matches the snapshot", () => {
    const input = create(<Calculator />);
    expect(input.toJSON()).toMatchSnapshot();
  });
  test("should have calculator", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("calculator")).toBeInTheDocument();
  });
  test("should have title", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("title")).toBeInTheDocument();
  });
  test("should have input", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("input")).toBeInTheDocument();
  });
  test("should have keypad", () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId("keypad")).toBeInTheDocument();
  });
  test("should have all buttons buttons", () => {
    const { getAllByTestId } = render(<Calculator />);
    expect(getAllByTestId("button")).toHaveLength(18);
  });

  test("Perform Calculation", () => {
    const { getAllByTestId,getByTestId } = render(<Calculator />);
    const buttons = getAllByTestId("button");
    const input = getByTestId("input");
    expect(input).toHaveTextContent("");
    fireEvent.click(buttons[7]);
    expect(input).toHaveTextContent("5");
    fireEvent.click(buttons[5]);
    expect(input).toHaveTextContent("5+");
    fireEvent.click(buttons[6]);
    expect(input).toHaveTextContent("5+6");
    fireEvent.click(buttons[16]);
    expect(input).toHaveTextContent("11");
    fireEvent.click(buttons[1]);
    expect(input).toHaveTextContent("1");
    fireEvent.click(buttons[5])
    fireEvent.click(buttons[5])
    fireEvent.click(buttons[16]);
    expect(input).toHaveTextContent("error");
    fireEvent.click(buttons[0]);
    expect(input).toHaveTextContent("");

  });
});
