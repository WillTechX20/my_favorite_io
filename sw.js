self.addEventListener('fetch', eventVar=>{
    eventVar.respondWith(
        caches.match(eventVar.request).then(response=>{
            return fetch(eventVar.request);
        })
    );
});
