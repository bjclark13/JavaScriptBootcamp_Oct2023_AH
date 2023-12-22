// create a plant interface and export it
export interface Plant {
    growthRate: number;
    currentHeight: number;

    water(): void
}