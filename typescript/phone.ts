// Exercise:
// Create a class for Phone
// Create a class for SmartPhone

// think about the following:

// What are the things that every phone does?
// Every phone has:

// calling
// texting
// snake
// a phone number
// provider (att, verizon)
// owner -- Caller ID
interface Callable {
	call(): void
}

class Laptop implements Callable {
	call() {
		console.log('Facetime')
	}
}

class SmartWatch implements Callable {
	call() {
		console.log('calling from watch')
	}
}

class Phone implements Callable {
	number: number;
	owner: string;
	provider: string;

	contacts: string[] = [];

	// set up your data
	constructor(number: number, owner: string, provider: string) {
		this.number = number;
		this.owner = owner;
		this.provider = provider;
	}

	call() {
		console.log('ring ring ring')
	}

	text() {
		console.log('clickety clackety')
	}

	dial() {
		console.log('beep boop')
	}
}


class SmartPhone extends Phone {
	apps: string[] = [];
	locked: boolean = false;
	pin: number

	constructor(number: number, owner: string, provider: string, pin: number) {
		super(number, owner, provider); // setting up these values

		// set up pin
		this.pin = pin;
	}

	surfTheWeb(webSite: string) {
		if (this.locked) {
			console.log("PHONE IS LOCKED FOOL")
		} else {
			console.log('http://' + webSite)
		}
	}

	takePhoto() {
		console.log('click')
	}

	lookAtPhotos() {
		console.log('aww')
	}

	getGPSCoordinates() {

	}

	lockPhone() {
		this.locked = true;
	}

	unlockPhone(pin: number) {
		if (pin === this.pin) {
			this.locked = false;
		}
	}
}

const bjsPhone = new SmartPhone(6161231234, 'BJ Clark', 'AT&T', 1234)
bjsPhone.call(); // Phone
bjsPhone.text(); // Phone
bjsPhone.lockPhone(); // SmartPhone
bjsPhone.surfTheWeb('google.com'); // SmartPhone
bjsPhone.unlockPhone(1234); // SmartPhone
bjsPhone.surfTheWeb('google.com'); // SmartPhone


const phoneInventory: Callable[] = [
	new Phone(1, 'bj', 'att'),
	new SmartPhone(2, 'bj', 'verizon', 1234),
	new SmartWatch(),
];

for (const phone of phoneInventory) {
	console.log(phone.call());
}

// What are the things that only a smart phone does?
// internet
// camera
// games (apps)
// flash(light)
// GPS
// accellerometer
// privacy features (encryption)
// PIN password, face/touch ID, lock
// alarm / clo

// --
// What are other subclasses of phones?
class IPhone extends SmartPhone {
}


class Android extends SmartPhone {
}

class Landline extends Phone {
}

class Rotory extends Phone {
}