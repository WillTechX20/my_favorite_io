var contactForm=document.querySelector('form');
            
contactForm.addEventListener('submit', eventVar=>{
    eventVar.preventDefault();
                
    var contactFormData=new FormData(contactForm);
                
    open('mailto:willtechx20@gmail.com?subject=Hello!%20I%20am%20'+contactFormData.get('name')+'!&body='+contactFormData.get('message'));
});

var i=0;
var j=0;
var modal=document.querySelector('.modal');
var area=document.querySelector('.area');
var imgNames=['Will N. Okoye', 'Christina I. Okoye', 'Okoye Twins', 'Chinelo I. Okoye', 'Chuckwuemeka (nickname Chuck) I. Okoye', 'Okoye Parents', 'Okoye Family'];
var imgSrcs=['images/will_n_okoye_photo_gallery_img.jpg', 'images/christina_i_okoye.jpg', 'images/okoye_twins.jpg', 'images/chinelo_i_okoye.jpg', 'images/chuckwuemeka_i_okoye.jpg', 'images/okoye_parents.jpg', 'images/okoye_family.jpg'];
var caption=document.querySelector('.caption');
var img=document.querySelector('.img');
var perimeter=document.querySelector('.perimeter');
var cert=document.querySelector('.cert');
var certName=document.querySelector('.cert_name');
var certNames=['Android and IOS App Develpoment Teacher Certificate', 'Game Developer Certificate', 'Kids Logic and Coding Championship Participation Certificate', 'Whitehat Jr. Trial Completion Certificate'];
var certSrcs=['images/android_and_ios_app_development_teacher_cert.jpg', 'images/game_developer_cert.jpg', 'images/kids_logic_and_coding _champinonship_participation_cert.jpg', 'images/whitehat_jr_trial_completion_cert.jpg'];
var dots=Array.from(document.getElementsByClassName('dot'));
var indicatorImgs=Array.from(document.getElementsByClassName('indicator_img'));

function goToPrevCert(){
    i=i-1;

    if(i<0){
        i=3;
    }
    
    certName.innerText=certNames[i];
    document.querySelector('.active').className='dot';
    dots[i].className='dot active';
    cert.alt=certNames[i];
    cert.src=certSrcs[i];
}

function goToNextCert(){
    i=i+1;

    if(i>3){
        i=0;
    }
    
    certName.innerText=certNames[i];
    document.querySelector('.active').className='dot';
    dots[i].className='dot active';
    cert.alt=certNames[i];
    cert.src=certSrcs[i];
}

function setCert(num){
    i=num;
    certName.innerText=certNames[i];
    document.querySelector('.active').className='dot';
    dots[i].className='dot active';
    cert.alt=certNames[i];
    cert.src=certSrcs[i];
}

function updateAreaAndPerimeter(squareFarmSideLength){
    area.innerText='Area: '+JSON.stringify(squareFarmSideLength*squareFarmSideLength);
    perimeter.innerText='Perimeter: '+JSON.stringify(squareFarmSideLength*4);
}

function setImg(num){
    document.querySelector('.active_indicator_img').className='indicator_img';
    j=num;
    img.src=imgSrcs[j];
    img.alt=imgNames[j];
    caption.innerText=imgNames[j];
    indicatorImgs[j].className='active_indicator_img indicator_img';
}


function openModal(num){
    modal.style.display='block';
    setImg(num);
}

function closeModal(){
    modal.style.display='none';
}

function goToNextImg(){
    document.querySelector('.active_indicator_img').className='indicator_img';
    j=j+1;
    
    if(j>6){
        j=0;
    }
    
    img.src=imgSrcs[j];
    img.alt=imgNames[j];
    caption.innerText=imgNames[j];
    indicatorImgs[j].className='active_indicator_img indicator_img';

}

function goToPrevImg(){
    document.querySelector('.active_indicator_img').className='indicator_img';
    j=j-1;
    
    if(j<0){
        j=6;
    }
    
    img.src=imgSrcs[j];
    img.alt=imgNames[j];
    caption.innerText=imgNames[j];
    indicatorImgs[j].className='active_indicator_img indicator_img';

}
