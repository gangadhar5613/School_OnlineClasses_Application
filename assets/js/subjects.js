


// logic to open particular subject when particular subjet button clicks

let classesList = document.querySelector(".classes");
let subjectBtn = document.querySelector(".sub-btn")
let subjectButtons = document.querySelector(".class-btns");
let changeUi = document.querySelector(".uiChange");
let siblingElement = document.querySelector(".student-profile");
let icon = document.querySelector(".student-image");
let backToSubject = document.querySelector("#back");
let nameOfUser = localStorage.getItem("username");
let stdClass = localStorage.getItem("class")
let headNavItem = document.querySelector(".headNavItem");

let physicsSub = document.querySelector(".science");
let biologySub = document.querySelector(".biology");
let socialSub = document.querySelector(".social");

// UI remove of physics and biology and merging of one class:

biologySub.style.display ="none";

if(stdClass  == "10" || stdClass ==  "9" || stdClass ==  "8"){
   physicsSub.innerText = "Physics";
   biologySub.style.display = "block";
   physicsSub.removeAttribute("data-set");
   physicsSub.setAttribute("data-set","Physics")
   physicsSub.classList.remove("Science");
   physicsSub.classList.add("Physics")
   socialSub.removeAttribute("data-value");
   socialSub.setAttribute("data-value","6")
}







//code to schedule classe links according to the time




let morningOnTime = new Date(`November 01,2020 9:00:00`);

let morningOffTime = new Date(`November 01,2020 10:00:00`);

let afternoonOnTime = new Date(`November 01,2020 14:00:00`);

let afternoonOffTime = new Date(`November 01,2020 15:00:00`);

let tenthClassOnTime = new Date(`November 01,2020 19:00:00`);
let tenthClassOffTime = new Date(`November 01,2020 20:00:00`);


let presentTime = new Date();


//







//


//




// function to create UI for class
let activeClass = localStorage.getItem("class");
function createClassUi(event){





  headNavItem.innerText = "Profile";
  headNavItem.href = "../pages/studentProfile.html";



   subjectButtons.style.display = "none";
//    siblingElement.style.display = "none";
  icon.style.display = "none";
    backToSubject.innerText = "Back to Subjects";
    backToSubject.href = "../pages/subjects.html"
    let article1 = document.createElement("article");
    article1.classList.add("subjects","container");
    let section1 = document.querySelector("section");
    section1.classList.add("subject-info");
   
        
    // creating name or button of active subject
    let classBtn = document.createElement("a");
    classBtn.classList.add("btn","sub-btn");
    classBtn.href ="#"
    classBtn.innerText = `${event.target.dataset.set}`;
    
    section1.append(classBtn);
    // creating options-list
    let optionsDiv = document.createElement("div");
    optionsDiv.classList.add("select-chp")

    let selectOptions = document.createElement("select");
    selectOptions.classList.add("chapter-opt");
  
    let option1 = document.createElement("option");
    option1.value = "Chapter-1";
    option1.innerText = "Chapter-1";

    let option2 = document.createElement("option");
    option2.value = "Chapter-2";
    option2.innerText = "Chapter-2";

    let option3 = document.createElement("option");
    option3.value = "Chapter-3";
    option3.innerText = "Chapter-3";

    let option4 = document.createElement("option");
    option4.value = "Chapter-4";
    option4.innerText = "Chapter-4";

   selectOptions.append(option1);
   selectOptions.append(option2);
   selectOptions.append(option3);
   selectOptions.append(option4);
    optionsDiv.append(selectOptions);
    section1.append(optionsDiv);
    article1.append(section1);
    // creating class box
    
    // article
    let classBox = document.createElement("article");
    classBox.classList.add("class-content","data-box","container");
   
    // section
    let classBoxSection = document.createElement("section");
    classBoxSection.classList.add("class-instructions");
 

        //   chapter name;

        let chapterName = document.createElement("h2");
        chapterName.classList.add("chapter");
        chapterName.innerText = "Chapter-1";

        // instructions

        let instructionPara = document.createElement("p");
        instructionPara.classList.add("chapter-inst");
        instructionPara.innerText ="Please complete the video and note down your doubts in book and ask your subject teacher.";


        classBoxSection.append(chapterName);
        classBoxSection.append(instructionPara);
        classBox.append(classBoxSection);

    // video section 

         let videoSection = document.createElement("section");
         videoSection.classList.add("video");
    //  let videoDiv = document.createElement("div");
    //  videoDiv.classList.add("videoDiv");
//   function to create links for specified subject:




  // file.forEach(link => {
  //   let div = document.createElement("div");
  //   div.innerHTML = link;
  //   videoSection.append(div);
  // })



//   if(activeClass == "10"){
    

//     if(event.target.dataset.set == "Telugu"){
//       // let teluguLinks = classEightLinks[0];
//       // teluguLinks.forEach(link => {
//       //   let div = document.createElement("div");
        
//       //   div.innerHTML = link;
//       //   videoSection.append(div);
//       // })

//       if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= tenthClassOffTime.getHours)  ){
              
//         let div = document.createElement("div");
//         div.classList.add("video-div")
//         div.innerHTML = `<video
//         id="my-video"
//         class="video-js video-link"
//         controls
//         controlsList="nodownload"
//         preload="auto" 
//         poster="/assets/images/poster.gif"
//         data-setup="{}"
//       >
//         <source src = ${tenthClassTeluguLink} type="video/mp4" />
//       </video>`;
//         videoSection.append(div);
      
//       }else{
//       let div = document.createElement("div");
//       div.innerText = "Lessons Not available" ;
//       videoSection.append(div);
//       }
//     }
//     if(event.target.dataset.set == "Hindi"){
//     //  let hindiLinks = classEightLinks[1];
//     //  hindiLinks.forEach(link => {
//     //    let div = document.createElement("div");
//     //    div.innerHTML = link;
//     //    videoSection.append(div);
//     //  })
//     if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
//       let div = document.createElement("div");
//       div.classList.add("video-div")
//       div.innerHTML = `<video
//       id="my-video"
//       class="video-js video-link"
//       controls
//       controlsList="nodownload"
//       preload="auto" 
//       poster="/assets/images/poster.gif"
//       data-setup="{}"
//     >
//       <source src = ${tenthClassSocialLink} type="video/mp4" />
//     </video>`;
//       videoSection.append(div);
    
//     }else{
//     let div = document.createElement("div");
//     div.innerText = "Lessons Not available" ;
//     videoSection.append(div);
//     }
//    }
//    if(event.target.dataset.set == "English"){
//     //  let englishLinks = classEightLinks[2];
//     //  englishLinks.forEach(link => {
//     //    let div = document.createElement("div");
//     //    div.innerHTML = link;
//     //    videoSection.append(div);
//     //  })
//     if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
//       let div = document.createElement("div");
//       div.classList.add("video-div")
//       div.innerHTML = `<video
//       id="my-video"
//       class="video-js video-link"
//       controls
//       controlsList="nodownload"
//       preload="auto" 
//       poster="/assets/images/poster.gif"
//       data-setup="{}"
//     >
//       <source src = ${tenthClassSocialLink} type="video/mp4" />
//     </video>`;
//       videoSection.append(div);
    
//     }else{
//     let div = document.createElement("div");
//     div.innerText = "Lessons Not available" ;
//     videoSection.append(div);
//     }
//    }
//    if(event.target.dataset.set == "Maths"){
//     //  let mathsLinks = classEightLinks[3];
//     //  mathsLinks.forEach(link => {
//     //    let div = document.createElement("div");
//     //    div.innerHTML = link;
//     //    videoSection.append(div);
//     //  })
//     if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
//       let div = document.createElement("div");
//       div.classList.add("video-div")
//       div.innerHTML = `<video
//       id="my-video"
//       class="video-js video-link"
//       controls
//       controlsList="nodownload"
//       preload="auto" 
//       poster="/assets/images/poster.gif"
//       data-setup="{}"
//     >
//       <source src = ${tenthClassSocialLink} type="video/mp4" />
//     </video>`;
//       videoSection.append(div);
    
//     }else{
//     let div = document.createElement("div");
//     div.innerText = "Lessons Not available" ;
//     videoSection.append(div);
//     }
   
//    }
//    if(event.target.dataset.set == "Physics"){
//     //  let physicsLinks = classEightLinks[4];
//     //  physicsLinks.forEach(link => {
//     //    let div = document.createElement("div");
//     //    div.innerHTML = link;
//     //    videoSection.append(div);
//     //  })
//     if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
//       let div = document.createElement("div");
//       div.classList.add("video-div")
//       div.innerHTML = `<video
//       id="my-video"
//       class="video-js video-link"
//       controls
//       controlsList="nodownload"
//       preload="auto" 
//       poster="/assets/images/poster.gif"
//       data-setup="{}"
//     >
//       <source src = ${tenthClassSocialLink} type="video/mp4" />
//     </video>`;
//       videoSection.append(div);
    
//     }else{
//     let div = document.createElement("div");
//     div.innerText = "Lessons Not available" ;
//     videoSection.append(div);
//     }
//    }
//    if(event.target.dataset.set == "Biology"){
//     //  let biologyLinks = classEightLinks[5];
//     //  biologyLinks.forEach(link => {
//     //    let div = document.createElement("div");
//     //    div.innerHTML = link;
//     //    videoSection.append(div);
//     //  })
//     if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
//       let div = document.createElement("div");
//       div.classList.add("video-div")
//       div.innerHTML = `<video
//       id="my-video"
//       class="video-js video-link"
//       controls
//       controlsList="nodownload"
//       preload="auto" 
//       poster="/assets/images/poster.gif"
//       data-setup="{}"
//     >
//       <source src = ${tenthClassSocialLink} type="video/mp4" />
//     </video>`;
//       videoSection.append(div);
    
//     }else{
//     let div = document.createElement("div");
//     div.innerText = "Lessons Not available" ;
//     videoSection.append(div);
//     }
//    }
//    if(event.target.dataset.set == "Social"){
//     //  let socialLinks = classEightLinks[6];
//     //  socialLinks.forEach(link => {
//     //    let div = document.createElement("div");
//     //    div.innerHTML = link;
//     //    videoSection.append(div);
//     //  })

//     if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
//       let div = document.createElement("div");
//       div.classList.add("video-div")
//       div.innerHTML = `<video
//       id="my-video"
//       class="video-js video-link"
//       controls
//       controlsList="nodownload"
//       preload="auto" 
//       poster="/assets/images/poster.gif"
//       data-setup="{}"
//     >
//       <source src = ${tenthClassSocialLink} type="video/mp4" />
//     </video>`;
//       videoSection.append(div);
    
//     }else{
//     let div = document.createElement("div");
//     div.innerText = "Lessons Not available" ;
//     videoSection.append(div);
//     }
//    }

// }


  // videos for8th class

   if(activeClass == "8"){
    

          if(event.target.dataset.set == "Telugu"){
            let teluguLinks = classEightLinks[0];
            teluguLinks.forEach(link => {
              let div = document.createElement("div");
              
              div.innerHTML = link;
              videoSection.append(div);
            })
          }
          if(event.target.dataset.set == "Hindi"){
           let hindiLinks = classEightLinks[1];
           hindiLinks.forEach(link => {
             let div = document.createElement("div");
             div.innerHTML = link;
             videoSection.append(div);
           })
         }
         if(event.target.dataset.set == "English"){
           let englishLinks = classEightLinks[2];
           englishLinks.forEach(link => {
             let div = document.createElement("div");
             div.innerHTML = link;
             videoSection.append(div);
           })
         }
         if(event.target.dataset.set == "Maths"){
           let mathsLinks = classEightLinks[3];
           mathsLinks.forEach(link => {
             let div = document.createElement("div");
             div.innerHTML = link;
             videoSection.append(div);
           })
         }
         if(event.target.dataset.set == "Physics"){
           let physicsLinks = classEightLinks[4];
           physicsLinks.forEach(link => {
             let div = document.createElement("div");
             div.innerHTML = link;
             videoSection.append(div);
           })
         }
         if(event.target.dataset.set == "Biology"){
           let biologyLinks = classEightLinks[5];
           biologyLinks.forEach(link => {
             let div = document.createElement("div");
             div.innerHTML = link;
             videoSection.append(div);
           })
         }
         if(event.target.dataset.set == "Social"){
           let socialLinks = classEightLinks[6];
           socialLinks.forEach(link => {
             let div = document.createElement("div");
             div.innerHTML = link;
             videoSection.append(div);
           })
         }

   }

  // class for 9th class
  if(activeClass == "9"){
    

    if(event.target.dataset.set == "Telugu"){
      let teluguLinks = videoFiles[0];
      teluguLinks.forEach(link => {
        let div = document.createElement("div");
        
        div.innerHTML = link;
        videoSection.append(div);
      })
    }
    if(event.target.dataset.set == "Hindi"){
     let hindiLinks = videoFiles[1];
     hindiLinks.forEach(link => {
       let div = document.createElement("div");
       div.innerHTML = link;
       videoSection.append(div);
     })
   }
   if(event.target.dataset.set == "English"){
     let englishLinks = videoFiles[2];
     englishLinks.forEach(link => {
       let div = document.createElement("div");
       div.innerHTML = link;
       videoSection.append(div);
     })
   }
   if(event.target.dataset.set == "Maths"){
     let mathsLinks = videoFiles[3];
     mathsLinks.forEach(link => {
       let div = document.createElement("div");
       div.innerHTML = link;
       videoSection.append(div);
     })
   }
   if(event.target.dataset.set == "Physics"){
     let physicsLinks = videoFiles[4];
     physicsLinks.forEach(link => {
       let div = document.createElement("div");
       div.innerHTML = link;
       videoSection.append(div);
     })
   }
   if(event.target.dataset.set == "Biology"){
     let biologyLinks = videoFiles[5];
     biologyLinks.forEach(link => {
       let div = document.createElement("div");
       div.innerHTML = link;
       videoSection.append(div);
     })
   }
   if(event.target.dataset.set == "Social"){
     let socialLinks = videoFiles[6];
     socialLinks.forEach(link => {
       let div = document.createElement("div");
       div.innerHTML = link;
       videoSection.append(div);
     })
   }

} 
// end of class 


// 7th class

if(activeClass == "7"){
    

  if(event.target.dataset.set == "Telugu"){
    let teluguLinks = seventhClassLinks[0];
    teluguLinks.forEach(link => {
      let div = document.createElement("div");
      
      div.innerHTML = link;
      videoSection.append(div);
    })
  }
  if(event.target.dataset.set == "Hindi"){
   let hindiLinks = seventhClassLinks[1];
   hindiLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "English"){
   let englishLinks = seventhClassLinks[2];
   englishLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "Maths"){
   let mathsLinks = seventhClassLinks[3];
   mathsLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "Science"){
   let physicsLinks = seventhClassLinks[4];
   physicsLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "Social"){
   let socialLinks = seventhClassLinks[5];
   socialLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }

} 
// end of class 




       // 6th class

if(activeClass == "6"){
    

  if(event.target.dataset.set == "Telugu"){
    let teluguLinks = seventhClassLinks[0];
    teluguLinks.forEach(link => {
      let div = document.createElement("div");
      
      div.innerHTML = link;
      videoSection.append(div);
    })
  }
  if(event.target.dataset.set == "Hindi"){
   let hindiLinks = seventhClassLinks[1];
   hindiLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "English"){
   let englishLinks = seventhClassLinks[2];
   englishLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "Maths"){
   let mathsLinks = seventhClassLinks[3];
   mathsLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "Science"){
   let physicsLinks = seventhClassLinks[4];
   physicsLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }
 if(event.target.dataset.set == "Social"){
   let socialLinks = seventhClassLinks[5];
   socialLinks.forEach(link => {
     let div = document.createElement("div");
     div.innerHTML = link;
     videoSection.append(div);
   })
 }

} 
// end of class 



      // 5th class

if(activeClass == "5"){
    

  if(event.target.dataset.set == "Telugu"){
    // let teluguLinks = fifthClassLessons[0];
    // teluguLinks.forEach(link => {
    //   let div = document.createElement("div");
      
      
    //   div.innerHTML = `<video
    //   id="my-video"
    //   class="video-js video-link"
    //   controls
    //   controlsList="nodownload"
    //   preload="auto" 
    //   poster="MY_VIDEO_POSTER.jpg"
    //   data-setup="{}"
    // >
    //   <source src = ${link} type="video/mp4" />
    // </video>`;
    //   videoSection.append(div);
    // })
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
  }
  if(event.target.dataset.set == "Hindi"){
  //  let hindiLinks = seventhClassLinks[1];
  //  hindiLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }
 if(event.target.dataset.set == "English"){
   let englishLinks = fifthClassLessons[1];
  //  englishLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  
// let link = englishLinks[2];
console.log(fourthClassEnglishLink);
// if(morningTime.getHours == time.getHours() && morningTime.getMinutes == time.getMinutes()){
//     link = englishLinks[0];
//     console.log("part 1")
// }else if(afternoonTime.getHours == time.getHours() && afternoonTime.getMinutes == time.getMinutes()){
//   link = englishLinks[1];
// }

if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){                        
              
  let div = document.createElement("div");
  div.classList.add("video-div")
  div.innerHTML = `<video
  id="my-video"
  class="video-js video-link"
  controls
  controlsList="nodownload"
  preload="auto" 
  poster="/assets/images/poster.gif"
  data-setup="{}"
>
  <source src = ${fifthClassEnglishLink} type="video/mp4" />
</video>`;
  videoSection.append(div);

}else{
let div = document.createElement("div");
div.innerText = "Lessons Not available" ;
videoSection.append(div);
}

 

 
 }
 if(event.target.dataset.set == "Maths"){
  //  let mathsLinks = seventhClassLinks[3];
  //  mathsLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                        
    let div = document.createElement("div");
    div.classList.add("video-div")
    div.innerHTML = `<video
    id="my-video"
    class="video-js video-link"
    controls
    controlsList="nodownload"
    preload="auto" 
    poster="/assets/images/poster.gif"
    data-setup="{}"
  >
    <source src = ${fifthClassMathsLink} type="video/mp4" />
  </video>`;
    videoSection.append(div);

}else{
let div = document.createElement("div");
div.innerText = "Lessons Not available" ;
videoSection.append(div);
}
 }
 if(event.target.dataset.set == "Science"){
  //  let physicsLinks = seventhClassLinks[4];
  //  physicsLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }
 if(event.target.dataset.set == "Social"){
  //  let socialLinks = seventhClassLinks[5];
  //  socialLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }

} 
// end of class 
         


// 4th class

if(activeClass == "4"){
    

              if(event.target.dataset.set == "Telugu"){
                // let teluguLinks = fourthClassLessons[0];
                // teluguLinks.forEach(link => {
                //   let div = document.createElement("div");
                //   div.classList.add("video-div")
                //   div.innerHTML = `<video
                //   id="my-video"
                //   class="video-js video-link"
                //   controls
                //   controlsList="nodownload"
                //   preload="auto" 
                //   poster="MY_VIDEO_POSTER.jpg"
                //   data-setup="{}"
                // >
                //   <source src = ${link} type="video/mp4" />
                // </video>`;
                //   videoSection.append(div);
                // })
                let div = document.createElement("div");
                div.innerText = "Lessons Not available" ;
                videoSection.append(div);
              }




              if(event.target.dataset.set == "Hindi"){
              //  let hindiLinks = seventhClassLinks[1];
              //  hindiLinks.forEach(link => {
              //    let div = document.createElement("div");
              //    div.innerHTML = link;
              //    videoSection.append(div);
              //  })
              let div = document.createElement("div");
                div.innerText = "Lessons Not available" ;
                videoSection.append(div);
            }



// english
 
  // Schedule for english

 
              if(event.target.dataset.set == "English"){
                
                // let englishLinks = fourthClassLessons[1];
                // let link = englishLinks[2];
                //  englishLinks.forEach(link => {
                //    let div = document.createElement("div");
                //    div.innerHTML = link;
                //    videoSection.append(div);
                //  })

                if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){                        
                let div = document.createElement("div");
              div.classList.add("video-div")
              div.innerHTML = `<video
              id="my-video"
              class="video-js video-link"
              controls
              controlsList="nodownload"
              preload="auto" 
              poster="/assets/images/poster.gif"
              data-setup="{}"
            >
              <source src = ${fourthClassEnglishLink} type="video/mp4" />
            </video>`;
              videoSection.append(div);

        }else{
          let div = document.createElement("div");
          div.innerText = "Lessons Not available" ;
          videoSection.append(div);
        }

            }





 if(event.target.dataset.set == "Maths"){
  //  let mathsLinks = seventhClassLinks[3];
  //  mathsLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                        
    let div = document.createElement("div");
    div.classList.add("video-div")
    div.innerHTML = `<video
    id="my-video"
    class="video-js video-link"
    controls
    controlsList="nodownload"
    preload="auto" 
    poster="/assets/images/poster.gif"
    data-setup="{}"
  >
    <source src = ${fourthClassMathsLink} type="video/mp4" />
  </video>`;
    videoSection.append(div);

}else{
let div = document.createElement("div");
div.innerText = "Lessons Not available" ;
videoSection.append(div);
}
 }
 if(event.target.dataset.set == "Science"){
  //  let physicsLinks = seventhClassLinks[4];
  //  physicsLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }
 if(event.target.dataset.set == "Social"){
  //  let socialLinks = seventhClassLinks[5];
  //  socialLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }

} 
// end of class 

    

// 3rd class

if(activeClass == "3"){
    

  if(event.target.dataset.set == "Telugu"){
    // let teluguLinks = thirdClassLessonVidoes[0];
    // teluguLinks.forEach(link => {
    //   let div = document.createElement("div");
      
      
    //   div.innerHTML = `<video
    //   id="my-video"
    //   class="video-js video-link"
    //   controls
    //   controlsList="nodownload"
    //   preload="auto" 
    //   poster="MY_VIDEO_POSTER.jpg"
    //   data-setup="{}"
    // >
    //   <source src = ${link} type="video/mp4" />
    // </video>`;
    //   videoSection.append(div);
    // })
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
  }
  if(event.target.dataset.set == "Hindi"){
  //  let hindiLinks = seventhClassLinks[1];
  //  hindiLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }
 if(event.target.dataset.set == "English"){
  //  let englishLinks = thirdClassLessonVidoes[1];
  //  englishLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  
  // let link = englishLinks[2];

      
  if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){                        
              let div = document.createElement("div");
              div.classList.add("video-div")
              div.innerHTML = `<video
              id="my-video"
              class="video-js video-link"
              controls
              controlsList="nodownload"
              preload="auto" 
              poster="/assets/images/poster.gif"
              data-setup="{}"
            >
              <source src = ${thirdClassEnglishLink} type="video/mp4" />
            </video>`;
              videoSection.append(div);
              

          }
          else{
          let div = document.createElement("div");
          div.innerText = "Lessons Not available" ;
          videoSection.append(div);
          console.log(thirdClassEnglishLink)
          }

  
 }
 if(event.target.dataset.set == "Maths"){
  //  let mathsLinks = seventhClassLinks[3];
  //  mathsLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                        
    let div = document.createElement("div");
    div.classList.add("video-div")
    div.innerHTML = `<video
    id="my-video"
    class="video-js video-link"
    controls
    controlsList="nodownload"
    preload="auto" 
    poster="/assets/images/poster.gif"
    data-setup="{}"
  >
    <source src = ${thirdClassMathsLink} type="video/mp4" />
  </video>`;
    videoSection.append(div);

}else{
let div = document.createElement("div");
div.innerText = "Lessons Not available" ;
videoSection.append(div);
}
 }
 if(event.target.dataset.set == "Science"){
  //  let physicsLinks = seventhClassLinks[4];
  //  physicsLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }
 if(event.target.dataset.set == "Social"){
  //  let socialLinks = seventhClassLinks[5];
  //  socialLinks.forEach(link => {
  //    let div = document.createElement("div");
  //    div.innerHTML = link;
  //    videoSection.append(div);
  //  })
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
 }

} 
// end of class 



  // 

    


        //  videoSection.innerHTML = `${videoFiles[event.target.dataset.value].video2}`;
        classBox.append(videoSection);

        //  notes section 

        let notesSection = document.createElement("section");
        notesSection.classList.add("notes");
        let notesDiv = document.createElement("div");
        notesDiv.classList.add("notes-box");

        let homework = document.createElement("h3");
         notesDiv.append(homework);

         let homeworkInstr = document.createElement("ul");
         homeworkInstr.classList.add("instruction-hm");
         
        let instrList1 = document.createElement("li");
        instrList1.innerText = "Write down neatly in a note book";
        homeworkInstr.append(instrList1);
        let instrList2 = document.createElement("li");
        instrList2.innerText = "Take clear picture of the home work with the help of your parents";
        homeworkInstr.append(instrList2);
        let instrList3 = document.createElement("li");
        instrList3.innerText = "Upload your home work here";
        homeworkInstr.append(instrList3);

        notesDiv.append(homeworkInstr);

        // file upload

        let fileDiv = document.createElement("div");
        fileDiv.classList.add("upload-file");

        // let uploadForm = document.createElement("form");
        // uploadForm.action = "/index.html";
        // uploadForm.method = "POST";

        let formInstr = document.createElement("p");
        formInstr.innerText = "Select image to upload:";

        let fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.name = "fileToUpload";
        fileInput.setAttribute("id","photo");
        let submitBtn = document.createElement("button");

        submitBtn.classList.add("form-submit"); 
        submitBtn.type = "submit";
        submitBtn.innerText = "Submit";



       let loaderDiv = document.createElement("div")
       loaderDiv.classList.add("loaderDiv");
       let success = document.createElement("p");
       success.classList.add("success");
       success.innerText = "Uploading file,please wait...."
       let failure = document.createElement("p");
       failure.classList.add("failure");
       failure.innerText = "file upload failed,please try again."

       loaderDiv.append(success);
       loaderDiv.append(failure);
        
        fileDiv.append(formInstr);
        fileDiv.append(fileInput);
        fileDiv.append(submitBtn);
        fileDiv.append(loaderDiv);

      

        
        notesDiv.append(fileDiv);
        notesSection.append(notesDiv);
      
// append


   classBox.append(notesSection);
 //    changeUi.append(article);
 changeUi.append(article1);
 changeUi.append(classBox);
  
   
 //    changeUi.append(classBox);



//  firebase connect of fileupload


let imageSubmit = document.querySelector(".form-submit");

let successLoader = document.querySelector(".success");
let failureLoader = document.querySelector(".failure");



var firebaseConfig = {
    apiKey: "AIzaSyAN3Ae_zuuHbCJEEIqO4dbHzgQG4opm-bY",
    authDomain: "school-project-292014.firebaseapp.com",
    databaseURL: "https://school-project-292014.firebaseio.com",
    projectId: "school-project-292014",
    storageBucket: "school-project-292014.appspot.com",
    messagingSenderId: "398939585163",
    appId: "1:398939585163:web:1e149e77ebe6046724728e",
    measurementId: "G-7BL50FDHD3"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log(firebase);

function uploadImage() {
    
const ref = firebase.storage().ref();
const file = document.querySelector("#photo").files[0];

successLoader.style.display = "block";

const name = new Date() + "-"+ nameOfUser+ '-' + event.target.dataset.set + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then(url => {
    // console.log(url);
    // console.log(name);
    // successLoader.style.display = "none"
    alert("File Uploaded");
     document.querySelector("#photo").value ="";
     successLoader.style.display = "none";
    // document.querySelector("#image").src = url;
  })
  .catch(console.error);
}


imageSubmit.addEventListener("click",uploadImage)


}




classesList.addEventListener("click",createClassUi);









  // function subjectBack(){
  //     subjectButtons.style.display = "block";
  //     article1.style.display = "none";
  //     classBox.style.display = "none"
  // }


  // backToSubject.addEventListener("click",subjectBack);
