import React from "react";
import { render } from "@testing-library/react";
import AppProd from "../containers/App";

test("renders learn react link", () => {
  const { getByText } = render(<AppProd />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
