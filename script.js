var tl = gsap.timeline()

tl.from("#nav h3",{
 y:-50,
 opacity:0,
 delay:0.3, 
 duration:.6,
 stagger:.2
})
tl.from(".hero h1",{
    x:-500,
    opacity:0,
    delay:0.2, 
    duration:.5,
    stagger:.3
   })

   tl.from(".img-section img",{
       x:100,
    rotate:45,
    opacity:0,
    duration:.5,
    stagger:.3

   })
   
   
