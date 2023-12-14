const {
  countLetters,
  scorePalindrome,
  convertTemperature,
  reverseCase,
  countDoubleLetters,
} = require("../src/misc"); // destructuring

describe("countLetters", () => {
  it("hello -> h = 1", () => {
    expect(countLetters("hello", "h")).toEqual(1);
  });

  it("hello -> l = 2", () => {
    expect(countLetters("hello", "l")).toEqual(2);
  });

  it("suspicious -> s = 3", () => {
    expect(countLetters("suspicious", "s")).toEqual(3);
  });

  it("Apple -> P = 2", () => {
    expect(countLetters("Apple", "P")).toEqual(2);
  });

  it("San Francisco -> s = 2", () => {
    expect(countLetters("San Francisco", "s")).toEqual(2);
  });
});

describe("convertTemperature", () => {
  it('("50F", "F") → 50', () => {
    expect(convertTemperature("50F", "F")).toBe(50);
  });

  it('("28C", "C") → 28', () => {
    expect(convertTemperature("28C", "C")).toBe(28);
  });

  it('("32F", "C") → 0', () => {
    expect(convertTemperature("32F", "C")).toBe(0);
  });

  it('("20C", "F") → 50', () => {
    expect(convertTemperature("20C", "F")).toBe(68);
  });

  it('("-15C", "F") → 50', () => {
    expect(convertTemperature("-15C", "F")).toBe(5);
  });
});

describe("scorePalindrome", () => {
  it("nothing -> 0", () => {
    expect(scorePalindrome("")).toBe(0);
  });

  it("noon", () => {
    expect(scorePalindrome("noon")).toBe(2);
  });

  it("socks", () => {
    expect(scorePalindrome("socks")).toBe(1);
  });

  it("pop", () => {
    expect(scorePalindrome("pop")).toBe(1);
  });

  it("peoples", () => {
    expect(scorePalindrome("peoples")).toBe(1);
  });

  it("abcdeedcbx -> 4", () => {
    expect(scorePalindrome("abcdeedcbx")).toBe(4);
  });
});

describe("reverseCase", () => {
  it("a -> A", () => {
    expect(reverseCase("a")).toBe("A");
  });

  it("A -> a", () => {
    expect(reverseCase("A")).toBe("a");
  });

  it("Car -> cAR", () => {
    expect(reverseCase("Car")).toBe("cAR");
  });

  it("PoPuLAR -> pOpUlar", () => {
    expect(reverseCase("PoPuLAR")).toBe("pOpUlar");
  });

  it("empty", () => {
    expect(reverseCase("")).toBe("");
  });

  it("123 -> 123", () => {
    expect(reverseCase("123")).toBe("123");
  });

  it("2:00pm -> 2:00PM", () => {
    expect(reverseCase("2:00pm")).toBe("2:00PM");
  });
});

describe('countDoubleLetters', () => {
  it('sandy', () => {
    expect(countDoubleLetters('sandy')).toBe(0)
  })

  it('apple', () => {
    expect(countDoubleLetters('apple')).toBe(1)
  })

  it('poll', () => {
    expect(countDoubleLetters('poll')).toBe(1)
  })

  it('success', () => {
    expect(countDoubleLetters('success')).toBe(2)
  })

  it('fizzbuzzers', () => {
    expect(countDoubleLetters('fizzbuzzers')).toBe(2)
  })

  it('fizzbuzzers', () => {
    expect(countDoubleLetters('fizzbuzzers')).toBe(2)
  })

  it('feelinggood', () => {
    expect(countDoubleLetters('feelinggood')).toBe(3)
  })

  it('mississippi', () => {
    expect(countDoubleLetters('mississippi')).toBe(3)
  })
})
