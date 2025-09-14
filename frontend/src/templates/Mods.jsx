import Encabezado from "../componentes/Encabezado.jsx";
import T from "../componentes/T.jsx";

export default function Mods()
{
    return (
    <>
        <Encabezado k="8" />
        <div class="fbody">
            <p><T k="12">Here you can manage the mods installed in your TerbinUI instance.</T></p>

            <div class="mb-3">
                <label for="modUpload" class="form-label"><T k="13">Install new mod:</T></label>
                <input class="form-control" type="file" id="modUpload" />
            </div>

            <h3><T k="14">Installed Mods</T></h3>
            <ul id="modList" class="list-group">
                {/* Aquí se listarán los mods instalados */}
            </ul>
        </div>
    </>);
}