const modalAddingWindow = document.querySelector('.modal-adding-window');
const itemButton = document.querySelectorAll('.catalog-page__item-button, .catalog-page__purchase-button, .popular-products__item-button, .popular-products__purchase-button');
const closeButton = modalAddingWindow.querySelector('.modal-adding-window__close-button');
const continueButton = modalAddingWindow.querySelector('.modal-adding-window__continue-button');
const purchaseCartCounter = document.querySelector('.header__purchase-cart-counter');
const purchaseCart = document.querySelector('.header__purchase-cart');
var counter = 0;

for (var i = 0; i <= itemButton.length - 1; i++) {
  itemButton[i].addEventListener('click', function () {
    showModalAddingWindow();
  });
};

function showModalAddingWindow() {
  AddToCart(counter);
  modalAddingWindow.classList.add('modal-show');
};

function AddToCart(number) {
  counter =+ 1;
  var cartCounter = Number(purchaseCartCounter.innerHTML);
  var result = counter + cartCounter;
  purchaseCartCounter.innerHTML = result;
  purchaseCart.style.backgroundColor = '#EE3643';

};

closeButton.addEventListener('click', function () {
  modalAddingWindow.classList.remove('modal-show');
});

continueButton.addEventListener('click', function () {
  modalAddingWindow.classList.remove('modal-show');
});
