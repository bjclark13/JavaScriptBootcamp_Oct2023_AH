import { Student } from "./study-guide"

describe('study guide', () => {
    it('student age starts at zero', () => {
        const student = new Student("BJ", "Clark");
        expect(student.age).toBe(0)
    })
})