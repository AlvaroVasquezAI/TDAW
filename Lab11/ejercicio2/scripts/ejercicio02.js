// Mostrat la imagen seleccionada con el cursor
const images = document.querySelectorAll('.miniature');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    
    const imgBig = document.createElement('img');
    imgBig.src = image.src.replace('thumb', 'large');

    imgBig.classList.add('ampliada');
    document.body.appendChild(imgBig);

    image.addEventListener('mouseout', () => {
      imgBig.remove();
    });
  });
});

//Filtrar las obras de acuerdo a su genero.
const registros = document.querySelectorAll(".genero");
var filtrado = document.getElementById("filtro");
var formularioFiltrar = document.getElementById("formulario");
formularioFiltrar.onsubmit = function () {
  const seleccionFiltro = filtrado.options[filtrado.selectedIndex].text;
  for (let registroIndividual of registros) {
    if (registroIndividual.innerHTML === seleccionFiltro) {
    } else {
      registroIndividual.parentNode.style.display = "none";
    }
  }
};


//Editar los campos con las obras.
const editButtons = document.querySelectorAll('button');

editButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const row = button.parentElement.parentElement;
    const image = row.querySelector('img').src;
    const title = row.querySelectorAll('td')[2].textContent;
    const artist = row.querySelectorAll('td')[3].textContent;
    const year = row.querySelectorAll('td')[4].textContent;
    const genre = row.querySelectorAll('td')[5].textContent;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2> Editar </h2>
        <img src="${image}">
        <label for="title">Título:</label>
        <input type="text" id="title" value="${title}">
        <label for="artist">Artista:</label>
        <input type="text" id="artist" value="${artist}">
        <label for="year">Año:</label>
        <input type="text" id="year" value="${year}">
        <label for="genre">Género:</label>
        <input type="text" id="genre" value="${genre}">
        <button id="save">Guardar</button>
      </div>
    `;
    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function() {
      modal.remove();
    });

    const saveButton = modal.querySelector('#save');
    saveButton.addEventListener('click', function() {
      const titleInput = modal.querySelector('#title');
      const artistInput = modal.querySelector('#artist');
      const yearInput = modal.querySelector('#year');
      const genreInput = modal.querySelector('#genre');

      row.querySelectorAll('td')[2].textContent = titleInput.value;
      row.querySelectorAll('td')[3].textContent = artistInput.value;
      row.querySelectorAll('td')[4].textContent = yearInput.value;
      row.querySelectorAll('td')[5].textContent = genreInput.value;

      modal.remove();
    });

    document.body.appendChild(modal);
  });
});
