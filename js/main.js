/* Show Menu and Hide */
const navMenu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'),
    navClose = document. getElementById('nav-close')

    /* Menu Show */
    /* Validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    /* Menu Hidden */
    /* Validate if constant exists */
    if(navClose){
        navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

 /* Remove Menu Mobile */
 const navLink = document.querySelectorAll('.nav__link')

 function linkAction() {
     const navMenu = document.getElementById('nav-menu')
     //when we click on each nav__link, we remove the show-menu class
     navMenu.classList.remove('show-menu')
 }

 navLink.forEach( n => n.addEventListener('click', linkAction))

  /* Accordion Skills */

  const skillsContent = document.getElementByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

 function toggleSkills () {
     let itemClass = this.parentNode.getElementByClassName 

     for(i = 0; i < skillsContent.length; i++) {
         skillsContent[i].className = 'skills__content skills__close'
     }
     if(itemClass === 'skills__content skills__close') {
         this.parentNode.className = "skills__content skills__open"
     }
 }

 skillsHeader.forEach((el) =>{
     el.addEventListener('click', toggleSkills)
 })

 /* Qualification Tabs */ 

 const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelectorAll(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach( tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/* Portfolio Swiper */

let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true, 
    },
  });

  /* Scroll Sections Active Link  */

  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
      const scrollY = window.pageYOffset

      sections.forEach( current => {
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop -50; 
          sectionId = current. getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
          }else{
              document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
          }
      })
  }

  window.addEventListener('scroll', scrollActive)