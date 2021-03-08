import  React ,{useState} from  'react'
import './App.css';

export default function Formulario() {

    const titulo = "Ponte en contacto";
    const [datos, setDatos] = useState ([
         {Nombre:''},
         {Apellido:''},
         {Email:''},
         {Telefono:''},
         {Direccion:''},
         {Mensaje:''}
    ]);
    const handleChange = (e) => {
         const {name, value} = e.target
         setDatos({...datos, [name]: value})
    }

         return (
              <>
               <div class="container">
                    <h1>{titulo}</h1>
                    <div class="row">
                         <div class="col-md-12">
                                   <ul class="contact-form">
                                   <li>
                                        <div class="col-md-6">
                                             <input onChange={handleChange} name="nombre" placeholder="Nombre" required="required" size="8" type="text" />
                                        </div>

                                        <div class="col-md-6">
                                             <input onChange={handleChange}  name="apellido" placeholder="Apellido" required="required" type="text" />
                                        </div>
                                   </li>

                                   <li>
                                        <div class="col-md-6">
                                             <input onChange={handleChange} name="email" placeholder="Email" required="required" type="email" />
                                        </div>

                                        <div class="col-md-6">
                                             <input onChange={handleChange} name="telefono" placeholder="Telefono" required="required" type="text" />
                                        </div>
                                   </li>
                                   <li>
                                        <div class="col-md-12">
                                             <input onChange={handleChange} name="direccion" placeholder="Direccion" required="required" type="text" />
                                        </div>
                                   </li>
                                   <li>
                                        <div class="col-md-12">
                                             <textarea onChange={handleChange} class="span12" name="mensaje" placeholder="Escribe tu mensaje aquí" required="required"></textarea>
                                        </div>
                                   </li>

                                   <li>
                                        <div class="col-md-12 boton">
                                                  <button onClick= {() => alert(`
                                                  Nombre: ${datos.nombre} 
                                                  Apellido:  ${datos.apellido} 
                                                  Email: ${datos.email} 
                                                  Telefono: ${datos.telefono} 
                                                  Dirección: ${datos.direccion} 
                                                  Mensaje: ${datos.mensaje} `)}>Enviar
                                                  </button>
                                        </div>
                                   </li>
                                   </ul>
                         </div>
                    </div>
               </div>
              </>
         )
}
