import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

testerColor = {
    color: "softyellow",
    code: {
      hex: "#dcdd99",
    },
    id: 8,
  };

test("Renders without errors with blank color passed into component", () => {
    render(<Color />);
});
  
test("Renders the color passed into component", () => {

    render(<Color color={testerColor}/>)

    const colorDiv = screen.queryByRole("div");

    expect(colorDiv).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});
    const mockDeleteColor = jest.fn();
    const mockToggleEdit = jest.fn();
    render(<Color toggleEdit={mockToggleEdit} deleteColor={mockDeleteColor}/>)

    const button = screen.queryByTestId("delete")
    userEvent.click(button)
    expect(mockDeleteColor.mock.calls).toHaveLength(1)
    expect(mockToggleEdit.mock.calls).toHaveLength(1)

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    const mockSetEditColor = jest.fn();
    const mockToggleEdit = jest.fn();

    render(<Color setEditColor={mockSetEditColor} toggleEdit={mockToggleEdit}/>)

    const colorDiv = screen.queryByTestId("color");

    userEvent.click(colorDiv);

    expect(mockSetEditColor.mock.calls).toHaveLength(1)
    expect(mockToggleEdit.mock.calls).toHaveLength(1)

});



