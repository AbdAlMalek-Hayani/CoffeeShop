const lilinks = document.querySelector("li")

const linkTop = document.querySelectorAll(".linkTop")

const headerDark = document.querySelector("header")

const content = document.getElementsByTagName("body")[0]

const darkmode = document.querySelector(".dark-change")


darkmode.addEventListener('click', function () {

    
    darkmode.classList.toggle("active")

    saveData()
    
    content.classList.toggle("night")

    saveData()

    headerDark.classList.toggle("navDark")
    saveData()





},false)


function saveData() {
    localStorage.setItem("data", content.className)
    localStorage.setItem("datas", darkmode.className)
    localStorage.setItem("datass", headerDark.className)

}

function showTask() {
    content.className = localStorage.getItem("data")
    darkmode.className = localStorage.getItem("datas")
    headerDark.className = localStorage.getItem("datass")

}

showTask()




const button = document.querySelector("i.bx-menu")

const links = document.querySelector(".nav")

const printBox = document.querySelector("#print")



printBox.addEventListener('click' , function () {

    links.classList.toggle("open")

    printBox.classList.toggle("print")


    button.classList.toggle("bx-tada")


} , false)








