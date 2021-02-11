var slideNum=1;

function setSlide(newSlideNum){
    slideNum=newSlideNum;
    document.querySelector('.slide[style="display: block;"]').removeAttribute('style');
    document.querySelector('.slide[data-slide-num="'+slideNum+'"]').style.display='block';
    document.querySelector('.active').className='dot';
    document.querySelector('.dot[data-dot-num="'+slideNum+'"]').className='dot active';
}

function prevSlide(){
    slideNum=slideNum-1;

    if(slideNum<1){
        slideNum=7;
    }

    setSlide(slideNum);
}
 
function nextSlide(){
    slideNum=slideNum+1;

    if(slideNum>7){
        slideNum=1;
    }
    
    setSlide(slideNum);
}

function openModal(modalNum){
    document.querySelector('.modal[data-modal-num="'+modalNum+'"]').style.display='block';
}