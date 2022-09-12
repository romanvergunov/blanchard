document.addEventListener('DOMContentLoaded', function() {

  //**// Плавное появление контента //**//

  setTimeout(() => {
    document.body.classList.add('body-smooth')
  }, 200)

//** Плавный переход по ссылкам **//

const anchorsScrolling = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchorsScrolling) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//** Бургер-Меню **//

$(document).ready(function () {
  $('.header__burger').click(function () {
    $('.header__burger,.header__content,.header__btn').toggleClass('burger--active')
  })
})

//** Дропдауны **//

const button = document.querySelectorAll('.header-second__button');
const drop = document.querySelectorAll('.header-second__box')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    button.forEach(el => { el.classList.remove(('button--active')) });
    e.currentTarget.classList.add('button--active');
    drop.forEach(el => { el.classList.remove(('dropdown--active')) })
    e.currentTarget.closest('li').querySelector('.header-second__box').classList.toggle('dropdown--active');
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header-second__box') && !e.target.classList.contains('header-second__button')) {
    button.forEach(el => { el.classList.remove(('button--active')) });
    drop.forEach(el => { el.classList.remove(('dropdown--active')) })
  }
});

//** Поиск **//

const btnSearch = document.querySelector('.header-search__svg')
const formSearch = document.querySelector('.header-search__form')
const cancelSearch = document.querySelector('.header-search__cancel')

btnSearch.addEventListener('click', () => {
  formSearch.classList.add('active')
})

cancelSearch.addEventListener('click', () => {
  formSearch.classList.remove('active')
})

//** Галерея(Селект) **//

const element = document.querySelector('.gallery-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  silent: false,
  select: focus,
  placeholder: true,
  placeholderValue: 'Select a project',
  shouldSort: false,
});
const MultiDefault = () => {
  const elements = document.querySelectorAll('.gallery-select__option');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
    })
  });
}
MultiDefault();

//** Hero(Свайпер) **//

const sliders = document.querySelector('.slider-hero');
let mySwiper = new Swiper('.slider-hero', {
  slideClass: 'slide-hero',
  wrapperClass: 'wrap-hero',
  effect: 'coverflow',
  autoplay: {
    delay: 5000,
  },
});

//** Галерея(Свайпер) **//

const slider = document.querySelector('.slider');
let swiper = new Swiper('.slider', {
  slideClass: 'slide',
  wrapperClass: 'slider-wrap',
  pagination: {
    el: ".pag-1",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {

    481: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 34
    },

    640: {
      slidesPerView: 2,
      slidesPerColumn: 1,
      spaceBetween: 10
    },
    
    641: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 30
    },
    
    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34
    },
    1300: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50
    },
  }
});



const sliderEvents = document.querySelector('.slider-events');

function mobileSwiper() {
  if (window.innerWidth <= 640 && sliderEvents.dataset.mobile == 'false') {
    const developmentsSwiper = new Swiper(sliderEvents, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 17,

      pagination: {
        el: '.pagination-events',
        type: 'bullets',
        clickable: true,
      },
    })

    sliderEvents.dataset.mobile = 'true'
  }

  if (window.innerWidth > 640) {
    sliderEvents.dataset.mobile = 'false'

    if (sliderEvents.classList.contains('swiper-container-initialized')) {
      if(developmentsSwiper)
        developmentsSwiper.destroy()
    }
  }
}

mobileSwiper()

window.addEventListener('resize', () => {
  mobileSwiper()
})



const swiperContainerEditions = document.querySelector('.slider2')

function desktopSwiper() {
  if (window.innerWidth > 640 && swiperContainerEditions.dataset.desktop == 'true') {

    const swiperEditions = new Swiper(swiperContainerEditions, {
      slideClass: 'slide2',
  wrapperClass: 'slider-wrap2',
  slidesPerGroup: 1,
  slidesPerView: 1,
  slidesPerColumn: 1,
  pagination: {
    el: ".pag-2",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
      spaceBetween: 34
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
      spaceBetween: 20
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 1,
      spaceBetween: 50,
    },
  }
    })
  }
}

if (window.innerWidth <= 640) {

  if (swiperContainerEditions.classList.contains('swiper-container-initialized')) {
    swiperEditions.destroy()
  }

  swiperContainerEditions.dataset.desktop = 'false'
}

desktopSwiper()

window.addEventListener('resize', () => {
  desktopSwiper()
})



//** Галерея(Модальное окно) **//

const modalOverlay = document.querySelector(".gallery-modal__overlay"),
      modalBtn = document.querySelector(".slide-modal"),
      modalWindow = document.querySelector(".gallery-modal"),
      modalCancel = document.querySelector(".right-close"),
      modalBody = document.querySelector(".body");

        modalBtn.addEventListener('click', (e) => {
        let targetModal = document.querySelector(`[data-target-modal="${'modal'}"]`)
        modalWindow.classList.remove('modal-open'),
        targetModal.classList.add('modal-open'),
        modalOverlay.classList.add('modal-open'),
        modalBody.classList.add('modal-scroll');
      });

        modalOverlay.addEventListener('click', () => {
            modalWindow.classList.remove('modal-open');
            modalOverlay.classList.remove('modal-open');
            modalBody.classList.remove('modal-scroll');
        });

      modalCancel.addEventListener('click', () => {
        modalWindow.classList.remove('modal-open');
        modalOverlay.classList.remove('modal-open');
        modalBody.classList.remove('modal-scroll');
      });

//** Каталог(Аккордион) **//

jQuery(document).ready(function ($) {
  $("#my-accordion").accordionjs({
    closeAble: true,
    heightStyle: "content"
  });
  $("#my-accordion2").accordionjs({
    closeAble: true,
    heightStyle: "content"
  });
});


//** Каталог(Табы стран) **//

const catalogFlagsBtns = document.querySelectorAll('.catalog-top__btn'),
  catalogFlagsContents = document.querySelectorAll('.catalog-main');

catalogFlagsBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    let currentBtn = item
    let path = e.currentTarget.dataset.path
    let currentContent = document.querySelector(`[data-target="${path}"]`)

    catalogFlagsBtns.forEach((item) => {
      item.classList.remove('active')
    })

    catalogFlagsContents.forEach((item) => {
      item.classList.remove('active')
    })

    currentBtn.classList.add('active')
    currentContent.classList.add('active')
  })
})

//** Каталог (Табы внутри аккордиона) **//

const listButtonCatalog = document.querySelectorAll('.right-item__link'),
listPlugCatalog = document.querySelectorAll('.flag-block')


listButtonCatalog.forEach((item) => {
  item.addEventListener('click', (e) => {

    let currentBtn = item
        let plug = e.currentTarget.dataset.plug
        let anchor = document.querySelector(`[data-anchor="${plug}"]`)

        listButtonCatalog.forEach((item) => {
          item.classList.remove('active')
        })

        listPlugCatalog.forEach((item) => {
          item.classList.remove('active')
        })

        anchor.classList.add('active')
        currentBtn.classList.add('active') 

      })
    })

//** Плавный скролл **//

function smoothAnchor () {
  if (window.matchMedia("(max-width: 990px)").matches) {
    listButtonCatalog.forEach((item) => { 
      if (item.getAttribute('data-plug') === 'two') {
        item.setAttribute('href', '#left-dummy')
      }
      if (item.getAttribute('data-plug') === 'one') {
        item.setAttribute('href', '#left-author')
      }
    })
  }
}

window.addEventListener('resize', smoothAnchor)
window.addEventListener('load', smoothAnchor)

//** События **//

const btnEvents = document.querySelector('.button__all-events')
const blockEvents = document.querySelector('.events__btn');

btnEvents.addEventListener('click', (item) => {
  blockEvents.classList.add('active')
})

$(".button__all-events").click(function () {
  $(document).find(".events__item:not(:visible)").css('display', 'flex',
    function () {
      if ($(document).find(".events__item:not(:visible)").length == 0) {
      }
    }
  );
})

//** Издания **//

const btn = document.querySelector('.editions__btn');
const blocks = document.querySelectorAll('.editions-custom__box');
const label = document.querySelectorAll('.editions-custom__label')

btn.addEventListener('click', () => {
  if (!btn.classList.contains('btn-active')) {
    blocks.forEach(el => {
      el.classList.add('block-active');
    });
    
    btn.classList.add('btn-active');
  } else {
    blocks.forEach(el => {
      el.classList.remove('block-active');
      if (el.querySelector('input').checked) {
        el.classList.add('block-active');
      }
    });
    
    btn.classList.remove('btn-active');
  }
  

});

 var sliderEditions = new Swiper('.slider3', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 10,
      slideClass: 'slide3',
      wrapperClass: 'slider-wrap3',
      navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
      },
      breakpoints: {
        756: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerColumn: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumn: 1,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumn: 1,
          spaceBetween: 50
        },
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          slidesPerColumn: 1,
          spaceBetween: 50,
        },
      }
    })
    

//** Тултипы **//

tippy('#myButton', {
  content: 'Пример современных тенденций - современная методология разработки',
  trigger: 'click',
  theme: 'one',
});

tippy('#myButton2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  trigger: 'click',
  theme: 'two',
});

tippy('#myButton3', {
  content: 'В стремлении повысить качество',
  trigger: 'click',
  theme: 'three',
});

//** Контакты **//

  const form = document.getElementById('form');
    let selector = document.querySelectorAll('input[type="phone"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(selector);

    new JustValidate('.contacts-input__form', {
      messages: {
        name: {
          required: 'Укажите ваше имя',
          minLength: 'Поле должно содержать минимум 2 символа',
          strength: 'Недопустимый формат'

        },
        phone: {
          required: 'Укажите ваш телефон',
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
      },

      rules: {
        name: {
          required: true,
          strength: {
            custom: '^[A-zА-яЁё]+$'
          },
          minLength: 2,
          maxLength: 30
        },
        phone: {
          required: true,
        }
      },
      submitHandler: function (form, values, ajax) {
        ajax({
          url: 'mail.php',
          method: 'POST',
          data: values,
          async: true,
          callback: function (response) {
            console.log(response)
          }
        });
      }
    })

   
    
    $('.contacts-input__form').submit(function(e) {
      var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
      });
      if (!empty.length) {
        $('.popup').show();
        $('.contacts-input__form input').not(':button, :submit').val('');
      }
      e.preventDefault();
      $('.contacts__button').click(function() {
        $('.body').addClass('popup-scroll')
      })
      $('.close__popup').click(function() {
        $('.body').removeClass('popup-scroll');
        $('.popup').hide();
      });
    });

    

//** Карта **//

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.872185073737896, 2.3542149999999555],
    zoom: 15,
    controls: [],
  });
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      float: "right",
      size: "small"
    }
  });
  myMap.controls.add(zoomControl, { float: 'none', position: { right: '20px', top: '280px' } });
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: { noPlacemark: true }
  });
  myMap.controls.add(geolocationControl, { float: 'none', position: { right: '20px', top: '360px' } });


  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    iconContent: "blanchard",
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/1920/marker.webp',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0],
  });

  myMap.geoObjects.add(myPlacemark);
}
})