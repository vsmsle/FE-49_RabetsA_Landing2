const swiper = new Swiper(".swiper", {
    // direction: "horizontal",
    // loop: true,
  
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  