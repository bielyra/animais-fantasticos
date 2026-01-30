function initTabNav(){
    
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');
    
    // Verificar se existe elemento em tabContent e tabMenu
    if(tabContent.length && tabMenu.length) {
      tabContent[0].classList.add('ativo');
      
      function activeTab(index) {
          tabContent.forEach((section) => {
              section.classList.remove('ativo');
          });
          tabContent[index].classList.add('ativo');
      }
      
      tabMenu.forEach((itemMenu, index) => {
          itemMenu.addEventListener('click', () => {
              activeTab(index);
          });
      });
    
    }

}
initTabNav();

const accordionList = document.querySelectorAll('.js-accordion dt');

function activeAccordion() {
    event.currentTarget.classList.toggle('ativo');
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion); {

    }
});
