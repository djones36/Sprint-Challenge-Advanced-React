import React from "react";
import { render, getByAltText, getByText } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";

test("App renders", async () => {
  await render(<App />);
});

test("Header renders", () => {
  render(<Header />);
});

test("contains header text", () => {
  const { getByText } = render(<Header />);
  getByText(/Worlds Top Soccer Players/i);
});

test("toggle renders", () => {
  render(<dark-mode__toggle />);
});
