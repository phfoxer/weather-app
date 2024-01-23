import { render } from "@testing-library/react";
import Sun from "./sun";

describe("Sun component", () => {
  it("renders with correct position", () => {
    const { container } = render(<Sun leftPosition={50} topPosition={50} />);
    expect(container.firstElementChild?.getAttribute("id")).toEqual("sun");
  });
});
