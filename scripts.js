
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const container = document.querySelector(".container")
const items = container.querySelectorAll(".list .item")
const indicators = container.querySelector(".indicators")
const number = indicators.querySelector(".number")
const dots = indicators.querySelectorAll("ul li")
const list = container.querySelector(".list")

const firstItem = 0
const lastItem = items.length - 1

let currentItem = firstItem

const setSlider = ()=> {
    items.forEach(item => {
        item.classList.remove("active")
    })

    dots.forEach(dot => {
        dot.classList.remove("active")
    })

    items[currentItem].classList.add("active")
    dots[currentItem].classList.add("active")
    number.innerHTML = `0${currentItem+1}`
}

const goToPrevItem = ()=> {
    currentItem = currentItem - 1 < firstItem? lastItem: currentItem - 1
    //change direction animation
    list.style.setProperty("--calculation", -1)
    setSlider()
}

const goToNextItem = ()=> {
    currentItem = currentItem + 1 > lastItem? firstItem: currentItem + 1
    list.style.setProperty("--calculation", 1)
    setSlider()
}

prevBtn.addEventListener("click", goToPrevItem)
nextBtn.addEventListener("click", goToNextItem)