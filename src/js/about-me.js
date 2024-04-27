const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
  new Accordion(accordion);
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.about-con-list-iteam');

  function toggleAccordion() {
    this.classList.toggle('active');
    const content = this.querySelector('.about-con-list-iteam-id');
    content.style.display === 'block'
      ? (content.style.display = 'none')
      : (content.style.display = 'block');

    const icon = this.querySelector('.about-con-list-iteam-sec-icon svg path');
    icon.classList.toggle('rotate');
  }

  accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
  });

  for (let i = 1; i < accordionItems.length; i++) {
    const content = accordionItems[i].querySelector('.about-con-list-iteam-id');
    content.style.display = 'none';
  }
});
