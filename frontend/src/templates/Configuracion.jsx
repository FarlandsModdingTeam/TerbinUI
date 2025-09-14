import Encabezado from "../componentes/Encabezado.jsx";
import T from '../componentes/T.jsx';
import { ChangeLanguage } from '../Traductor.js';

export default function Configuracion()
{
    return (
    <>
        <Encabezado k="9" />
        <div class="fbody">
            <p><T k="15">Config for TerbinUI.</T></p>
            <p>Pruebas de Idioma</p>
            <button onClick={() => ChangeLanguage("Español")}>Cambiar español</button>
            <button onClick={() => ChangeLanguage("English")}>Cambiar ingles</button>
        </div>
    </>);
}