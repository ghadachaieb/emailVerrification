import React  from "react" ;
import ReactToPrint from 'react-to-print';
import {render } from "react-dom" ;
//import './pp.css';


const  DefinirModel =()=> {
class ComponentToPrint extends React.Component {
    render() {
      return (
<div>
  <meta charSet="utf-8" />
  <title>Formulario Datos Personales</title>
  <div>
    <h1>DATOS PERSONALES</h1>
    <table border={1} >
      <form action="mailto:pepe@pepe.es" method="post" encType="text/plain" name="datospersonales" />
      <tbody><tr>
          <td>
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" name="apellidos" id="apellidos" />
          </td>
          <td>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" />
          </td>
          <td>
            <label htmlFor="dni">DNI:</label>
            <input type="text" name="dni" id="dni" maxLength={10} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="nacido">Nacido en:</label>
            <input type="text" name="nacido" id="nacido" />
          </td>
          <td>
            <label htmlFor="provnacimiento">Provincia:</label>
            <select id="provnacimiento" name="provnacimiento">
              <option value="alava">Álava</option>
              <option value="albacete">Albacete</option>
              <option value="alicante">Alicante</option>
              <option value="almeria">Almería</option>
              <option value="asturias">Asturias</option>
              <option value="avila">Ávila</option>
              <option value="badajoz">Badajoz</option>
              <option value="barcelona">Barcelona</option>
              <option value="burgos">Burgos</option>
              <option value="caceres">Cáceres</option>
              <option value="cadiz">Cádiz</option>
              <option value="cantabria">Cantabria</option>
              <option value="castellon">Castellón</option>
              <option value="ciudadreal">Ciudad Real</option>
              <option value="cordoba">Córdoba</option>
              <option value="cuenca">Cuenca</option>
              <option value="gerona">Gerona</option>
              <option value="granada">Granada</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="guipuzcoa">Guipúzcoa</option>
              <option value="huelva">Huelva</option>
              <option value="huesca">Huesca</option>
              <option value="islasbareales">Islas Bareales</option>
              <option value="jaen">Jaén</option>
              <option value="lacoruna">La Coruña</option>
              <option value="larioja">La Rioja</option>
              <option value="laspalmas">Las Palmas</option>
              <option value="leon">León</option>
              <option value="lerida">Lérida</option>
              <option value="lugo">Lugo</option>
              <option value="madrid">Madrid</option>
              <option value="malaga">Málaga</option>
              <option value="murcia">Murcia</option>
              <option value="navarra">Navarra</option>
              <option value="orense">Orense</option>
              <option value="palencia">Palencia</option>
              <option value="pontevedra">Pontevedra</option>
              <option value="salamanca">Salamanca</option>
              <option value="segovia">Segovia</option>
              <option value="sevilla">Sevilla</option>
              <option value="soria">Soria</option>
              <option value="tarragona">Tarragona</option>
              <option value="tenerife">Tenerife</option>
              <option value="teruel">Teruel</option>
              <option value="toledo">Toledo</option>
              <option value="valencia">Valencia</option>
              <option value="valladolid">Valladolid</option>
              <option value="vizcaya">Vizcaya</option>
              <option value="zamora">Zamora</option>
              <option value="zaragoza">Zaragoza</option>
            </select>
          </td>
          <td>
            <label htmlFor="nacimiento">Fecha de nacimiento (dd/mm/aaaa):</label>
            <input type="text" name="nacimiento" id="nacimiento" maxLength={10} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <label htmlFor="domicilio">Domicilio:</label>
            <select id="domicilio" name="domicilio">
              <option value="avenida">Avenida</option>
              <option value="calle">Calle</option>
              <option value="camino">Camino</option>
              <option value="plaza">Plaza</option>
            </select>
            <input type="text" name="domicilio1" id="domicilio1" />
          </td>
          <td>
            <label htmlFor="cp">Codigo Postal:</label>
            <input type="text" name="cp" id="cp" maxLength={5} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="localidad">Localidad:</label>
            <input type="text" name="localidad" id="localidad" />
          </td>
          <td>
            <label htmlFor="provdomicilio">Provincia:</label>
            <select id="provdomicilio" name="provdomicilio">
              <option value="alava">Álava</option>
              <option value="albacete">Albacete</option>
              <option value="alicante">Alicante</option>
              <option value="almeria">Almería</option>
              <option value="asturias">Asturias</option>
              <option value="avila">Ávila</option>
              <option value="badajoz">Badajoz</option>
              <option value="barcelona">Barcelona</option>
              <option value="burgos">Burgos</option>
              <option value="caceres">Cáceres</option>
              <option value="cadiz">Cádiz</option>
              <option value="cantabria">Cantabria</option>
              <option value="castellon">Castellón</option>
              <option value="ciudadreal">Ciudad Real</option>
              <option value="cordoba">Córdoba</option>
              <option value="cuenca">Cuenca</option>
              <option value="gerona">Gerona</option>
              <option value="granada">Granada</option>
              <option value="guadalajara">Guadalajara</option>
              <option value="guipuzcoa">Guipúzcoa</option>
              <option value="huelva">Huelva</option>
              <option value="huesca">Huesca</option>
              <option value="islasbareales">Islas Bareales</option>
              <option value="jaen">Jaén</option>
              <option value="lacoruna">La Coruña</option>
              <option value="larioja">La Rioja</option>
              <option value="laspalmas">Las Palmas</option>
              <option value="leon">León</option>
              <option value="lerida">Lérida</option>
              <option value="lugo">Lugo</option>
              <option value="madrid">Madrid</option>
              <option value="malaga">Málaga</option>
              <option value="murcia">Murcia</option>
              <option value="navarra">Navarra</option>
              <option value="orense">Orense</option>
              <option value="palencia">Palencia</option>
              <option value="pontevedra">Pontevedra</option>
              <option value="salamanca">Salamanca</option>
              <option value="segovia">Segovia</option>
              <option value="sevilla">Sevilla</option>
              <option value="soria">Soria</option>
              <option value="tarragona">Tarragona</option>
              <option value="tenerife">Tenerife</option>
              <option value="teruel">Teruel</option>
              <option value="toledo">Toledo</option>
              <option value="valencia">Valencia</option>
              <option value="valladolid">Valladolid</option>
              <option value="vizcaya">Vizcaya</option>
              <option value="zamora">Zamora</option>
              <option value="zaragoza">Zaragoza</option>
            </select>
          </td>
          <td>
            <label htmlFor="telf">Teléfono:</label>
            <input type="text" name="telf" id="telf" maxLength={13} />
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <input type="submit" name="enviar" id="enviar" defaultValue="Enviar" />
            <input type="reset" name="borrar" id="borrar" defaultValue="Borrar todo" />
          </td>
        </tr>
      </tbody></table>
  </div>
</div>

      );
    }
  }
   
  class Example extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
           
              return (
              <div style={{marginInlineTop:1000}}>
              <a className="btn btn-success" href="/inputModele" ><i class="fa fa-arrow-left"> Back </i></a>
              <a  className="btn btn-primary"  href="#" style={{align :"buttom"}}><i class="fa fa-file"> PDF File </i></a>

</div>
               ) }}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

render(<Example/> ,document.querySelector("#root"));

}
export default DefinirModel ;