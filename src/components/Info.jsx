import React, { useState } from "react";
import '../css/info.css';

function Informacion(props) {
    return (
        <div className="contenedor-testimonio">
            <img className='imagen-testimonio'
                src={require(`../images/img-${props.imagen}.png`)}
                alt='human picture'
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
                    </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en {props.empresa}
                    </p>
                <p className='texto-testimonio'>
                    "{props.testimonio}"
                    </p>
            </div>
        </div>
    );
}

export default Informacion;