class TicTacToe {
    constructor() {
		this.currentPlayer = 'x';
		this.gameMatrix = [[null, null, null], [null, null, null], [null, null, null]];
    }

    getCurrentPlayerSymbol() {
		return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
		if (!this.gameMatrix[rowIndex][columnIndex]) {
			this.gameMatrix[rowIndex][columnIndex] = this.currentPlayer;
			this.currentPlayer = (this.currentPlayer == 'x') ? 'o' : 'x';
		}
    }

    isFinished() {
		return (this.getWinner() != null || this.isDraw());
    }

    getWinner() {
		var resultsMatrix = [this.gameMatrix[0][0] + this.gameMatrix[0][1] + this.gameMatrix[0][2],
							this.gameMatrix[1][0] + this.gameMatrix[1][1] + this.gameMatrix[1][2],
							this.gameMatrix[2][0] + this.gameMatrix[2][1] + this.gameMatrix[2][2],
							this.gameMatrix[0][0] + this.gameMatrix[1][0] + this.gameMatrix[2][0],
							this.gameMatrix[0][1] + this.gameMatrix[1][1] + this.gameMatrix[2][1],
							this.gameMatrix[0][2] + this.gameMatrix[1][2] + this.gameMatrix[2][2],
							this.gameMatrix[0][0] + this.gameMatrix[1][1] + this.gameMatrix[2][2],
							this.gameMatrix[2][0] + this.gameMatrix[1][1] + this.gameMatrix[0][2]];
							
		if (resultsMatrix.indexOf("xxx") > -1) {
			return 'x';
		}
		else if (resultsMatrix.indexOf("ooo") > -1) {
			return 'o';
		}
		else return null;
    }

    noMoreTurns() {
		for (var i = 0; i < 3; i++) {
			if (this.gameMatrix[i].indexOf(null) != -1) {
				return false;
			}
		}
		return true;
    }

    isDraw() {
		return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
		return this.gameMatrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
