function transformValue(value) {
    if (isNaN(Number(value))) {
        return 0;
     }
     return Number(value);
}
class Opration {
    constructor(x, y) {
        this.x = transformValue(x);
        this.y = transformValue(y);
    }
    getResult() {
        throw new Error('don\'t call parent');
    };
    checkValue() {
        throw new Error('don\'t call parent');
    };
}

class Add extends Opration {
    constructor(x, y) {
        super(x, y);
    }
    getResult() {
        this.checkValue(this.x, this.y);
        return this.x + this.y;
    };
    checkValue(e) {
        if (isNaN(Number(e))) {
            throw new Error('please enter number')
        }
    }
}

class SimplyFactory {
    constructor(x, y, type) {
        switch(type) {
            case '+':
                return new Add(x, y);
                break;
            default:
                throw new Error('xxx');
        }
    }
}

let add = new SimplyFactory(2, '5', '+');
console.log(add.getResult());