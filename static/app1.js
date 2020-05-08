landing()

function landing() {
    const tl = gsap.timeline();

    tl.from(".logo", { duration: 2, x: -500, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(".uno", { duration: 2, y: -300, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(".dos", { duration: 4, y: -300, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(".tres", { duration: 4, y: -300, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(".cuatro", { duration: 4, y: -300, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(".box1", { duration: 2, scale: 0.5, opacity: 0, ease: Power2.easeInOut })
        .from(".box2", { duration: 1, opacity: 0, ease: Power2.easeInOut }, "+=1")
        .from(".box3", { duration: 1, opacity: 0, ease: Power2.easeInOut }, "-=1");
}
