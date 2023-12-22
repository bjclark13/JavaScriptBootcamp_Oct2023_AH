import { GardenPlant } from "../src/GardenPlant";
describe("GardenPlant class", () => {
  it("growthRate is set and currentcurrentHeight is 0", () => {
    const plant = new GardenPlant(6);
    expect(plant.growthRate).toBe(6)
    expect(plant.currentHeight).toBe(0)
  });

  it("water increases currentHeight", () => {
    const plant = new GardenPlant(6);
    plant.water()
    expect(plant.currentHeight).toBeGreaterThan(0)
  });

  it("prune reduces by .5", () => {
    const plant = new GardenPlant(6);
    plant.currentHeight = 10
    plant.prune()
    expect(plant.currentHeight).toBeCloseTo(9.5)
  });

  it("dont prune currentHeight 1", () => {
    const plant = new GardenPlant(6);
    plant.currentHeight = 1
    plant.prune()
    expect(plant.currentHeight).toBe(1)
  });
});
