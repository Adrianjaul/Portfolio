import React from 'react'
import "./Contact.css"
import Mapa from '../Assets/Mapa.png'
import Mobile from '../Assets/Mobile.png';
import Location from '../Assets/Location.png';
import Envelope from '../Assets/Envelope.png'




export const Contact = () => {
  return (
    <section id="contacts" className="contacts">
        <div className="content-section">
            <h2>CONTACTO</h2>
            <div className="file">  


            <div className="col">
  <form action="https://formsubmit.co/adrijaul@outlook.com" method="POST">
    <label for="Nombre">Nombre</label>
    <input type="text" name="name" placeholder="Tú Nombre" />

    <label for="email">Correo Electrónico</label>
    <input type="email" name="email" placeholder="Dirección de Correo" />

    <label for="subject">Asunto</label>
    <input type="text" name="subject" placeholder="Asunto" />

    <label for="comments">Comentarios</label>
    <textarea name="comments" cols="30" rows="10" placeholder="Mensaje"></textarea>

    <input className="button" type="submit" value="Enviar" />

    <input type="hidden" name="_next" value="http://localhost:3000/#contacts" />
    <input type="hidden" name="_captcha" value="false" />
  </form>
</div>


                {/* <Mapa  */}
                <div className="col2">
                    <img className='Mapa' src={Mapa}/>
                    <div className="info">
                        <ul>
                            <li>
                                <img className='fa-solid fa-location' src={Location}/>
                                Langreo, (Asturias)
                            </li>

                            <li>
                                <img className='fa-solid fa-mobile-screen' src={Mobile}/>
                                Teléfono: 615024907
                            </li>

                            <li>
                                <img className='fa-solid fa-envelope' id='mail' src={Envelope}/>
                                Email: adrijaulig@gmail.com
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
     </section>
  );
}


export default Contact;
