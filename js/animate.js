document.addEventListener("DOMContentLoaded", function() {
  // Product filter
  const radioButtons = document.querySelectorAll('.radio-toolbar input[type=radio]')
  const products = document.querySelectorAll('.product')
  const modal = document.querySelector('.modal')
  const modalClose = document.querySelector('.close-modal')

  for (i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', function() {
      for (j = 0; j < products.length; j++) {
        if(this.id === "all"){
          products[j].classList.remove("hidden")
        } else if(products[j].getAttribute('data-type') === this.id){
          products[j].classList.remove("hidden")
        } else{
          products[j].classList.add("hidden")
        }
      }
    })
  }

  for (i = 0; i < products.length; i++) {
    if (isMobile() && window.innerWidth <= "1024") {
      products[i].addEventListener('click', function(){
        var titleProduct = this.querySelector(`.product-title`).textContent
        var priceProduct = this.querySelector(`.product-price`).textContent
        var descriptionProduct = this.querySelector(`.product-description`).textContent
        var imgProduct = this.querySelector(`.product-img`).getAttribute('src')
        var labelProduct = this.querySelector(`.product-label`).innerHTML

        var titleModal = document.querySelector(`.modal .product-title`)
        var priceModal = document.querySelector(`.modal .product-price`)
        var descriptionModal = document.querySelector(`.modal .product-description`)
        var imageModal = document.querySelector(`.modal .product-img`)
        var labelModal = document.querySelector(`.modal .product-label`)

        titleModal.innerHTML = titleProduct 
        priceModal.innerHTML = priceProduct 
        descriptionModal.innerHTML = descriptionProduct 
        imageModal.src = imgProduct
        labelModal.innerHTML = labelProduct
        console.log(labelModal.children[0])
        labelModal.children[0].classList.remove('hidden')
        labelModal.children[0].classList.add('flex')

        modal.classList.remove('hidden')
      })
    }
  }
  
  modalClose.addEventListener('click', function(){
    modal.classList.add('hidden')
  })


  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
});