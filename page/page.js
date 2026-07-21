export function active() {
    const btn = document.querySelectorAll(".page button")

    btn.forEach((i,l) => {
        i.addEventListener("click",() => {
            for (let index = 0; index < btn.length; index++) {
                btn[index].classList.remove("active")  
            }

            i.classList.add("active")
        })
    })
}

export function menudown() {
    const menu = document.querySelector(".page .header .menu")
    const menulist = document.querySelector(".page .header .menulist")

    menu.addEventListener("click",() => {
        menu.classList.add("active")
        menulist.classList.add("menudown")
        
        if (menulist.classList.contains("menudown")) {
            menulist.style.top = menu.getBoundingClientRect().bottom + 10 + "px"
            menulist.style.left = menu.getBoundingClientRect().left-(menulist.getBoundingClientRect().width-menu.getBoundingClientRect().width) + "px"
        }
    })

    menulist.addEventListener("click",() => {
        menu.classList.add("active")
    })

    window.addEventListener("click",(e) => {
        const x = e.clientX
        const y = e.clientY

        if (
            x < menulist.getBoundingClientRect().left ||
            y > menulist.getBoundingClientRect().bottom ||
            (x < menu.getBoundingClientRect().left && y < menulist.getBoundingClientRect().top && y > 0)
        ) {
            menu.classList.remove("active")
            menulist.classList.remove("menudown")
        }
    })
}