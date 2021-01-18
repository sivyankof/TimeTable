let show_button = document.querySelector('button[data-action="show"]');
let hide_button = document.querySelector('button[data-action="hide"]');
let list_container = document.querySelector('.list-container');
let checkboxes = document.querySelectorAll("ul input[type='checkbox']:checked");

document.addEventListener('click', function(event) {
  let action = event.target.dataset.action;
  if (!action) return;

  this.show = function() {
      console.log('show function');
      show_button.classList.remove('active');
      hide_button.classList.add('active');
      list_container.classList.remove('hide');
  }

  this.hide = function() {
    console.log('hide function');
    hide_button.classList.remove('active');
    show_button.classList.add('active');
    list_container.classList.add('hide');
  }
  

 /* let numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(checkboxes.checked)  
    { checkboxes.classList.add('hide') 
    } else {
      checkboxes.classList.add('show')
  }*/

  if(event.target.classList.contains('active')) {
    this[action]();
  }
 });
