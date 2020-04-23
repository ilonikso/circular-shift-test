// Index page
const shapeIndexPromo = function(){
    gsap.from(".circle-1", {duration: 4, rotate: 360, repeat: -1, repeatDelay:2, ease: "sine.inOut"});
    gsap.from(".circle-2", {duration: 4, rotate: 360, delay: 2, repeat: -1, repeatDelay:2, ease: "sine.inOut"});
    gsap.from(".circle-3", {duration: 4, rotate: -360, delay: -3, repeat: -1, repeatDelay:2, ease: "sine.inOut"});
};




const shapes = function(){
    gsap.set('.circle', {transformOrigin:"50% 50%"});

    //Index page
    shapeIndexPromo();
}

shapes();