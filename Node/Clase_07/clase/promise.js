const promesa = new Promise((res, rej) => {
    const exito = true;
    if (exito) {
        res("La operacion fue un exito");
    } else {
        rej("La operacion fallo");
    }
});

promesa
    .then(console.log)
    .catch(console.log)