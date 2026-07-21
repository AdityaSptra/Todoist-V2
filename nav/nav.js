export function active() {
    const nav = document.querySelectorAll(".sidebar a")
    const btn = document.querySelectorAll(".sidebar button")

    nav.forEach((i,l) => {
        i.addEventListener("click",() => {
            for (let index = 0; index < nav.length; index++) {
                nav[index].classList.remove("active")  
            }
            for (let index = 0; index < btn.length; index++) {
                btn[index].classList.remove("active")  
            }

            i.classList.add("active")
        })
    })
    btn.forEach((i,l) => {
        i.addEventListener("click",() => {
            for (let index = 0; index < nav.length; index++) {
                nav[index].classList.remove("active")  
            }
            for (let index = 0; index < btn.length; index++) {
                btn[index].classList.remove("active")  
            }

            i.classList.add("active")
        })
    })
}

export function profilesetting() {
    const profile = document.querySelector(".sidebar .header .profile")
    const profilemenu = document.querySelector(".sidebar .header .profilemenu")

    
    profile.addEventListener("click",() => {
        profile.classList.add("active")
        profilemenu.classList.toggle("profiledown")

        if (profilemenu.classList.contains("profiledown")) {
            profilemenu.style.top = profile.getBoundingClientRect().bottom +10 + "px"
            profilemenu.style.left = profile.getBoundingClientRect().left + "px"
        }
    })

    profilemenu.addEventListener("click",() => {
        profile.classList.add("active")
    })

    window.addEventListener("click",(e) => {
        const x = e.clientX
        const y = e.clientY

        if (
            x > profilemenu.getBoundingClientRect().right ||
            y > profilemenu.getBoundingClientRect().bottom ||
            (x > profile.getBoundingClientRect().right && y < profilemenu.getBoundingClientRect().top && y > 0)
        ) {
            profile.classList.remove("active")
            profilemenu.classList.remove("profiledown")
        }
    })
}

export function helpdown() {
    const help = document.querySelector(".sidebar .help")
    const helpmenu = document.querySelector(".sidebar .helpmenu")

    help.addEventListener("click",() => {
        help.classList.add("active")
        helpmenu.classList.toggle("helpdown")

        if (helpmenu.classList.contains("helpdown")) {
            helpmenu.style.top = help.getBoundingClientRect().top - helpmenu.getBoundingClientRect().height - 10 + "px"
            helpmenu.style.left = help.getBoundingClientRect().left + "px"
        }
    })

    helpmenu.addEventListener("click",() => {
        help.classList.add("active")
    })

    window.addEventListener("click",(e) => {
        const x = e.clientX
        const y = e.clientY

        if (
            x > helpmenu.getBoundingClientRect().right ||
            y < helpmenu.getBoundingClientRect().top ||
            (x > help.getBoundingClientRect().right && y < helpmenu.getBoundingClientRect().bottom && y > help.getBoundingClientRect().bottom)
        ) {
            help.classList.remove("active")
            helpmenu.classList.remove("helpdown")
        }
    })
}

