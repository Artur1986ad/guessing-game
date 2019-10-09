class GuessingGame {
    constructor() {
        this.min_number = 0;
        this.max_number = 0;
        this.number = 0 ;
    }

    setRange(min, max) {
          this.min = min;
          this.max = max;
    }

    guess() {
        this.number = Math.ceil(( this.min + this.max) / 2 );
        return this.number;
    }

    lower() {
        this.max = this.number;
    }

    greater() {
           this.min = this.number;
    }
}

module.exports = GuessingGame;
