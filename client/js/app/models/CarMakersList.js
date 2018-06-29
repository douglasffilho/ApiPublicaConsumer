class CarMakersList {

    constructor() {
        this._carMakers = [];
    }

    add(carMaker) {
        this._carMakers.push(carMaker);
    }

    get carMakers() {
        return [].concat(this._carMakers);
    }

    clear() {
        this._carMakers = [];
    }

}