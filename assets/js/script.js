// Definición del módulo IIFE
const itemVideo = (function() {
    // Función privada para establecer la URL del video en el iframe
    function setVideoUrl(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        } else {
            alert(`No se encontró el elemento con id: ${id}`);
        }
    }
    // Función pública que llama a la función privada
    return {
        insertarVideo: function(url, id) {
            setVideoUrl(url, id);
        }
    };
})();

//Multimedia Padre
class Multimedia { 
    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}
//Reproductor Hijo
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    playMultimedia() {
        itemVideo.insertarVideo(this._url, this._id);
    }

    setInicio(tiempo) {
        const urlConInicio = `${this._url}&start=${tiempo}`;
        document.getElementById(this._id).setAttribute('src', urlConInicio);
    }
}

// Instancias de la clase Reproductor
const musica = new Reproductor('https://www.youtube.com/embed/ZsZWmcsiajI?si=prn7pRu4gFVz2lak', 'musica');
const pelicula = new Reproductor('https://www.youtube.com/embed/uDzfa0w86Vw?si=W19fSuabB4HtJLfU', 'peliculas');
const serie = new Reproductor('https://www.youtube.com/embed/hXJxfA3eUi4?si=VPAAn06wUDqBDEIq', 'series');

// Reproducir los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Tiempo de inicio para los videos
musica.setInicio(35);
pelicula.setInicio(10);
serie.setInicio(20);
