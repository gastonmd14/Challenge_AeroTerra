window.addEventListener('load', function() {

    let myForm = document.querySelector ("form");

    myForm.addEventListener('submit', function(e) {

        e.preventDefault();

        let descriptionInput = document.querySelector('input[name=description]');
        let addressInput = document.querySelector('input[name=address]');
        let telephoneInput = document.querySelector('input[name=telephone]');
        let categorySelect = document.querySelector('select[name=category]');
        let coordinatesInput = document.querySelector('input[name=coordinates]');

        let coordLatLng = (coordinatesInput.value).split(',')

        if ( (coordLatLng[0] < 90 && coordLatLng[0] > -90) && (coordLatLng[1] < 180 &&  coordLatLng[1] > -180) ) {

            let coordinatesInput = document.querySelector('.text-red');
            coordinatesInput.classList.remove('display');

            var latlng = L.latLng(coordLatLng);

            console.log(latlng);

            var marker = L.marker(latlng).addTo(mymap);

            marker.bindPopup(`<b>Descripcion: ${descriptionInput.value}</b><br>
                                <b>Direccion: ${addressInput.value}</b><br>
                                <b>Telefóno: ${telephoneInput.value}</b><br>
                                <b>Categoria: ${categorySelect.value}<br>
                                <b>Coordenadas: ${coordinatesInput.value}</b>`).openPopup();
            
        } else {
            
            let coordinatesInput = document.querySelector('.text-red');
            coordinatesInput.classList.add('display');
            console.log('Coordinates Out Of Range');
        }

    })

});

const mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2FzdG9ubWQxNCIsImEiOiJja3Q2aXp3bnEwaXlvMm9xbjkwd2xkdzNpIn0._IwxWK9S5QZyTq0dYxt0LQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);