import React from "react";
import { ContactFormObject } from "../../@types";

function MailTemplate(props: ContactFormObject) {
  return (
    <div>
      <h1>Lavandería Cotton Web</h1>
      <small>Enviado desde el formulario de la página web</small>
      <div>
        <p>
          <b>Nombre: </b> {props.nombre}
        </p>

        <p>
          <b>Email: </b> {props.email}
        </p>

        <p>
          <b>Población: </b> {props.poblacion}
        </p>

        <p>
          <b>Telefono: </b> {props.telefono}
        </p>

        <p>
          <b>Nombre del establecimiento: </b> {props.nombre_establecimiento}
        </p>

        <p>
          <b>Tipo de establecimiento: </b> {props.tipo_establecimiento}
        </p>

        <p>
          <b>Periodicidad del servicio: </b> {props.periodicidad}
        </p>

        <p>
          <b>Tipo de ropa: </b> {props.tipo_ropa}
        </p>
        <p>
          <b>Cantindad: </b> {props.cantidad}
        </p>
        <p>
          <b>Comentario: </b> {props.comentario}
        </p>
      </div>
    </div>
  );
}

export default MailTemplate;
