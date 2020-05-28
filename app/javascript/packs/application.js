// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "bootstrap"
import "@rails/ujs"
import "turbolinks"
import "@rails/activestorage"
import "channels"
import "jquery"
import "flatpickr"

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function(){
    flatpickr('#flatpickr', {
        enableTime: true,
        minDate: "today",
        dateFormat: "j/n/Y H:i",
        allowInput: false,
        appearence: 'top'
    });
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
