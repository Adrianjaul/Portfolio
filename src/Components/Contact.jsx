import React from 'react'
import "./Contact.css"
import Mapa from '../Assets/Mapa.png'




export const Contact = () => {
  return (
    <section id="contacts" class="contacts">
        <div class="content-section">
            <h2>CONTACTO</h2>
            <div class="file">  


            <div class="col">
  <form action="https://formsubmit.co/adrijaul@outlook.com" method="POST">
    <label for="Nombre">Nombre</label>
    <input type="text" name="name" placeholder="Tú Nombre" />

    <label for="email">Correo Electrónico</label>
    <input type="email" name="email" placeholder="Dirección de Correo" />

    <label for="subject">Asunto</label>
    <input type="text" name="subject" placeholder="Asunto" />

    <label for="comments">Comentarios</label>
    <textarea name="comments" cols="30" rows="10" placeholder="Mensaje"></textarea>

    <input class="button" type="submit" value="Enviar" />

    <input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html" />
    <input type="hidden" name="_captcha" value="false" />
  </form>
</div>


                {/* <Mapa  */}
                <div class="col2">
                    <img className='Mapa' src={Mapa}/>
                    <div class="info">
                        <ul>
                            <li>
                                <i class="fa-solid fa-location-dot"></i>
                                Langreo, (Asturias)
                            </li>

                            <li>
                                <i class="fa-solid fa-mobile-screen"></i>
                                Teléfono: 615024907
                            </li>

                            <li>
                                <i id="mail" class="fa-solid fa-envelope"></i>
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
