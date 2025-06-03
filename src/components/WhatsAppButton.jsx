import React from "react";
import "../assets/css/WhatsAppButton.css";
import whatsappLogo from "../assets/img/icons8-whatsapp.svg";

export default function WhatsAppButton() {
  const numTel = "+34651032944";
  const message = encodeURIComponent(
    "¡Hola! me encantaría saber más sobre tu trabajo."
  );

  return (
    <a
      href={`https://wa.me/${numTel}?text=${message}`}
      target="blank"
      rel="noopener noreferrer"
      className="btn-whatsapp"
    >
      <img src={whatsappLogo} alt="Whatsapp Logo" className="whatsapp-icon" />
      WhatsApp
    </a>
  );
}
