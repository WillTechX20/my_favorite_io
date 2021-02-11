self.addEventListener('install', eventVar=>{
    eventVar.waitUntil(
        caches.open('static').then(cache=>{
            return cache.addAll(['./', './app.js', './sw.js', './main.js', './style.css', './mainfest.json', './crjh_blog.css', './crjh_blog.html', './crjh_blog.js', './7_wonders_of_the_world.css', './7_wonders_of_the_world.html', './7_wonders_of_the_world.js', './sun_earth_and_moon_facts.css', './sun_earth_and_moon_facts.html', './sun_earth_and_moon_facts.js', './timeline.html', './timeline.css', './images/adobe_flash_logo.png', './images/android_and_ios_app_development_teacher_cert.jpg', './images/checklist.png', './images/chinelo_i_okoye.jpg', './images/choir.jpeg', './images/christina_i_okoye.jpg', './images/chuckwuemeka_i_okoye.jpg', './images/colossus_of_rhodes.jpg', './images/crjh_logo.png', './images/drum_pad.jpg', './images/game_developer_cert.jpg', './images/great_pyramid_of_giza.jpg', './images/hanging_gardens_of_babylon.jpg', './images/john_backus.jpg', './images/kids_logic_and_coding_champinonship_participation_cert.jpg', './images/lighthouse_of_alexandria.png', './images/mausoleum_at_halicarnassus.jpg', './images/okoye_family.jpg', './images/okoye_parents.jpg', './images/okoye_twins.jpg', './images/orchestra.jpg', './images/painting.jpg', './images/pencils.jpg', './images/small_will_n_okoye.png', './images/statue_of_zeus_at_olympia.jpg', './images/sun_earth_and_moon_facts_logo.png', './images/temple_of_artemis.jpg', './images/whitehat_jr_trial_completion_cert.jpg', './images/will_n_okoye_photo_gallery_img.jpg', './images/will_n_okoye.png']);
        })
    );
});

self.addEventListener('fetch', eventVar=>{
    eventVar.respondWith(
        caches.match(eventVar.request).then(response=>{
            return response;
        })
    );
});
