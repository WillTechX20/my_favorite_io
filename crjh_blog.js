function toggleMenuBar() {
    var menuBarDiv=document.querySelector('#menu_bar');
    
    if(menuBarDiv.className=='topnav'){
        menuBarDiv.className=menuBarDiv.className+' responsive';
    }else{
        menuBarDiv.className='topnav';
    }
}

var collaspibleButtons=document.getElementsByClassName('collapsible');
var i;

for(i=0; i<collaspibleButtons.length; i++){
    collaspibleButtons[i].addEventListener('click', function(){
        this.classList.toggle('active');
        
        var content=this.nextElementSibling;
        
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }else{
            content.style.maxHeight=content.scrollHeight+'px';
        }
    });
}

function openModal(button){
    document.querySelector(button.getAttribute('data-target-modal-selector')).style.display='block';
}