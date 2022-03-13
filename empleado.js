const API_URL = 'https://imgparcial.herokuapp.com/api'

const HTMLResponse = document.querySelector('#app');

fetch(`${API_URL}/empleado`).then((response) => response.json()).then((controles) => {
    const tpl = controles.map((control) => `<li> ${control.uuid} -${control.primerNombre} -${control.segundoNombre}- ${control.primerApellido} - ${control.segundoApellido}</li>-------------------------------------------------------------------`);
    HTMLResponse.innerHTML = `<ul>${tpl}<ul>`;
});