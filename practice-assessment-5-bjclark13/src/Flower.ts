import { GardenPlant } from "./GardenPlant";

// Create a flower class and export it
export class Flower extends GardenPlant {
  constructor(growthRate: number, public hasThorns: boolean = false) {
    // calls the parent's constructor
    // this is required if the child has a constructor
    super(growthRate);
  }

  prune() {
    if (this.hasThorns && this.currentHeight > 2) {
      this.currentHeight -= 1;
    } else {
      super.prune();
    }
  }
}
