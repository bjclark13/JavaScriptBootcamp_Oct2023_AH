import { Flower } from "../src/Flower"
describe("Flower class", () => {
  it("new flower has properties set from constructor", () =>{
    // set up 
    const flower = new Flower(5, true);
    //act

    // assert
    expect(flower.growthRate).toBe(5)
    expect(flower.hasThorns).toBe(true)
    expect(flower.currentHeight).toBe(0)
  })

  it("hasThorns defaults to false", () =>{
    const flower = new Flower(5);
    expect(flower.hasThorns).toBe(false)
  })

  it("prune reduces by .5", () =>{
    // set up
    const flower = new Flower(5);
    // act
    flower.currentHeight = 10;
    flower.prune()

    // assert
    expect(flower.currentHeight).toBe(9.5)
  })

  it("prune reduces by 1 with thorns", () =>{
    const flower = new Flower(5, true);
    flower.currentHeight = 10
    flower.prune()
    expect(flower.currentHeight).toBe(9)
  })

  it("prune reduces by 0 if flower currentHeight is 1", () =>{
    const flower = new Flower(5, true);
    flower.currentHeight = 1;
    flower.prune()
    expect(flower.currentHeight).toBe(1)
  })
});