class CarMakersView extends View {

    template(model) {
        return `<table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>LOGO</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        ${model.carMakers.map(n => `
                            
                            <tr>
                                <td>${n.id}</td>
                                <td>${n.name}</td>
                                <td><img src="data:image/png;base64, ${n.image}"></img></td>
                            </tr>
                            
                        `).join('')}
                    </tbody>
                </table>`;
    }

}