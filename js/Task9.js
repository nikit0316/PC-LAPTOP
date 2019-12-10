var newUl = document.createElement('ul');
var body = document.getElementsByTagName('body')[0];
var text='';
var i=0;
body.appendChild(newUl);
function newLi(text){
    var celltext = document.createTextNode(text);
    var li=document.createElement('li');
    li.appendChild(celltext);
    return li;
}
while (true) {    
    text = prompt('Введите слово', '');
    if (typeof text==="string" && !(text ==+ text)){        
        newUl.appendChild(newLi(text));
    }
    else break;    
}