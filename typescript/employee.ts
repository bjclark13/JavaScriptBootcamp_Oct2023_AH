class Employee {
	salary: number

	calculatePay() {
		// take away taxes
		// take away 401k

		// divide by 28 (biweekly)
	}
}

class TaxExceptEmployee extends Employee {
	calculatePay() {
		// take away 401k

		// divide by 28 (biweekly)
	}
}

const bj = new TaxExceptEmployee();
console.log(bj.salary); // directly access the data: NO-NO

// getters and setters
const salary = bj.calculatePay();

