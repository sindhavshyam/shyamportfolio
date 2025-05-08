var click = document.querySelector("#menu")
var click2 = document.querySelector("#menu")


click.addEventListener("click", function(){
    gsap.to("nav ul",{
        delay: 0,
        left:"0%",
        duration: 0.5,
        // opacity:0,

    })
})


click2.addEventListener("dblclick", function(){
    gsap.to("nav ul",{
        delay: 0,
        left:"-100%",
        // opacity:0,
        scrub: true,
        stagger: 0.5
    })
})
