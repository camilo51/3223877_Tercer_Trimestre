import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const vuelos = [
    { code: 'AA123', pasajeros: ["P001", "P002"]},
    { code: 'BB456', pasajeros: ["P003", "P004", "P005", "P006"]},

]

export const index = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
}
export const store = (req, res) => {
    const data = req.body;
    const luggages = data.luggage.split(",").map(num => parseFloat(num.trim()));
    const sum = luggages.reduce((a, b) => a + b, 0);
    const excess = sum > 15 ? sum - 15 : 0;
    const overageCost = excess * 8000;

    const redirectWithData = (errorMessage) => {
        const params = new URLSearchParams({
            error: errorMessage,
            code: data.code || "",
            id: data.id || "",
            luggage: data.luggage || ""
        });
        return res.redirect("/?" + params.toString());
    };

    if (!data.code || !data.id || !data.luggage) {
        return redirectWithData('Los campos son obligatorios');
    }
    const vuelo = vuelos.find(vuelo => vuelo.code === data.code);
    if (!vuelo) {
        return redirectWithData('Vuelo no encontrado');
    }
    const pasajero = vuelo.pasajeros.includes(data.id);
    if (!pasajero) {
        return redirectWithData('Pasajero no encontrado en el vuelo');
    }
    if (data.luggage < 0) {
        return redirectWithData('El equipaje no puede ser negativo');
    }
    for (const luggage of luggages) {
        if (luggage > 32) {
            return redirectWithData('El equipaje no puede ser mayor a 32kg');
        }
    }
    if (luggages.length > 5) {
        return redirectWithData('No se pueden registrar más de 5 equipajes');
    }

    res.redirect(`/mostrar?code=${data.code}&id=${data.id}&weight=${sum}&excess=${excess}&overageCost=${overageCost}&luggages=${luggages.length}`);
};
