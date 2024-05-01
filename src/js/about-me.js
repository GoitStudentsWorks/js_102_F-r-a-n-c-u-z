const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
  new Accordion(accordion);
});


const accordionItems = document.querySelectorAll('.about-con-list-iteam'); 

  

document.addEventListener('DOMContentLoaded', function () {
  

  function toggleAccordion() {
    this.classList.toggle('active');
    const content = this.querySelector('.about-con-list-iteam-id');
    content.style.display === 'block'
      ? (content.style.display = 'none')
      : (content.style.display = 'block');

    const arrow = this.querySelector('.arrow-up');
    arrow.classList.toggle('arrow-down');
  }

  accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
  });

  for (let i = 1; i < accordionItems.length; i++) {
    const content = accordionItems[i].querySelector('.about-con-list-iteam-id');
    content.style.display = 'none';
  }
});

  

// Swipe
 const arrow = document.querySelector('.about-skills-list');
 const skills = document.querySelectorAll('.about-skills-list-div');
 const swipeAbout = document.querySelector('.swipers');
let contAbout = document.querySelector('.about-container.container');
let iEl = skills.length;
 
let windowWidth = contAbout.clientWidth;
initSwipe();


window.addEventListener('resize', () => {
  contAbout = document.querySelector('.about-container.container');
  if (contAbout.clientWidth !== windowWidth) {
    windowWidth = contAbout.clientWidth;
    initSwipe();
  }
}
)


function initSwipe() {
 
  if (contAbout.clientWidth <= 767) { iEl = 2 };
  if (contAbout.clientWidth > 767 && contAbout.clientWidth <= 1439) { iEl = 3 };
  if (contAbout.clientWidth >= 1440) { iEl = skills.length; };
  
  for (let i = 0; i < iEl; i++) {
        skills[i].style.display = 'block';
      };
  for (let i = iEl; i < skills.length; i++) {
    skills[i].style.display = 'none';
  }

  let currentIndex = 0;
 
  skills[currentIndex].style.backgroundColor = '#ed3b44';

  arrow.addEventListener('click', () => {
    skills[currentIndex].style.backgroundColor = 'transparent';
    currentIndex = (currentIndex + 1) % skills.length;
    console.log(currentIndex)
    console.log((currentIndex + 1) % skills.length)
    skills[currentIndex].style.backgroundColor = '#ed3b44';
    skills[currentIndex].style.display = 'block';
    if (currentIndex === 0 || currentIndex === 1) {
      for (let i = iEl; i < skills.length; i++) {
        skills[i].style.display = 'none';
      };

      for (let i = 0; i < iEl; i++) {
        skills[i].style.display = 'block';
      };
    }
    skills[currentIndex - iEl].style.display = 'none';
    if (currentIndex === 0 || currentIndex === 1) {
      for (let i = iEl; i < skills.length; i++) {
        skills[i].style.display = 'none';
      };
    }
   
    else { skills[currentIndex - iEl].style.display = 'none'; }
  });
 

  swipeAbout.addEventListener('click', () => {
    skills[currentIndex].style.backgroundColor = 'transparent';
    currentIndex = (currentIndex + 1) % skills.length;
    skills[currentIndex].style.backgroundColor = '#ed3b44';
    skills[currentIndex].style.display = 'block';
    if (currentIndex === 0 || currentIndex === 1) {
      for (let i = iEl; i < skills.length; i++) {
        skills[i].style.display = 'none';
      };

      for (let i = 0; i < iEl; i++) {
        skills[i].style.display = 'block';
      };
    }
    skills[currentIndex - iEl].style.display = 'none';
    if (currentIndex === 0 || currentIndex === 1) {
      for (let i = iEl; i < skills.length; i++) {
        skills[i].style.display = 'none';
      };
    }
   
    else { skills[currentIndex - iEl].style.display = 'none'; }
  });
  
  
} 
