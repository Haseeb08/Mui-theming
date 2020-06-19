import React from "react";
import { create } from "react-test-renderer";
import { render } from "@testing-library/react";
import Title from "./_title";

describe("Title field testing", () => {
  test("Matches the snapshot", () => {
    const title = create(<Title />);
    expect(title.toJSON()).toMatchSnapshot();
  });
  test("title field should be in document", () => {
    const { getByTestId } = render(<Title />);
    expect(getByTestId("title")).toBeInTheDocument();
  });
  test("should be have default value, if prop is not provided", () => {
    const { getByTestId } = render(<Title />);
    expect(getByTestId("title")).toHaveTextContent("My Calculator");
  });
  test("should be have input value from props", () => {
    const { getByTestId } = render(<Title title="abc" />);
    expect(getByTestId("title")).toHaveTextContent("abc");
  });
});
