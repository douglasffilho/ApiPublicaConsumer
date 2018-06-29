class CarMakerController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._carMakers = new Bind(
            new CarMakersList(),
            new CarMakersView($('#carMakersView')),
            'add', 'clear');

        this._carMakersService = new CarMakersService();
    }

    getCarMakers() {
        console.log('importando fabricantes de carros');
        
        Promise.all([
            this._carMakersService.getAllCarMakers()
        ])
        .then(response => {
            response
                .reduce((carMakers, item) => carMakers.concat(item),[])
                .forEach(carMaker => this._carMakers.add(carMaker));
        })
        .catch(error => console.log(error));
    }

}