import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr"

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("connected", this.element)

    flatpickr(".date_range", {
      mode: "range",
      showMonths: 2,
      dateFormat: "F j, Y",
    })
  }
}
