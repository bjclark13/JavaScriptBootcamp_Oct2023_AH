import { Plant } from "./Plant";
// Create an assessGrowth function and a waterPlants function. Export both
export function assessGrowth(plants: Plant[]): number {
    let sum = 0;

    for (const plant of plants) {
        sum += plant.currentHeight
    }

    return sum;
}

export function waterPlants(plants: Plant[]): void {
    for (const plant of plants) {
       plant.water()
    }
}