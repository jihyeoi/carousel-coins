import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";


// smoke test
it("renders without crashing", function () {
    render(<Card
        caption="Photo by Richard Pasquarella on Unsplash"
        src={image1}
        currNum={1}
        totalNum={3} />)
});

// snapshot test
it("matches snapshot", function () {
    const { container } = render(<Card
            caption="Photo by Richard Pasquarella on Unsplash"
            src={image1}
            currNum={1}
            totalNum={3} />);
    expect(container).toMatchSnapshot();
});