import * as nav from "./nav/nav.js"
import * as page from "./page/page.js"

fetch('./nav/nav.html')
    .then(res => res.text())
    .then(html => {
        document.querySelector(".sidebar").innerHTML = html
        nav.active()
        nav.profilesetting()
        nav.helpdown()
    })

fetch('./page/page.html')
    .then(res => res.text())
    .then(html => {
        document.querySelector(".page").innerHTML = html
        page.active()
        page.menudown()
    })