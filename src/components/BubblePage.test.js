import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.

    fetchColors.mockResolvedValueOnce({
        data:[
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
              }
        ]
    });
    
    render(<BubblePage/>);

    const colorBoxes = await screen.getByTestId("color");

    expect(colorBoxes).toHaveLength(2)

});