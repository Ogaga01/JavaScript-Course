'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const message = document.createElement('div');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const navLink = document.querySelectorAll('.nav__link')
const navLinks = document.querySelector('.nav__links')
const operationsTab = document.querySelectorAll('.operations__tab')
const tabContainer = document.querySelector('.operations__tab-container')
const operationsContent = document.querySelectorAll('.operations__content')
const nav = document.querySelector('.nav')
const sections = document.querySelectorAll('.section')
const imgTargets = document.querySelectorAll('img[data-src]')

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Element Creation and Deleteing
message.classList.add('cookie-message')
message.innerHTML = `We use cookies to improve app functionalities. 
<button class='btn btn--close-cookie'>
Got it!
</button>`;
header.prepend(message)
const btnCloseCookie = document.querySelector('.btn--close-cookie')
btnCloseCookie.addEventListener('click', () => {
  // header.removeChild(message)
  // message.remove()
  message.parentElement.removeChild(message)
})

//Smooth Scrolling
btnScrollTo.addEventListener('click', () => {
  // const s1cords = section1.getBoundingClientRect()
  // console.log(s1cords)
  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords + window.pageYOffset,
  //   behavior: "smooth"
  // })

  section1.scrollIntoView({behavior: "smooth"})
})

// navLink.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault()
//     const id = e.target.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

navLinks.addEventListener('click', (e) => {
  e.preventDefault()
  
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

tabContainer.addEventListener('click', (e) => {
  e.preventDefault()
  const id = e.target.closest('.operations__tab')
  
  if (!id) return

  operationsTab.forEach((tab) => {
    tab.classList.remove('operations__tab--active');
  })
  id.classList.add('operations__tab--active');

  operationsContent.forEach((content) => {
    content.classList.remove('operations__content--active');
  })
  document
    .querySelector(`.operations__content--${id.dataset.tab}`)
    .classList.add('operations__content--active');
})

function handlenav(e) {
  e.preventDefault()

   if (e.target.classList.contains('nav__link')) {
     const link = e.target;
     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
     const logo = link.closest('.nav').querySelector('img');
    
     siblings.forEach(sibling => {
       if (sibling !== link) {
         sibling.classList.toggle('opaque');
       }
     });
     logo.classList.toggle('opaque');
   }
}

nav.addEventListener('mouseover', handlenav)
nav.addEventListener('mouseout', handlenav);

const navHeight = nav.getBoundingClientRect().height

const stickyNav = (entries) => {
  const [entry] = entries

  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})

headerObserver.observe(header)

const sectionReveal = (entries, observer) => {
  const [entry] = entries

  if(!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.15
})

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

const loadImg = (entries, observer) => {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0
})

imgTargets.forEach((img) => {
  imgObserver.observe(img)
})
