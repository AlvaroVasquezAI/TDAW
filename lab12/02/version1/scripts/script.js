class Album {
  constructor(fotos) {
    this.fotos = fotos;
    this.albumView = document.querySelector('#album-view');
    this.modalScreen = new ModalScreen();
    this.modalScreen.onCerrar(() => this.ocultarModal());
    this.crearMiniaturas();
    this.currentFotoIndex = 0;
    document.addEventListener('keydown', (event) => this.handleKeyPress(event));
  }

  crearMiniaturas() {
    for (let i = 0; i < this.fotos.length; i++) {
      const fotoSrc = this.fotos[i];
      const miniatura = new Miniatura(fotoSrc);
      miniatura.onClick(() => this.mostrarModal(fotoSrc, i));
      this.albumView.appendChild(miniatura.getElemento());
    }
  }

  mostrarModal(fotoSrc, fotoIndex) {
    this.currentFotoIndex = fotoIndex;
    const modalPhoto = new ModalPhoto(fotoSrc);
    this.modalScreen.mostrar(modalPhoto.getElemento());
  }

  ocultarModal() {
    this.modalScreen.ocultar();
  }

  handleKeyPress(event) {
    if (event.key === 'ArrowRight' && this.currentFotoIndex < this.fotos.length - 1) {
      this.currentFotoIndex++;
      const fotoSrc = this.fotos[this.currentFotoIndex];
      const modalPhoto = new ModalPhoto(fotoSrc);
      this.modalScreen.mostrar(modalPhoto.getElemento());
    } else if (event.key === 'ArrowLeft' && this.currentFotoIndex > 0) {
      this.currentFotoIndex--;
      const fotoSrc = this.fotos[this.currentFotoIndex];
      const modalPhoto = new ModalPhoto(fotoSrc);
      this.modalScreen.mostrar(modalPhoto.getElemento());
    }
  }
}


class Miniatura {
  constructor(fotoSrc) {
    this.fotoSrc = fotoSrc;
    this.elemento = document.createElement('img');
    this.elemento.src = fotoSrc;
  }

  onClick(callback) {
    this.elemento.addEventListener('click', callback);
  }

  getElemento() {
    return this.elemento;
  }
}

class ModalScreen {
  constructor() {
    this.elemento = document.querySelector('#modal-view');
    this.modalPhoto = null;
    this.cerrarCallback = null;
    this.elemento.addEventListener('click', () => this.cerrar());
  }

  mostrar(modalPhotoElemento) {
    this.modalPhoto = modalPhotoElemento;
    this.elemento.appendChild(modalPhotoElemento);
    this.elemento.classList.remove('hidden');
  }

  ocultar() {
    if (this.modalPhoto) {
      this.elemento.removeChild(this.modalPhoto);
      this.modalPhoto = null;
      this.elemento.classList.add('hidden');
    }
  }

  onCerrar(callback) {
    this.cerrarCallback = callback;
  }

  cerrar() {
    if (this.cerrarCallback) {
      this.cerrarCallback();
    }
  }
}

class ModalPhoto {
  constructor(fotoSrc) {
    this.elemento = document.createElement('img');
    this.elemento.src = fotoSrc;
  }

  getElemento() {
    return this.elemento;
  }
}

const PHOTO_LIST = [
  'images/conejo.jpg',
  'images/gato.jpg',
  'images/lobo.jpg',
  'images/mono.jpg',
  'images/panda.jpg',
  'images/perro.jpeg',
  'images/suricata.jpg',
  'images/tigre.jpg',
  'images/zorro.jpg'
];

const album = new Album(PHOTO_LIST);
