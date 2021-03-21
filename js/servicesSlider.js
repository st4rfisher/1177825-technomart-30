const servicesItems = document.querySelectorAll('.services__item');
const servicesDescriptionItems = document.querySelectorAll('.services__description-item');
const itemActive = document.querySelector('.services__item_active');

for (let i = 0; i < servicesItems.length; i++) {
  servicesItems[i].addEventListener("click", function() {
    servicesItems.forEach(function(servicesItem, i) {
      servicesItem.classList.remove('services__item_active');
    });
    servicesItems[i].classList.add('services__item_active');

    servicesDescriptionItems.forEach(function(servicesDescriptionItem, i) {
      servicesDescriptionItem.classList.remove('show-block');
    });
    servicesDescriptionItems[i].classList.add('show-block');
  });

  servicesItems[i].addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      servicesItems.forEach(function(servicesItem, i) {
        servicesItem.classList.remove('services__item_active');
      });
      servicesItems[i].classList.add('services__item_active');

      servicesDescriptionItems.forEach(function(servicesDescriptionItem, i) {
        servicesDescriptionItem.classList.remove('show-block');
      });
      servicesDescriptionItems[i].classList.add('show-block');
    }
  });

};


