import Calculadora from '@/components/Calculadora';
import FormularioContacto from '@/components/FormularioContacto';
import IniciarSesion from '@/components/IniciarSesion';
import Interruptor from '@/components/Interruptor';
import ListaTareas from '@/components/ListaTareas';
import MyContador from '@/components/MyContador';
import PerfilUsuario from '@/components/PerfilUsuario';
import SaludoPersonalizado from '@/components/SaludoPersonalizado';

export default function Home() {
  return (
    <>
      {/* <MyContador />
      <br />
      <SaludoPersonalizado />
      <br />
      <Calculadora />
      <br />
      <Interruptor />
      <br />
      <IniciarSesion />
      <br />
      <ListaTareas />
      <br />
      <PerfilUsuario /> */}
      <FormularioContacto />
    </>
  );
}
