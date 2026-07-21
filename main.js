import * as nav from "./nav/nav.js"

fetch('./nav/nav.html')
    .then(res => res.text())
    .then(html => {
        document.querySelector(".sidebar").innerHTML = html
        nav.active()
        nav.profilesetting()
        nav.helpdown()
    })