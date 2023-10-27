const queen = {
	x: 4,
	y: 0,

	moves: [],

	canMoveThere(x, y) {
		// rules for queens:
		// has to be on the board (8 x 8)
		if ( x < 8 && y < 8 ) {
			// or diagonal
			const dx = Math.abs(this.x - x);
			const dy = Math.abs(this.y - y);

			// the difference between where we are
			// and where we are going is the same
			// for both x and, that's diagonal (legal)
			if (dx === dy) {
				return true;
			}

			// has to be horizontal
			if ( y === newY ) {
				return true;
			}

			// or vertical
			if ( x === newX) {
				return true;
			}
		}

		return false;
	},

	move(newX, newY) {
		// if we can move
		if (this.canMoveThere(newX, newY)) {
			// set x and y to newX and newY
			this.x = newX;
			this.y = newY;

			// add our location to moves array
			this.moves.push({
				x: newX,
				y: newY,
			})
		}

	}
}


//  2, 0
//  3, 1
-- diagonal

// 2, 0
// 3, 0

// 2, 0
// 2, 1

// 2, 0
// 3, 2
