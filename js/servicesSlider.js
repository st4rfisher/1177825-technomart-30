const servicesItems = document.querySelectorAll('.services__item');
const servicesDescriptionItems = document.querySelectorAll('.services__description-item');
const itemActive = document.querySelector('.services__item_active');

deactivate();

function deactivate() {
  for (var i = 0; i <= servicesItems.length - 1; i++) {
    if (servicesItems[i].classList.contains('services__item_active') || servicesDescriptionItems[i].classList.contains('show-block')) {
      servicesItems[i].classList.remove('services__item_active');
      servicesDescriptionItems[i].classList.remove('show-block');
    }

    servicesItems[i].addEventListener('click', function () {
      showBlock();
    });
  };
}

servicesItems[0].classList.add('services__item_active');
servicesDescriptionItems[0].classList.add('show-block');

function showBlock() {
  deactivate();

//   for (i = 0; i < servicesItems.length; i++) {
//     servicesItems[i].addEventListener("click", function() {
//         console.log(i);
//     });
// }

  // servicesItems.forEach(function(servicesItem, i) {
  //   servicesItem.addEventListener('click', function () {
  //     console.log(i);
  //   });
  // });

  // var index = servicesItems.indexOf(servicesItems);


};
