const queen = {
	x: 4,
	y: 0,

	moves: [],

	canMoveThere(x, y) {
		// has to be within 8 x 8
		if (x < 8 && y < 8) {
			// can be diagonal
			if ( Math.abs(x - this.x) === Math.abs(y - this.y) ) {
				return true
			}

			// can be horizontal
			if ( this.x ===  x) {
				return true
			}

			// can be vertical
			if (this.y === y ){
				return true;
			}
		}


		return false;
	},

	move(newX, newY) {
		if (this.canMoveThere(newX, newY)) {
			this.moves.push({x: newX, y: newY})
			this.x = newX;
			this.y = newY;

			console.log("new location",this.moves)
		} else {
			console.log("can't move there!", newX, newY)
		}
	}
}

queen.move(1,0)
queen.move(1,7)
queen.move(1,2)
queen.move(2,4)