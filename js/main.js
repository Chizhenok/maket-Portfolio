
/**************SWIPER**************/

const swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    loop: true,
    slidesPerView: 1.2,
    breakpoints: {

      1440: {
        slidesPerView: 4.2
      },

      1200: {
        slidesPerView: 3.2
      },

      768: {
        slidesPerView: 2.2
      },

      600: {
        slidesPerView: 1.2
      },
    },
});

/**************TAB**************/

const tabsBtn = document.querySelectorAll(".tabs_nav-btn");
const tabsItems = document.querySelectorAll(".tabs_item")

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

       if(! currentBtn.classList.contains('active')) {
        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
       }
    });
}

document.querySelector('.tabs_nav-btn').click();


/**************BURGER**************/

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');




