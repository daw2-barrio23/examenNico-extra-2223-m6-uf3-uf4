import { HomeComponent } from "../componentes/componenteHome";
export const home = {
    template: `
    ${HomeComponent.template}
    `,
    script:()=>{
        console.log('probando home');
    }
}
    