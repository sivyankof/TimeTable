document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);
    if (!elem) return;
    elem.hidden = !elem.hidden

    //event.target.classList.add('red');
     });



/*let showList = document.querySelector ('button [data-action="hide"]').hidden = true; {
    let showList = document.querySelector ('button [data-action="show"]').hidden = false;
  }*/
  
  
/*document.addEventListener('click', function(event) {
    let hideList = document.querySelector ('button [data-action="hide"]');
    document.getElementById('list').hidden = true;

    let showlist = document.querySelector ('button [data-action="show"]')
    showlist.hidden = true;
}*/


/*document.querySelector('button [data-action="hide"]').addEventListener("click", function() {
    document.getElementById("list").hidden = true;
  });*/