import { home } from "../vistas/home";
import { login } from "../vistas/login";
import { registro } from "../vistas/registro";


export const header ={
    template:`
    <div class="container-fluid">
        <span id="inicio" class="navbar-brand mb-0">2223 M6 UF3/UF4 - Examen extraordinaria - (Alumnno: Nicolás Barrio)</span>
        <form  class="d-flex">
          <input class="form-control me-2" placeholder="email@email.com">
          <button id="login" class="btn btn-outline-success">Login</button>
          <button id="registro" class="btn btn-link">Regístrate</button>
        </form>
        
      </div>
      `,
      script: ()=>{
        console.log('cargando header');
        document.querySelector('#login').addEventListener('click', (e)=>{
            e.preventDefault()
            console.log('click en login');
            document.querySelector('main').innerHTML = login.template;
        });
        document.querySelector('#registro').addEventListener('click', (e)=>{
            e.preventDefault()
            console.log('click en registro');
            document.querySelector('main').innerHTML = registro.template;
        })
        document.querySelector('#inicio').addEventListener('click', (e)=>{
            e.preventDefault()
            console.log('click en inicio');
            document.querySelector('main').innerHTML = home.template;
        })
      }
}