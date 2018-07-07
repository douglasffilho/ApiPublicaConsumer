class CarMakersService {

    constructor() {
        this._getAllCarMakersServiceUrl = 'http://localhost:8081/public/api/v1/cars-makers';
    }

    getAllCarMakers() {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this._getAllCarMakersServiceUrl);

            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {
                        console.log("Obtendo fabricantes de carros...");
                        resolve(JSON.parse(xhr.responseText)
                        .map(obj => new CarMaker(obj.id, obj.name, obj.image)));
                    } else {
                        let errorMessage = "Não foi possível obter fabricantes de carros no servico";
                        console.log(errorMessage);
                        console.log(xhr.responseText);
                        reject(errorMessage);
                    }
                }
            };

            xhr.send();
        });
    }

    // cadastrarNovaNegociacao(negociacao) {
    //     return new Promise((resolve, reject) => {
    //         let xhr = new XMLHttpRequest();
    //         xhr.open('POST', this._urlCadastrarNova);
    //         xhr.setRequestHeader('content-type', 'application/json');
            
    //         xhr.onreadystatechange = () => {
    //             if(xhr.readyState == 4) {
    //                 if(xhr.status == 200) {
    //                     resolve(negociacao);
    //                 } else {
    //                     let errorMessage = "Não foi possível acessar a API";
    //                     console.log(errorMessage);
    //                     console.log(xhr.responseText);

    //                     reject(errorMessage);
    //                 }
    //             }
    //         };

    //         let negociacaoAsString = `{"data":"${negociacao.data}",
    //                                 "quantidade":${negociacao.quantidade},
    //                                 "valor":${negociacao.valor}}`;

    //         xhr.send(negociacaoAsString);
    //     });
    // }

}