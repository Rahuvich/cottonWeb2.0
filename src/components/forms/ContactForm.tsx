import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import classNames from "classnames";
import { IoMdSend } from "react-icons/io";
import ReactDOMServer from "react-dom/server";
import {
  ContactFormObject,
  InstitutionType,
  Periodicity,
  ClothType,
  Quantity,
  MailObject,
} from "../../@types";
import MailTemplate from "../templates/mail";

interface LocalState {
  sended: boolean;
  error: boolean;
  msg: string;
}

function ContactForm() {
  const schema = yup.object({
    nombre: yup.string().required(),
    poblacion: yup.string().required(),
    email: yup.string().required(),
    telefono: yup.string().required(),
    nombre_establecimiento: yup.string().required(),
    tipo_establecimiento: yup
      .mixed()
      .oneOf(Object.values(InstitutionType))
      .required(),
    periodicidad: yup.mixed().oneOf(Object.values(Periodicity)).required(),
    tipo_ropa: yup.mixed().oneOf(Object.values(ClothType)).required(),
    cantidad: yup.mixed().oneOf(Object.values(Quantity)).required(),
    comentario: yup.string(),
  });

  const [state, setState] = useState({
    sended: false,
    error: false,
    msg: "",
  });

  async function onSubmit(values: ContactFormObject, { resetForm }) {
    const body: MailObject = {
      from: {
        email: "raulmateob@gmail.com",
        name: "Lavandería Cotton Web",
      },
      to: {
        email: "lavanderia@cotton.es",
        name: "Lavandería Cotton",
      },
      subject: "Formulario Página Web",
      textPart: JSON.stringify(values),
      customId: values.email,
      htmlPart: ReactDOMServer.renderToStaticMarkup(
        <MailTemplate {...values} />
      ),
    };

    const resp = await fetch("https://raulmabe.dev/api/mail/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const content = await resp.json();

    if (content.Messages[0].Status === "success") {
      setState({
        sended: true,
        error: false,
        msg:
          "¡Gracias por contactarnos! El mensaje se ha enviado correctamente.",
      });
    } else {
      setState({
        sended: true,
        error: true,
        msg:
          "¡Ups! El mensaje no se ha enviado correctamente, inténtelo más tarde.",
      });
    }

    resetForm();
  }

  if (state.sended) {
    return (
      <div className="flex flex-row justify-center text-center my-20">
        <h2>{state.msg}</h2>
      </div>
    );
  }

  return (
    <Formik
      initialValues={{
        nombre: "",
        poblacion: "",
        email: "",
        telefono: "",
        nombre_establecimiento: "",
        tipo_establecimiento: InstitutionType.Hotel,
        periodicidad: Periodicity.Daily,
        tipo_ropa: ClothType.Manteleria,
        cantidad: Quantity.Ten_to_TwentyFive,
        comentario: "",
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <Form className="flex flex-col">
          <p>
            <b>Formulario de contacto</b>
          </p>
          <div className="flex flex-row flex-wrap items-center pb-5">
            <div className="flex flex-col m-2">
              <label className="text-sm">Nombre*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.nombre,
                })}
                placeholder="Nombre"
                type="text"
                name="nombre"
              />
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Población*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.poblacion,
                })}
                placeholder="Población"
                type="text"
                name="poblacion"
              />
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Correo de contacto*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.email,
                })}
                placeholder="Correo de contacto"
                type="text"
                name="email"
              />
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Teléfono*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.telefono,
                })}
                placeholder="Teléfono"
                type="text"
                name="telefono"
              />
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center pb-5">
            <div className="flex flex-col m-2">
              <label className="text-sm">Nombre del establecimiento*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.nombre_establecimiento,
                })}
                placeholder="Nombre del establecimiento"
                type="text"
                name="nombre_establecimiento"
              />
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Tipo de establecimiento*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.tipo_establecimiento,
                })}
                placeholder="Tipo de establecimiento"
                name="tipo_establecimiento"
                as="select"
              >
                {Object.values(InstitutionType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Field>
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Periodicidad del servicio*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.periodicidad,
                })}
                name="periodicidad"
                as="select"
              >
                {Object.values(Periodicity).map((periodicity) => (
                  <option key={periodicity} value={periodicity}>
                    {periodicity}
                  </option>
                ))}
              </Field>
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Tipo de ropa*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.tipo_ropa,
                })}
                name="tipo_ropa"
                as="select"
              >
                {Object.values(ClothType).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Field>
            </div>

            <div className="flex flex-col m-2">
              <label className="text-sm">Cantidad*</label>
              <Field
                className={classNames({
                  "border-red-400": errors.cantidad,
                })}
                name="cantidad"
                as="select"
              >
                {Object.values(Quantity).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Field>
            </div>
          </div>

          <div className="flex flex-col items-stretch pb-5 mx-2">
            <label className="text-sm">Comentario</label>
            <Field
              className={classNames({
                "border-red-400": errors.comentario,
              })}
              placeholder="Comentario"
              as="textarea"
              name="comentario"
            />
          </div>

          <button className="self-center" type="submit">
            Enviar <IoMdSend className="ml-2" />
          </button>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
