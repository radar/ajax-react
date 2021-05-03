// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import mount from "../mount";
import SimpleComponent from "../Simple"
import React from "react"
import ReactDOM from "react-dom"

mount({
  SimpleComponent,
});

window.addEventListener("ajax:success", () => {
  console.log("AJAX SUCCESS")
  setTimeout(() => {
    ReactDOM.render(<SimpleComponent />, document.querySelector("[data-react-component='SimpleComponent']"))
  })
})
