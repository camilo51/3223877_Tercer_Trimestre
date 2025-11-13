const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.static('public'));

const getCocktailData = async () => {
    try {
        const numCocktails = 12;
        const cocktails = [];

        for (let i = 0; i < numCocktails; i++) {
            const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await res.json();
            cocktails.push(data.drinks[0]);
        }

        // Generamos las tarjetas con estructura .card-content
        const cards = cocktails.map(drink => {
            // Obtenemos los ingredientes y medidas
            let ingredients = '';
            for (let i = 1; i <= 15; i++) {
                const ingredient = drink[`strIngredient${i}`];
                const measure = drink[`strMeasure${i}`];
                if (ingredient) {
                    ingredients += `<li>${measure ? measure : ''} ${ingredient}</li>`;
                }
            }

            return `
                <div class="card">
                    <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                    <div class="card-content">
                        <h2>${drink.strDrink}</h2>
                        <p><strong>ID:</strong> ${drink.idDrink}</p>
                        <p><strong>Tipo:</strong> ${drink.strAlcoholic}</p>
                        <p><strong>Categoría:</strong> ${drink.strCategory}</p>
                        <p><strong>Ingredientes:</strong></p>
                        <ul>${ingredients}</ul>
                        <p><strong>Instrucciones:</strong> ${drink.strInstructions}</p>
                    </div>
                </div>
            `;
        }).join('');

        const htmlTemplate = fs.readFileSync('./public/tabla.html', 'utf-8')
            .replace('<!-- datos tabla -->', cards);

        fs.writeFileSync('./public/datosApi.html', htmlTemplate);
        console.log('✅ Archivo datosApi.html creado exitosamente');

    } catch (error) {
        console.error('❌ Error al obtener datos de TheCocktailDB:', error);
    }
};

getCocktailData().then(() => {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/datosApi.html');
    });
});

app.listen(port, () => console.log(`🚀 Servidor corriendo en http://localhost:${port}`));
