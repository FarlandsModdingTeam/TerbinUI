import Encabezado from "../componentes/Encabezado.jsx";
import T from '../componentes/T.jsx';

export default function Configuracion()
{
    return (
    <>
        <Encabezado k="9" />
        <div class="fbody">
            <p><T k="15">Config for TerbinUI.</T></p>
        </div>
    </>);
}