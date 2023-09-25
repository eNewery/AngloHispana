"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const Landing = () => {
    const [form, setForm] = useState(false)
const router = useRouter()
    
    
    function handleFormBtn() {
            setForm(!form)
    }
  return (
    <div className="landingContainer">
      <section className="landingSectionsContainer">
        <section className="landingContentContainer">
          <div className="landingContent">
            <div className="landingTitleContainer">
              <h1 className="landingTitle">La Universidad AngloHispana</h1>
              <h2 className="landingSubtitle">CON BECAS PARA INMIGRANTES</h2>
            </div>
            <div className="landingBtnContainer">
              <button onClick={() => handleFormBtn()} className="landingBtn">Empieza Ahora</button>
              <button className="landingBtnMedia">Empieza Ahora</button>
              <h2 className="landingText">
                <span>INSPIRAMOS Y FORMAMOS</span>EN DOS IDIOMAS.
              </h2>
            </div>
          </div>
        </section>
       {form === false ? <section className="landingLogo"></section> : <div className="landingContactForm"><h2 className="landingContactTitle">¡Aprende con nosotros!</h2><input placeholder="Correo Electrónico" type="text" /><button className="landingBtn">Suscribirse Gratis!</button></div>}
  
      </section>
      <div className="bottomLandingContainer">
      <div class="landingCard">
            <div class="front"><svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>certificate</title><g fill="#eb4438" class="nc-icon-wrapper"><path fill="#ffffff" d="M36,25c0-0.553-0.448-1-1-1H13c-0.552,0-1,0.447-1,1s0.448,1,1,1h22C35.552,26,36,25.553,36,25z"></path><path fill="#ffffff" d="M29,32H13c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S29.552,32,29,32z"></path><path fill="#ffffff" d="M29,40H13c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S29.552,40,29,40z"></path><path data-color="color-2" d="M42,49.667V62c0,0.356,0.189,0.686,0.498,0.865c0.309,0.179,0.689,0.181,0.998,0.003 L50,59.152l6.504,3.716C56.657,62.956,56.829,63,57,63c0.174,0,0.347-0.045,0.502-0.135C57.811,62.686,58,62.356,58,62V49.667 C55.681,51.136,52.943,52,50,52S44.319,51.136,42,49.667z"></path><path fill="#ffffff" d="M5,15h49v7.558c1.431,0.397,2.774,0.999,4,1.776V12c0-0.552-0.448-1-1-1H2c-0.552,0-1,0.448-1,1v42 c0,0.552,0.448,1,1,1h38v-4H5V15z"></path><path data-color="color-2" d="M50,24c-7.168,0-13,5.832-13,13s5.832,13,13,13s13-5.832,13-13S57.168,24,50,24z"></path><path data-color="color-2" d="M29,3.191L37.977,9h3.683L29.543,1.16c-0.331-0.213-0.756-0.213-1.087,0L16.34,9h3.683 L29,3.191z"></path></g></svg></div>
            <div class="back">DIPLOMAS RECONOCIDOS DESDE EUROPA Y USA.</div>
        </div>
        <div class="landingCard">
            <div class="front"><svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>pectoral machine</title><g fill="#eb4438" class="nc-icon-wrapper"><path d="M46,44H18a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H31v9H24a1,1,0,0,0,0,2H40a1,1,0,0,0,0-2H33V51H46a1,1,0,0,0,1-1V45A1,1,0,0,0,46,44Z" fill="#ffffff"></path><path d="M39,15H25a3,3,0,0,0-3,3V42H42V18A3,3,0,0,0,39,15Z" fill="#ffffff"></path><path d="M59,20H56V11a9.01,9.01,0,0,0-9-9H17a9.01,9.01,0,0,0-9,9v9H5a1,1,0,0,0-1,1V37a1,1,0,0,0,1,1H8v4a1,1,0,0,0,2,0V38h3a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1H10V11a7.009,7.009,0,0,1,7-7H31v7h2V4H47a7.009,7.009,0,0,1,7,7v9H51a1,1,0,0,0-1,1V37a1,1,0,0,0,1,1h3v4a1,1,0,0,0,2,0V38h3a1,1,0,0,0,1-1V21A1,1,0,0,0,59,20Z" data-color="color-2"></path></g></svg></div>
            <div class="back">PRÁCTICAS Y TALLERES EN MÉTODO HARVARD</div>
        </div>
        <div class="landingCard">
            <div class="front"><svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>heartbeat</title><g fill="#eb4438" class="nc-icon-wrapper"><path d="M62,31H58.414a22.336,22.336,0,0,0,2.628-9.545A16.412,16.412,0,0,0,44.712,5,16.073,16.073,0,0,0,32,11.168,16.073,16.073,0,0,0,19.288,5,16.412,16.412,0,0,0,2.958,21.455,22.315,22.315,0,0,0,5.583,31H2a1,1,0,0,0,0,2H20a1,1,0,0,0,.857-.485l5.187-8.646L37.168,40.555a1,1,0,0,0,.8.445H38a1,1,0,0,0,.8-.4L44.5,33H62a1,1,0,0,0,0-2Z" fill="#ffffff"></path><path data-color="color-2" d="M40.4,41.8A3.012,3.012,0,0,1,38,43h-.028A3.031,3.031,0,0,1,35.5,41.663l-9.37-14.055-3.561,5.936A3.016,3.016,0,0,1,20,35H7.809c7.885,12.712,22.705,25.068,23.554,25.771a1,1,0,0,0,1.274,0c.849-.7,15.669-13.059,23.554-25.771H45.5Z"></path></g></svg></div>
            <div class="back">COMPROMISO SOCIAL CON LA COMUNIDAD HISPANA</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;