import '../styles/_main.sass';
import '../styles/header.sass';
import '../styles/footer.sass';
import '../styles/article.sass';
import '../styles/mid.sass';




import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

window.onload = () => {
  // const bgImage = document.querySelector(".background-image")
  // const mockPhones = document.querySelector(".topright-container");
  // const topLeftContainer = document.querySelector(".topleft-container");
  // const topleftText = topLeftContainer.children;
  gsap.registerPlugin(ScrollTrigger);
  const burgerBtn = document.querySelector(".burger");
  const image = burgerBtn.firstChild;
  const navigationLink = document.querySelector(".link-section");
  const article = document.querySelector(".article")

  article.addEventListener('mouseover',()=>{
      console.log("TTTTTT");
  },false)
  const landingAnimation = () => {
    gsap.to(".background-image",{scale:0.5,yPercent: -20,xPercent: 10,duration: 2})
    gsap.to(".main-content",{opacity: 1,duration: 5})
    gsap.to('.topright-container',{opacity: 1,delay: 1, duration: 1.5});

    gsap.to('.animate-sub ',{x: 0,duration: 1.5,opacity: 1})
    gsap.to('.nav-bar ',{x: 0,duration: 1.5,opacity: 1})

    gsap.to(".icon-text",{x: 0,duration: 1,delay: 1,opacity: 1,scrollTrigger:{
      trigger: ".icon-list",

      end: "top 80%",
      start: "top 95%",
      toggleActions: "restart none restart none"
  }})
    gsap.to(".topleft-container button",{x: 0,duration: 1,delay: 1.3,opacity: 1})

    gsap.to(".nav-bar",{xPercent: 100,duration:2,
      scrollTrigger:{
        trigger: ".article",

        end: "top 80%",
        start: "top 95%",
        toggleActions: "restart none reverse none"
    }})
    gsap.to(".article",{y: 0,duration:2,opacity:1,stagger: {

      each: 0.1
    },
      scrollTrigger:{
        trigger: ".article-container",

        end: "top 80%",
        start: "top 95%",
        toggleActions: "restart none none reverse"
    }})
    // gsap.to(".article-container",{x: 0,opacity:1,duration:1,
    //   scrollTrigger:{
    //     trigger: ".article",

    //     end: "top 80%",
    //     start: "top 95%",
    //     toggleActions: "restart none none reverse"
    // }})
    gsap.to(".icon-card img",{scale: 1.2,duration:1,boxShadow:"10px 10px 30px 15px rgba(0,0,0,0.75);",
      scrollTrigger:{
        trigger: ".icon-card",

        end: "top 70%",
        start: "top 95%",
        toggleActions: "restart reverse reverse reverse"
    }})
  };

   burgerBtn.addEventListener('click',(e)=>{
      // gsap.to(".burger",{opacity:0});
      // gsap.to(".close",{opacity:1});
       if(navigationLink.style.opacity == 0 ){
        // navigationLink.style.display = "block";
        gsap.to(".link-section",{duration:.5,opacity: 1,translateY: 20})
        gsap.to(".burger",{rotate: 360});
        image.src = "/images/icon-close.svg"
       } else{
        gsap.to(".link-section",{duration:.5,opacity: 0,translateY: 0})
        gsap.to(".burger",{rotate: 0});
        image.src = "/images/icon-hamburger.svg"
       }
      
  
      
      
     
     
      
      
      
      
      e.stopPropagation();
    });

   function getMargin(i){
      switch(i){
        case 0: return "1.5rem";
        case 1: return 0;
        case 0: return "-1rem";
      
      }
   }
   function getRotation(i){
      switch(i){
        case 0: return -45;
        case 1: return 0;
        case 2: return 45;
      }
   }
   navigationLink.addEventListener('click',(e)=>{
      e.stopPropagation();
   });


   document.addEventListener('click',()=>{
    // navigationLink.style.display = "none"
    gsap.to(".burger",{rotate: 0});
    gsap.to(".link-section",{duration:.5,opacity: 0,translateY:0});
      
      image.src = "/images/icon-hamburger.svg"

   })



  landingAnimation();

}




