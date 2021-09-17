import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import ColorList from './ColorList';

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>);
});
    

    const colors = [
        {
          color: "aliceblue",
          code: {
            hex: "#f0f8ff",
          },
          id: 1,
        },
        {
          color: "limegreen",
          code: {
            hex: "#99ddbc",
          },
          id: 2,
        },
        {
          color: "aqua",
          code: {
            hex: "#00ffff",
          },
          id: 3,
        },
        {
          color: "aquamarine",
          code: {
            hex: "#7fffd4",
          },
          id: 4,
        },
        {
          color: "lilac",
          code: {
            hex: "#9a99dd",
          },
          id: 5,
        },
        {
          color: "softpink",
          code: {
            hex: "#dd99ba",
          },
          id: 6,
        },
        {
          color: "bisque",
          code: {
            hex: "#dd9a99",
          },
          id: 7,
        },
        {
          color: "softyellow",
          code: {
            hex: "#dcdd99",
          },
          id: 8,
        },
        {
          color: "blanchedalmond",
          code: {
            hex: "#ffebcd",
          },
          id: 9,
        },
        {
          color: "blue",
          code: {
            hex: "#6093ca",
          },
          id: 10,
        },
        {
          color: "blueviolet",
          code: {
            hex: "#8a2be2",
          },
          id: 11,
        },
      ];

test("Renders a list of colors without errors", () => {
    console.log("COLORS",colors)
    render(<ColorList colors={colors}/>)

    let listedColors = screen.queryByRole("ul");

    expect(listedColors).toHaveLength(11);
});


test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const {rerender} = render(<ColorList colors={colors} editing={true}/>);
    const editText = screen.queryByText(/edit color/i);
    expect(editText).toBeInTheDocument();

    rerender(<ColorList editing={false} />);
    editText = screen.queryByText(/edit color/i);
    expect(editText).toBeFalsy
    expect(editText).toBeNull

});

