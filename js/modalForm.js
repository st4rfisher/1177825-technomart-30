const modalFormWindow = document.querySelector('.modal-form-window');
const modalFormShowButton = document.querySelector('.about__button');
const modalFormCloseButton = modalFormWindow.querySelector('.modal-form-window__close-button');
const modalForm = modalFormWindow.querySelector('.modal-form');
const modalFormName = modalForm.querySelector('.modal-form__name');
const modalFormEmail = modalForm.querySelector('.modal-form__email');

let isStorageSupport = true;
let nameUser = "";


try {
  nameUser = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

modalFormShowButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFormWindow.classList.add('modal-show');

    if (nameUser) {
        modalFormName.value = nameUser;
        modalFormEmail.focus();
    }
});

modalFormCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalFormWindow.classList.remove('modal-show');
    modalFormWindow.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function (evt) {
    if (!modalFormName.value || !modalFormEmail.value) {
        evt.preventDefault();
        modalFormWindow.classList.remove("modal-error");
        modalFormWindow.offsetWidth = modalFormWindow.offsetWidth;
        modalFormWindow.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalFormName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalFormWindow.classList.contains("modal-show")) {
        evt.preventDefault();
        modalFormWindow.classList.remove("modal-show");
        modalFormWindow.classList.remove('modal-error');
      }
    }
  });

