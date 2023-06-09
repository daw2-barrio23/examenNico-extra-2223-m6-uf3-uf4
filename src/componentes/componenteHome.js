import { series } from '../datos/series';

export const HomeComponent = {
  template: `
    <div class="row">
      <div class="col-12">
        <p class="text-end">Bienvenido <span>usuario@email.com</span></p>
        <h1 class="text-center mt-3">Series famosas de todos los tiempos</h1>
        <p class="text-center fs-4 p-3 bg-light border">Haz clic sobre cualquier ficha para mostrar toda la información en el panel derecho</p>
      </div>
      <div class="col-6">
        <div class="row">
          ${generaCartas(series)}
        </div>
      </div>
      <div class="col-6">
        <div class="card shadow mt-2">
          <img
            src="${series[0].imagen_url}"
            class="card-img-top"
          />
          <div class="card-body">
            <h3>${series[0].nombre}</h3>
            <hr />
            <p><strong>Año: </strong><span>${series[0].año}</span></p>
            <p>
              <strong>Descripción: </strong>
              <span>${series[0].descripcion}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  `
};

function generaCartas(series) {
  let carta = '';

  for (const serie of series) {
    carta += `
      <div class="col-4">
        <div class="card shadow mt-2 id="${serie.nombre}">
          <img
            src="${serie.imagen_url}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title text-center">${serie.nombre}</h5>
          </div>
        </div>
      </div>
    `;
  }

  return carta;
}
