import T from './T.jsx';

export default function Encabezado({t, k})
{
    return (
    <>
        <div className="align-items-left p-3 mb-2 bg-primary text-white">
            <h1>{t || <T k={k}>Home</T>}</h1>
        </div>
    </>);
}