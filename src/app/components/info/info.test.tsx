import { render } from "@testing-library/react";
import Info from "./info";
import { TWeather } from "../../types";

describe("Sun component", () => {
  it("renders with correct position", () => {
    const data: TWeather = {
      coord: {
        lon: -38.4813,
        lat: -12.9822,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      base: "stations",
      main: {
        temp: 304,
        feels_like: 311,
        temp_min: 304,
        temp_max: 304,
        pressure: 1009,
        humidity: 74,
      },
      visibility: 10000,
      wind: {
        speed: 6.69,
        deg: 80,
      },
      clouds: {
        all: 20,
      },
      dt: 1706108622,
      sys: {
        type: 1,
        id: 8454,
        country: "BR",
        sunrise: 1706084613,
        sunset: 1706130473,
      },
      timezone: -10800,
      id: 6321026,
      name: "Salvador",
      cod: 200,
    };
    const { container } = render(<Info {...data} />);
    expect(container.firstElementChild?.getAttribute("id")).toEqual("info");
  });
});
