const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")({ sigint: true });
const dir = path.join(__dirname, "notes");


if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const agregarNota = () => {
    try {
        const nameFile = prompt("Escriba el nombre de la nota: ");
        const contenido = prompt("Escriba el contenido de la nota: ");

        fs.writeFileSync(path.join(dir, `${nameFile}.txt`), contenido)
        console.log(`\n--------[Nota "${nameFile}" agregada correctamente]--------\n`);
    } catch (error) {
        console.log("Error al intentar crear la nota");
    }
}

const editarNota = () => {

    try {
        const nameFile = prompt("Escriba el nombre de la nota que desea editar: ");
        const validate = fs.readFileSync(path.join(dir, `${nameFile}.txt`), "utf-8");
        console.log(`\n--------[Nota "${nameFile}" Encontrada]--------`);
        console.log(`Nota: "${validate}" \n`);

            console.log(`
1. Iniciar desde cero
2. Continuar 
    \n`)
    const option = prompt("Seleccione una opción: ")
    const contenido = prompt("Escriba el contenido de la nota: ");

    switch (parseInt(option)) {
        case 1:
            fs.writeFileSync(path.join(dir, `${nameFile}.txt`), contenido)
            break;
        case 2:
            fs.writeFileSync(path.join(dir, `${nameFile}.txt`), `${validate} ${contenido}`)
            break;
        default:
            break;
    }
        console.log(`\n--------[Nota "${nameFile}" Editada Correctamente]--------`);
    
    } catch (error) {
        console.log(`\n--------[Nota no encontrada o ha ocurrido un error]--------`);
    }

}

const leerNota = () => {
    try {
        const nameFile = prompt("Escriba el nombre de la nota que desea leer: ");
        const validate = fs.readFileSync(path.join(dir, `${nameFile}.txt`), "utf-8");
        console.log(`\n--------[Nota "${nameFile}" Encontrada]--------`);
        console.log(`Nota: "${validate}" \n`);
    } catch (error) {
        console.log("Error al intentar leer la nota");
    }
}

const eliminarNota = () => {
    try {
        const nameFile = prompt("Escriba el nombre de la nota que desea eliminar: ");
        if (fs.existsSync(path.join(dir, `${nameFile}.txt`))) {
            fs.unlinkSync(path.join(dir, `${nameFile}.txt`));
        }
        console.log(`\n--------[Nota "${nameFile}" eliminada]--------`);
    } catch (error) {
        console.log("Error al intentar eliminar la nota");
    }
}

while (true) {
    console.log(`
1. Agregar Nota
2. Editar Nota
3. Leer Nota
4. Eliminar Nota
5. Salir
    \n`)
    const option = prompt("Seleccione una opción: ")

    switch (parseInt(option)) {
        case 1:
            agregarNota()
            break;
        case 2:
            editarNota();
            break;
        case 3:
            leerNota();
            break;
        case 4:
            eliminarNota();
            break;
        case 5: 
            break
        default:
            break;
    }

    if (parseInt(option) === 5) {
        break
    }
}
