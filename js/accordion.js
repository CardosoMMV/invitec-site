
function accordion(e) {
    e.currentTarget.firstElementChild.nextElementSibling.classList.toggle("chevron-right--active")
    e.currentTarget.nextElementSibling.classList.toggle("faq__article__answer--active")
}