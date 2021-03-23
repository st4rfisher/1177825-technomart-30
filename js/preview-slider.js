const previewItems = document.getElementsByClassName("goods__preview-item");
const controls = document.getElementsByClassName("goods__control");
let slideIndex = 1; /* Индекс слайда по умолчанию */

showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;

    if (n > previewItems.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = previewItems.length
    }

    for (i = 0; i < previewItems.length; i++) {
        previewItems[i].style.display = "none";
    }

    for (i = 0; i < controls.length; i++) {
        controls[i].className = controls[i].className.replace(" goods__control_active", "");
    }

    previewItems[slideIndex - 1].style.display = "block";
    controls[slideIndex - 1].className += " goods__control_active";
}
