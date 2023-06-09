console.log('hola');

import { header } from "./componentes/header";
import { series } from "./datos/series";
import { home } from "./vistas/home";

console.log(series);
document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
header.script()
home.script()