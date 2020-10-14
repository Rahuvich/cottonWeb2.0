import React from "react"

class CottonMap extends React.Component {
  render() {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.9941476348472!2d2.361989875847841!3d41.5165193182852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x414fad4945aebe2d!2sLavander%C3%ADa%20COTTON!5e0!3m2!1ses!2ses!4v1602684887612!5m2!1ses!2ses"
        style={{
          height: "400px",
          width: "100%",
          border: "0px",
          frameborder: "0",
        }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    )
  }
}

export default CottonMap
