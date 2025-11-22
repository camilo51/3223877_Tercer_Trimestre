const login = (login) => {
    if (!login){
        console.log("No está logueado");
        return false;
    }
    console.log("Está logueado");
    return true;
}