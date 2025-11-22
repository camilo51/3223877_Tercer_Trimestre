export const login = (login) => {
  console.log(login ? "Está logueado" : "No está logueado");
  return !!login;
};