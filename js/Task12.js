function Forma(options){
  var elem;

  function getElem() {
    if (!elem) render();
    return elem;
  }

  function render() {
    elem = document.createElement('div');
    elem.className = 'forma';

    var tittleElem=document.createElement('form');
    elem.appendChild(tittleElem);
    tittleElem.className='title';
    tittleElem.textContent=options.title;

    elem.onmousedown = function() {
      return false;
  }
  
  elem.onclick = function(event) {
    if (event.target.closest('.title')) {
      toggle();
    }
  }
}

  function renderItems() {
    var items=options.items || [];
    items.forEach(function(item){
      var label=document.createElement('label');
      label.textContent=item;
      var input=document.createElement('input');
      tittleElem.appendChild(label);
      tittleElem.appendChild(input);
    });
  }

  function open() {
    if (!elem.querySelector('label')) {
      renderItems();
    }
    elem.classList.add('open');
  };

  function close() {
    elem.classList.remove('open');
  };

  function toggle() {
    if (elem.classList.contains('open')) close();
    else open();
  };

  this.getElem = getElem;
  this.toggle = toggle;
  this.close = close;
  this.open = open;
}