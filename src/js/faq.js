//  import Accordion from 'accordion';
// import 'accordion-js/dist/accordion.min.css';

//  new Accordion('.accordion-container');

// const accordions = document.querySelectorAll('.accordion');
// accordions.forEach(accordion => {
//   new Accordion(accordion);
// });

//  const faqAccord = document.querySelectorAll('.faq-accord-container');


const accords = document.querySelectorAll('.accordion');
accords.forEach(accordion => {
  new Accordion(accordion);
});

document.addEventListener('DOMContentLoaded', function () {
    const faqAccord = document.querySelectorAll('.faq-ac');
    
    for (let i = 1; i < faqAccord.length; i++) {
    const content = faqAccord[i].querySelector('.faq-ac-panel');
    content.style.display = 'none';
    }
    
     faqAccord.forEach(el => {
     el.addEventListener('click', toggleAccord);
   });


  function toggleAccord() {
    this.classList.toggle('active');
      const content = this.querySelector('.faq-ac-panel');
       const icon = this.querySelector('.faq-arrow-down');
      if (content.style.display === 'block')
      { content.style.display = 'none';
            icon.style.transform = 'none'}
            else {
    content.style.display = 'block';
    icon.style.transform = 'rotate(0.5turn)';
}
  }

 

 
});
