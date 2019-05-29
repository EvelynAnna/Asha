(function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.menuNode = settings.menuNode;
    }
    
    toggleMenuState(className) {      
      if (typeof className !== 'string' || className.length === 0){
        return console.log('you did not give the class name for the toggleState function');
      } 
      return  this.menuNode.classList.toggle(className);
    }
  }

  const jsMenuNode = document.querySelector('.menu');
  const demoMenu = new Menu ({
    menuNode: jsMenuNode
  });
  
  function callMenuToggle() {
    demoMenu.toggleMenuState('menu_activated');
  }
  
  jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
})();

/**
var el = document.getElementsByClassName('#menu-bar .block-menu-ul');
var sub_el = document.getElementsByClassName('#menu-bar ul ul');
    for(var i=0; i<el.length; i++) {
           el[i].addEventListener("mouseenter", showSub, false);
           el[i].addEventListener("mouseleave", hideSub, false);
    }
    for(var j=0; j<sub_el.length; j++) {
           sub_el[j].addEventListener("mouseenter", showSub, false);
           sub_el[j].addEventListener("mouseleave", hideSub, false);
    }

    
function showSub(e) {
       if(this.children.length>1) {
          this.children[1].style.height = "auto";
          this.children[1].style.overflow = "visible";
          this.children[1].style.opacity = "1";
       } else {
          return false;
       }
    }

    
function hideSub(e) {
        if(this.children.length>1) {
          this.children[1].style.height = "0px";
           this.children[1].style.overflow = "hidden";
           this.children[1].style.opacity = "0";
        } else {
           return false;
        }
    }
    */