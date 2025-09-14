import Encabezado from "../componentes/Encabezado.jsx";
import T from '../componentes/T.jsx';

export default function Home()
{
    return (
    <>
        <Encabezado k="6" />
        <div class="fbody">
            <p><T k="10">Here is the home page.</T></p>
        </div>
    </>);
} 