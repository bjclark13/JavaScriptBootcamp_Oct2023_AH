import { Flower } from "../src/Flower";
import { GardenPlant } from "../src/GardenPlant";
import { assessGrowth, waterPlants } from "../src/functions";

describe("assessGrowth function", () => {
  it("works", () => {
    const plants = [new Flower(1, true), new GardenPlant(1)];
    plants[0].currentHeight = 2;
    plants[1].currentHeight = 1;

    expect(assessGrowth(plants)).toBe(3);
  });
});

describe("waterPlants function", () => {
  it("works", () => {
    const plants = [new Flower(1, true), new GardenPlant(1)];
    plants[0].currentHeight = 2;
    plants[1].currentHeight = 1;
    waterPlants(plants)

    expect(assessGrowth(plants)).toBe(5);
  });
});
