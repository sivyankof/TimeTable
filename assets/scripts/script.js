let show_button = document.querySelector('button[data-action="show"]');
let hide_button = document.querySelector('button[data-action="hide"]');
let list_container = document.querySelector('.list-container');
//let check_li = document.querySelectorAll("ul li");
//let checkboxes = document.querySelectorAll("ul input[type='checkbox']:checked");

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

  /*for(let i = 0; i < checkboxes.length; i++) {  
    if(checkboxes[i] === true) {
      checkboxes.classList.remove('checked')
    } else {
      checkboxes.classList.add('checked');
      }
 };*/

  if(event.target.classList.contains('active')) {
    this[action]();
  }
 });
 
 
 /*check_li.forEach(c => c.addEventListener('change', e => {
  hide_button.classList.toggle('checked', !document.querySelectorAll('.check:not(:checked)').length)
}));*/

/*
checkboxes.addEventListener('click', function(ev) {
  if (ev.target.tagName === true) {
    ev.target.classList.add('checked');
  }
}, false);
*/
