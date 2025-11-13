const fs = require('fs');
const path = require('path');

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
let cocteles = [];

const mostrar = async (req, res) => {
    await getCocteles();
    const body = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8');
    const html = body.replace("##COCTELES##", await htmlCards())
    fs.writeFileSync(path.join(__dirname, '../public/cocteles.html'), html);
    res.sendFile(path.join(__dirname, '../public/cocteles.html'));
}

const getCocteles = async (req, res) =>  {
    cocteles = [];
    try {
        for(let i = 0; i < 8; i++) {
            const result = await fetch(API_URL);
            const data = await result.json();
            cocteles.push(data.drinks[0]);
        }
    } catch (error) {
        console.error("Error obteniendo cócteles:", error);
    }
}

const htmlCards = async () => {
    return cocteles.map(coctel => (`
        <div class=" group shadow-lg rounded overflow-hidden hover:scale-105 transition-all duration-300">
            <div class="overflow-hidden">
                <img class="w-full group-hover:rotate-6 group-hover:scale-120  transition-all duration-300 z-5 relative" src="${coctel.strDrinkThumb}" />
            </div>
            <div class="p-2 z-10 bg-white relative w-full">
                <p class="font-bold">${coctel.strDrink}</p>
                <p>Categoría: ${coctel.strCategory}</p>
                <p>Alcohol: ${coctel.strAlcoholic === "Alcoholic" ? "Sí" : "No"}</p>
            </div>
        </div>
    `)).join('')
}

module.exports = { mostrar };