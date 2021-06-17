// Need to clean up the script



// window.onload = function () {

// }

// var daynight = document.querySelector("#daynight");
// var darkmodecss = document.querySelector("#darkmodecss")
// var daynighticon = document.querySelector("#daynight-icon")
// var nightModeCss = document.createElement("link")
// var nightMode = false

// daynighticon.addEventListener("click", function () {
//     // alert("dayMode " + dayMode)
//     if (nightMode) {
//         nightMode = false
//         daynighticon.setAttribute("src", "assets/moon.svg")

//     } else {
//         nightMode = true
//         daynighticon.setAttribute("src", "assets/sun.svg")

//     }
// })



var daynight = document.querySelector("#daynight");
var darkmodecss = document.querySelector("#darkmodecss")
var daynighticon = document.querySelector("#daynight-icon")
var nightModeCss = document.createElement("link")
var darkMatter
function darkSheet() {
    darkMatter = document.createElement("link")
    darkMatter.rel = "stylesheet"
    darkMatter.href = "assets/dark-mode.css"
    darkMatter.id = "darkmodecss"
    document.getElementsByTagName("head")[0].append(darkMatter)
}

function darkSheetRemove() {
    if (darkMatter != null) {
        darkMatter.remove()
    }

}

var nightModeFlag

function toBoolean(str) {
    if (str === "true") {
        return true
    } else {
        return false
    }
}

if (typeof (Storage) !== "undefined") {
    // localStorage.nightModeFlag = nightModeFlag



    if (localStorage.nightModeFlag) {
        nightModeFlag = toBoolean(localStorage.nightModeFlag)
        if (nightModeFlag) {
            daynighticon.setAttribute("src", "assets/sun.svg")
            darkSheet()
        } else {
            daynighticon.setAttribute("src", "assets/moon.svg")
            darkSheetRemove()
        }
    } else {
        localStorage.nightModeFlag = false
    }
}

daynighticon.addEventListener("click", function () {
    nightModeFlag = !nightModeFlag
    // alert(nightModeFlag)
    localStorage.nightModeFlag = nightModeFlag

    if (nightModeFlag) {
        daynighticon.setAttribute("src", "assets/sun.svg")
        darkSheet()
    } else {
        daynighticon.setAttribute("src", "assets/moon.svg")
        darkSheetRemove()
    }
})

function hideLoader() {
    document.getElementsByClassName("page-loader")[0].classList.add('display-none')
}

window.onload = function () {
    document.body.dataset.loader = false
    document.body.style.overflow = 'auto'
    hideLoader()
}