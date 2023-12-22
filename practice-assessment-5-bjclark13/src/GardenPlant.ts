import { Plant } from "./Plant";

// create a GardenPlant class and export it.
export class GardenPlant implements Plant {
  currentHeight: number;

  //   constructor(public growthRate: number) {
  //     this.currentHeight = 0;
  //   }
  // shortcut for:
  growthRate: number;
  constructor(growthRate: number) {
    this.growthRate = growthRate;
    this.currentHeight = 0;
  }

  water(): void {
    this.currentHeight += this.growthRate;
  }

  prune(): void {
    if (this.currentHeight > 1.5) {
      this.currentHeight -= 0.5;
    }
  }
}
