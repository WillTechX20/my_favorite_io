if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').then(registration=>{
        console.log(registration);
    }).catch(error=>{
        alert('There was an error: '+error+'.');
    });
}else{
    alert('Sorry! No broswer support for install!');
}