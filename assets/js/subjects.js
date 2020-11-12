


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




let morningOnTime = new Date(`November 01,2020 09:00:00`);

let morningOffTime = new Date(`November 01,2020 10:00:00`);

let afternoonOnTime = new Date(`November 01,2020 14:00:00`);

let afternoonOffTime = new Date(`November 01,2020 16:00:00`);

let tenthClassOnTime = new Date(`November 01,2020 13:00:00`);
let tenthClassOffTime = new Date(`November 01,2020 14:00:00`);


let presentTime = new Date();


//



//october schedule
 
let presentDate = new Date();

let commonMorningOnTime = new Date(`November 02,2020 09:00:00`);
let commonMorningOffTime = new Date(`November 02,2020 10:00:00`);

let commonAfternoonOnTime = new Date(`November 02,2020 14:00:00`);
let commonAfternoonOffTime = new Date(`November 02,2020 16:00:00`);

// let commonAfternoonOnTime = new Date(`November 01,2020 21:00:00`);
// let commonAfternoonOffTime = new Date(`November 01,2020 22:00:00`);
 

//3rd class schedule
 let thirdClassEnglishLink;
 let thirdClassMathsLink;
 let thirdClassHindiLink;
 let thirdClassSocialLink;
 let thirdClassTeluguLink;
 let thirdClassScienceLink;

 let thirdClassTeluguClasses = thirdClassLessonVidoes[0];
 let thirdClassHindiClasses = thirdClassLessonVidoes[1];
 let thirdClassEnglishClasses = thirdClassLessonVidoes[2];

 let thirdClassMathsClasses = thirdClassLessonVidoes[3];

 let thirdClassScienceClasses = thirdClassLessonVidoes[4];
 let thirdClassSocialClasses = thirdClassLessonVidoes[5];


    //  //30th october afternoon

    //  //afternoon
    //  let october30AfternoonOnTime = new Date(`October 30,2020 14:00:00`);
    //  let october30AfternoonOffTime = new Date(`October 30,2020 15:00:00`);
    // //  thirdClassEnglishLink = thirdClassEnglishClasses[3];

  
    // if( presentDate.getHours() >= october30AfternoonOnTime.getHours()  && presentDate.getHours() <= october30AfternoonOffTime.getHours()){
    //   thirdClassEnglishLink = thirdClassEnglishClasses[3];
        
        
    // }
   
  
   


  //  //31st october

  //      //morning
  //      let october31MorningOnTime = new Date(`November 01,2020 9:00:00`);
  //      let october31MorningOffTime = new Date(`November 01,2020 10:00:00`);


  //      if( presentDate.getDate() == october31MorningOnTime.getDate() && presentDate.getHours() >= october31MorningOnTime.getHours()  && presentDate.getHours() <= october31MorningOffTime.getHours()){
  //         thirdClassEnglishLink = thirdClassEnglishClasses[4];
  //         console.log(thirdClassEnglishLink);
  //     }

  //      //afternoon
  //      let october31AfternoonOnTime = new Date(`November 01,2020 14:00:00`);
  //      let october31AfternoonOffTime = new Date(`November 01,2020 15:00:00`);

  //      if( presentDate.getHours() >= october31AfternoonOnTime.getHours()  && presentDate.getHours() <= october31AfternoonOffTime.getHours()){
  //         thirdClassMathsLink = thirdClassMathsClasses[0];
  //     }

       
    //2nd november
    //    let november2Timings = new Date(`November 02,2020 09:00:00 `);
    //  //    let november2Timings = new Date(`November 01,2020 09:00:00 `)

    //   //morning
    //  if( (presentDate.getDate() === november2Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
    //         thirdClassMathsLink = thirdClassMathsClasses[1];
            
    //   }

    //  //afternoon
    //     if( (presentDate.getDate() === november2Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
    //         thirdClassMathsLink = thirdClassMathsClasses[2];
    //         console.log(thirdClassMathsLink);
            
            
    //     }

    //3rd November
            //  let november3Timings = new Date(`November 03,2020 09:00:00 `);


            //  //morning
            //  //maths
            //  if( (presentDate.getDate() === november3Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
            //     thirdClassMathsLink = thirdClassMathsClasses[3];
            //     console.log("Time started");
            //     console.log(thirdClassEnglishLink);
            //   }
            //        //afternoon
            //        //science
            //     if( (presentDate.getDate() === november3Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
            //         thirdClassScienceLink = thirdClassScienceClasses[0];
            //         console.log("Time started");
            //         console.log(thirdClassScienceLink)
                    
            //     }

    //4th November

      //  let november4Timings = new Date(`November 04,2020 09:00:00 `);

      //        //morning
      //        if( (presentDate.getDate() === november4Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
      //           thirdClassScienceLink = thirdClassScienceClasses[1];
      //           console.log("Time started");
      //           console.log(thirdClassScienceLink)
      //         }
      //         //afternoon
      //           if( (presentDate.getDate() === november4Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
      //               thirdClassSocialLink = thirdClassSocialClasses[0];
      //               console.log("Time started");
      //               console.log(thirdClassSocialLink)
                    
      //           }

    //5th November

        // let november5Timings = new Date(`November 05,2020 09:00:00 `);
        //        //morning
        //         if( (presentDate.getDate() === november5Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
        //                 thirdClassSocialLink = thirdClassSocialClasses[0];
        //                 console.log(thirdClassSocialLink)
                        
        //         }
        //         //afternoon
        //             if( (presentDate.getDate() === november5Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
        //                     thirdClassSocialLink = thirdClassSocialClasses[1];
                       
                            
        //             }

    //6th November
         let november6Timings = new Date(`November 06,2020 09:00:00`);

                        //morning
                        if( (presentDate.getDate() === november6Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                            thirdClassTeluguLink = thirdClassTeluguClasses[1];
                            
                    }
                    //afternoon
                        if( (presentDate.getDate() === november6Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                                thirdClassTeluguLink = thirdClassTeluguClasses[2];
                               
                                
                        }

    //7th November 
 
      let november7Timings = new Date(`November 07,2020 09:00:00`);

                    //morning
                        if( (presentDate.getDate() === november7Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                            thirdClassEnglishLink = thirdClassEnglishClasses[5];
                            console.log("Time started");
                            console.log(thirdClassScienceLink)
                    }
                    //afternoon
                        if( (presentDate.getDate() === november7Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                                thirdClassEnglishLink = thirdClassEnglishClasses[6];
                                console.log("Time started");
                                console.log(thirdClassSocialLink)
                                
                        }

    //8th November
    //   let november8Timings = new Date(`November 08,2020 09:00:00`);

    //                 //morning
    //                 if( (presentDate.getDate() === november8Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
    //                     thirdClassEnglishLink = thirdClassEnglishClasses[7];
    //                     console.log("Time started");
    //                     console.log(thirdClassScienceLink)
    //             }
    //             //afternoon
    //                 if( (presentDate.getDate() === november8Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
    //                         thirdClassEnglishLink = thirdClassEnglishClasses[8];
    //                         console.log("Time started");
    //                         console.log(thirdClassSocialLink)
                            
    //                 }

    // //9th November
    //   let november9Timings = new Date(`November 09,2020 09:00:00`);


      



    //                 //morning
    //                 if( (presentDate.getDate() === november9Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
    //                     thirdClassEnglishLink = thirdClassEnglishClasses[7];
    //                     console.log("Time started morning");
    //                     console.log(thirdClassEnglishLink)
                      
    //             }
    //             //afternoon
    //                 if( (presentDate.getDate() === november9Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
    //                         thirdClassEnglishLink = thirdClassEnglishClasses[8];
    //                         console.log("Time started afternoon");
    //                         console.log(thirdClassEnglishLink);
                            
    //                 }
    
    //10th November
      
      //  let november10Timings = new Date(`November 10,2020 09:00:00`);
       
     

      //               //morning
      //                      if( (presentDate.getDate() === november10Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
      //                       thirdClassEnglishLink = thirdClassEnglishClasses[9];
                           
      //               }
      //               //afternoon
      //                   if( (presentDate.getDate() === november10Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
      //                           thirdClassMathsLink = thirdClassMathsClasses[4];
                                
                                
      //                   }

    //11th November
    // let november11Timings = new Date(`November 11,2020 09:00:00`);

   
    //                 //morning
    //                 if( (presentDate.getDate() === november11Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
    //                     thirdClassMathsLink = thirdClassMathsClasses[5];
    //                     console.log("Time started");
    //                     console.log(thirdClassScienceLink)
    //             }
    //             //afternoon
    //                 if( (presentDate.getDate() === november11Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
    //                         thirdClassMathsLink = thirdClassMathsClasses[6];
    //                         console.log("Time started");
    //                         console.log(thirdClassSocialLink)
                            
    //                 }

    //12th November
     let november12Timings = new Date(`November 12,2020 09:00:00`);

     localStorage.setItem("thirdClassScheduleMorning",'Science-2nd Lesson- Part-1');
     localStorage.setItem("thirdClassScheduleAfternoon",'Science-2nd Lesson- Part-2');
            //morning
            if( (presentDate.getDate() === november12Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                thirdClassScienceLink = thirdClassScienceClasses[2];
                console.log("Time started");
                console.log(thirdClassScienceLink)
        }
        //afternoon
            if( (presentDate.getDate() === november12Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                    thirdClassScienceLink = thirdClassScienceClasses[3];
                    console.log("Time started");
                    console.log(thirdClassSocialLink)
                    
            }

    //13th November
             let november13Timings = new Date(`November 13,2020 09:00:00`);

      
            //morning
                if( (presentDate.getDate() === november13Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                    thirdClassSocialLink = thirdClassSocialClasses[2];
                    console.log("Time started");
                    console.log(thirdClassScienceLink)
            }
            //afternoon
                if( (presentDate.getDate() === november13Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                        thirdClassSocialLink = thirdClassSocialClasses[3];
                        console.log("Time started");
                        console.log(thirdClassSocialLink)
                        
                }
    //15th November
            let november15Timings = new Date(`November 15,2020 09:00:00`);

            
            //morning
                if( (presentDate.getDate() === november15Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                    thirdClassTeluguLink = thirdClassTeluguClasses[3];

            }
            //afternoon
                if( (presentDate.getDate() === november15Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                        thirdClassTeluguLink = thirdClassTeluguClasses[4];
                        
                }


    

            





//







//4th Class Schedule

 let fourthClassEnglishLink;
 let fourthClassMathsLink;
 let fourthClassScienceLink;
 let fourthClassSocialLink;
 let fourthClassTeluguLink;
 let fourthClassHindiLink;

 let fourthClassTeluguClasses = fourthClassLessons[0];
 let fourthClassHindiClasses = fourthClassLessons[1];

 let fourthClassEnglishClasses = fourthClassLessons[2];

 let fourthClassMathsClasses = fourthClassLessons[3];
 let fourthClassScienceClasses = fourthClassLessons[4];
 let fourthClassSocialClasses = fourthClassLessons[5];

  //30th october afternoon

     //afternoon
     // let october30AfternoonOnTime = new Date(`October 30,2020 09:00:00`);
     // let october30AfternoonOffTime = new Date(`October 30,2020 15:00:00`);

    //  if(presentDate.getDate() == october30AfternoonOnTime.getDate() && presentDate.getHours() >= october30AfternoonOnTime.getHours()  && presentDate.getHours() <= october30AfternoonOffTime.getHours()){
    //       fourthClassEnglishLink = fourthClassEnglishClasses[3];
    //   }


   //31st october

     //morning
     //   let october31MorningOnTime = new Date(`October 31,2020 09:00:00`);
     //   let october31MorningOffTime = new Date(`October 31,2020 10:00:00`);
  //    if( presentDate.getDate() == october31MorningOnTime.getDate() && presentDate.getHours() >= october31MorningOnTime.getHours()  && presentDate.getHours() <= october31MorningOffTime.getHours()){
  //     fourthClassEnglishLink = fourthClassEnglishClasses[4];
  //     console.log(fourthClassEnglishLink);
  // }

       //afternoon
     //   let october31AfternoonOnTime = new Date(`October 31,2020 14:00:00`);
     //   let october31AfternoonOffTime = new Date(`October 31,2020 15:00:00`);

    //  if( presentDate.getHours() >= october31AfternoonOnTime.getHours()  && presentDate.getHours() <= october31AfternoonOffTime.getHours()){
    //       fourthClassMathsLink = fourthClassMathsClasses[0];
    //  }
  
    //2nd November

            
        // //morning
        //     if( (presentDate.getDate() === november3Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
        //         fourthClassMathsLink = fourthClassMathsClasses[1];

        // }
        // //afternoon
        //     if( (presentDate.getDate() === november3Timings.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
        //             fourthClassMathsLink = fourthClassMathsClasses[2];
        //             console.log(fourthClassMathsLink);
                    
        //     }

      //3rd November
            // let november3Class4 = new Date(`November 03,2020 09:00:00`)
            //  //morning
            //  //english-1-1
            //         if( (presentDate.getDate() === november3Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
            //           fourthClassEnglishLink = fourthClassEnglishClasses[0];
                      

            //   }
            //   //afternoon
            //   //english-1-2
            //       if( (presentDate.getDate() === november3Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
            //               fourthClassEnglishLink = fourthClassEnglishClasses[1];
                        
                          
            //       }
      
      //4th November
            // let november4Class4 = new Date(`November 04,2020 09:00:00`)
            // //morning
            // //english-1-3
            //       if( (presentDate.getDate() === november4Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
            //         fourthClassEnglishLink = fourthClassEnglishClasses[2];
                    

            // }
            // //afternoon
            // //english-1-4
            //     if( (presentDate.getDate() === november4Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
            //             fourthClassEnglishLink = fourthClassEnglishClasses[3];
                      
                        
            //     }


  //5th November
                      // let november5Class4 = new Date(`November 05,2020 09:00:00`)
                      // //morning
                      // //english-1-5
                      //       if( (presentDate.getDate() === november5Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                      //         fourthClassEnglishLink = fourthClassEnglishClasses[4];
                              

                      // }
                      // //afternoon
                      // //maths-1-1
                      //     if( (presentDate.getDate() === november5Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                      //             fourthClassMathsLink = fourthClassMathsClasses[0];
                                
                                  
                      //     }



  //6th November
          let november6Class4 = new Date(`November 06,2020 09:00:00`)
          //morning
          //maths-1-2
                if( (presentDate.getDate() === november6Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                  fourthClassMathsLink = fourthClassMathsClasses[1];
                  

          }
          //afternoon
          //maths-1-3
              if( (presentDate.getDate() === november6Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                      fourthClassMathsLink = fourthClassMathsClasses[2];
                    
                      
              }

  
  //7th November
          let november7Class4 = new Date(`November 07,2020 09:00:00`)
          //morning
          //maths-1-4
                if( (presentDate.getDate() === november7Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                  fourthClassMathsLink = fourthClassMathsClasses[3];
                  

          }
          //afternoon
          //maths-1-5
              if( (presentDate.getDate() === november7Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                      fourthClassMathsLink = fourthClassMathsClasses[4];
                    
                      
              }


  // //9th November
  //         let november9Class4 = new Date(`November 09,2020 09:00:00`)
  //         //morning
         


  //         //maths-1-6
  //               if( (presentDate.getDate() === november9Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
  //                 fourthClassMathsLink = fourthClassMathsClasses[5];
  //                 console.log('morning')
                  

  //         }
  //         //afternoon
  //         //science-1-1
  //             if( (presentDate.getDate() === november9Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
  //                     fourthClassScienceLink = fourthClassScienceClasses[0];
  //                     console.log("afternoon")
                    
                      
  //             }

  //10th November
          // let november10Class4 = new Date(`November 10,2020 09:00:00`);
        
          // //morning
          // //science-1-2
          //       if( (presentDate.getDate() === november10Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
          //         fourthClassScienceLink = fourthClassScienceClasses[1];
                  

          // }
          // //afternoon
          // //social-1-1
          //     if( (presentDate.getDate() === november10Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
          //             fourthClassSocialLink = fourthClassSocialClasses[0];
                    
                      
          //     }


  //11th November
          // let november11Class4 = new Date(`November 11,2020 09:00:00`)
          
          // //morning
          // //social-1-2
          //       if( (presentDate.getDate() === november11Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
          //         fourthClassSocialLink = fourthClassSocialClasses[1];
                  

          // }
          // //afternoon
          // //social-1-3
          //     if( (presentDate.getDate() === november11Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
          //       fourthClassSocialLink = fourthClassSocialClasses[2];
                    
                      
          //     }

   //12th November
          let november12Class4 = new Date(`November 12,2020 09:00:00`)
          localStorage.setItem("fourthClassScheduleMorning",'Telugu-2nd Lesson- Part-1');
          localStorage.setItem("fourthClassScheduleAfternoon",'Telugu-2nd Lesson- Part-2');
          //morning
          //telugu-2-1
                if( (presentDate.getDate() === november12Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                  fourthClassTeluguLink = fourthClassTeluguClasses[2];
                  

          }
          //afternoon
          //telugu-2-2
              if( (presentDate.getDate() === november12Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                fourthClassTeluguLink = fourthClassTeluguClasses[3];
                    
                      
              }


    //13th November
          let november13Class4 = new Date(`November 13,2020 09:00:00`)
          //morning
          //english-2-1
                if( (presentDate.getDate() === november13Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                  fourthClassEnglishLink = fourthClassEnglishClasses[5];
                  

          }
          //afternoon
          //english-2-2
              if( (presentDate.getDate() === november13Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                fourthClassEnglishLink = fourthClassEnglishClasses[6];
                    
                      
              }
    //16th November
            let november16Class4 = new Date(`November 16,2020 09:00:00`)
            //morning
            //english-2-3
                  if( (presentDate.getDate() === november16Class4.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
                    fourthClassEnglishLink = fourthClassEnglishClasses[7];
                    

            }
            //afternoon
            //english-2-4
                if( (presentDate.getDate() === november16Class4.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
                  fourthClassEnglishLink = fourthClassEnglishClasses[8];
                      
                        
                }
  



//



//5th Class Schedule

let fifthClassEnglishLink;
let fifthClassMathsLink;
let fifthClassScienceLink;
let fifthClassSocialLink;

let fifthClassEnglishClasses = fifthClassLessons[2];

let fifthClassMathsClasses = fifthClassLessons[3];
let fifthClassScienceClasses = fifthClassLessons[4];
let fifthClassSocialClasses = fifthClassLessons[5];




  // //9th November
  //             let november9Class5 = new Date(`November 09,2020 09:00:00`)
  //             //noticeBoard
  //           //  if((presentDate.getDate() === november4Class5.getDate() )){
  //           //    localStorage.setItem("fifthClassScheduleMorning",'English-Lesson-1-Part-3');
  //           //    localStorage.setItem("fifthClassScheduleAfternoon",'English-Lesson-1-Part-4');
  //           //  }
                          


  //             if((presentDate.getDate() === november9Class5.getDate() )){
  //               localStorage.setItem("fifthClassScheduleMorning",'Science-1st Lesson- Part-2');
  //               localStorage.setItem("fifthClassScheduleAfternoon",'Social-1st Lesson- Part-1');
  //             }else{
  //               localStorage.setItem("fifthClassScheduleMorning",'schedule');
  //               localStorage.setItem("fifthClassScheduleAfternoon",'Wait for schedule');
  //             }

  //             //morning
  //             //science-1-2
  //                   if( (presentDate.getDate() === november9Class5.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
  //                     fifthClassScienceLink = fifthClassScienceClasses[1];
                      
  //                     console.log("science")
                      
                      

  //             }
  //             //afternoon
  //             //social-1-1
  //                 if( (presentDate.getDate() === november9Class5.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
  //                   fifthClassSocialLink = fifthClassSocialClasses[0];
                        
                          
  //                 }




    //10th November
    // let november10Class5 = new Date(`November 10,2020 09:00:00`)
    //noticeBoard
  //  if((presentDate.getDate() === november4Class5.getDate() )){
  //    localStorage.setItem("fifthClassScheduleMorning",'English-Lesson-1-Part-3');
  //    localStorage.setItem("fifthClassScheduleAfternoon",'English-Lesson-1-Part-4');
  //  }
                


           

            //morning
            //social-1-2
            //       if( (presentDate.getDate() === november10Class5.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
            //         fifthClassSocialLink = fifthClassSocialClasses[1];
                    
            //         console.log("science")
                    
                    

            // }
            // //afternoon
            // //social-1-3
            //     if( (presentDate.getDate() === november10Class5.getDate() ) && ( presentDate.getHours() >= commonAfternoonOnTime.getHours() ) && ( presentDate.getHours() <= commonAfternoonOffTime.getHours()) ){
            //       fifthClassSocialLink = fifthClassSocialClasses[2];
                      
                        
            //     }

   //11th november

   let november12Class5 = new Date(`November 12,2020 09:00:00`)


   if((presentDate.getDate() === november12Class5.getDate() )){
    localStorage.setItem("fifthClassScheduleMorning",'English-2nd Lesson- Part-1');
    localStorage.setItem("fifthClassScheduleAfternoon",'English-2nd Lesson- Part-2');
  }else{
    localStorage.setItem("fifthClassScheduleMorning",'Wait for schedule');
    localStorage.setItem("fifthClassScheduleAfternoon",'Wait for schedule');
  }




//






     //10th Class Schedule

     // Get a non-default Storage bucket
      // let tenthsStorage = firebase.app().storage("gs://school-project-292014.appspot.com/10thClass");





     let tenthClassEnglishLink;
     let tenthClassMathsLink;
     let tenthClassSocialLink;
     let tenthClassTeluguLink;
     let tenthPhysicsLink;

     let tenthClassEnglishClasses = fifthClassLessons[2];

     let tenthClassMathsClasses = fifthClassLessons[3];

     let tenthClassTeluguClasses = fifthClassLessons[0];

      //31th october 

         //afternoon
         let tenthClassTimeOn = new Date(`October 30,2020 13:00:00`);
         let tenthClassTimeOff = new Date(`October 30,2020 14:00:00`);

         if( presentDate.getHours() >= tenthClassTimeOn.getHours()  && presentDate.getHours() <= tenthClassTimeOff.getHours()){
              tenthClassEnglishLink = tenthClassEnglishClasses[3];
          }

      //1st Nov
         let nov1stClass = new Date(`November 01,2020 19:00:00`);
         //physics

         if( presentDate.getHours() >= tenthClassTimeOn.getHours()  && presentDate.getHours() <= tenthClassTimeOff.getHours()){
          tenthClassTeluguLink = tenthClassTeluguClasses[0];
          console.log(tenthClassTeluguLink);
      }


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



  if(activeClass == "10"){
    

    if(event.target.dataset.set == "Telugu"){
      // let teluguLinks = classEightLinks[0];
      // teluguLinks.forEach(link => {
      //   let div = document.createElement("div");
        
      //   div.innerHTML = link;
      //   videoSection.append(div);
      // })

      if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= tenthClassOffTime.getHours())  ){
              
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
        <source src = ${tenthClassTeluguLink} type="video/mp4" />
      </video>`;
        videoSection.append(div);
      
      }else{
      let div = document.createElement("div");
      div.innerText = "Lessons Not available" ;
      videoSection.append(div);
      }
    }
    if(event.target.dataset.set == "Hindi"){
    //  let hindiLinks = classEightLinks[1];
    //  hindiLinks.forEach(link => {
    //    let div = document.createElement("div");
    //    div.innerHTML = link;
    //    videoSection.append(div);
    //  })
    if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
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
      <source src = ${tenthClassSocialLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
    
    }else{
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
    }
   }
   if(event.target.dataset.set == "English"){
    //  let englishLinks = classEightLinks[2];
    //  englishLinks.forEach(link => {
    //    let div = document.createElement("div");
    //    div.innerHTML = link;
    //    videoSection.append(div);
    //  })
    if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
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
      <source src = ${tenthClassSocialLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
    
    }else{
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
    }
   }
   if(event.target.dataset.set == "Maths"){
    //  let mathsLinks = classEightLinks[3];
    //  mathsLinks.forEach(link => {
    //    let div = document.createElement("div");
    //    div.innerHTML = link;
    //    videoSection.append(div);
    //  })
    if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
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
      <source src = ${tenthClassSocialLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
    
    }else{
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
    }
   
   }
   if(event.target.dataset.set == "Physics"){
    //  let physicsLinks = classEightLinks[4];
    //  physicsLinks.forEach(link => {
    //    let div = document.createElement("div");
    //    div.innerHTML = link;
    //    videoSection.append(div);
    //  })
    if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
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
      <source src = ${tenthClassSocialLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
    
    }else{
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
    }
   }
   if(event.target.dataset.set == "Biology"){
    //  let biologyLinks = classEightLinks[5];
    //  biologyLinks.forEach(link => {
    //    let div = document.createElement("div");
    //    div.innerHTML = link;
    //    videoSection.append(div);
    //  })
    if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
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
      <source src = ${tenthClassSocialLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
    
    }else{
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
    }
   }
   if(event.target.dataset.set == "Social"){
    //  let socialLinks = classEightLinks[6];
    //  socialLinks.forEach(link => {
    //    let div = document.createElement("div");
    //    div.innerHTML = link;
    //    videoSection.append(div);
    //  })

    if( (presentTime.getHours() >= tenthClassOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours)  ){
              
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
      <source src = ${tenthClassSocialLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
    
    }else{
    let div = document.createElement("div");
    div.innerText = "Lessons Not available" ;
    videoSection.append(div);
    }
   }

}


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
    //   div.classList.add("video-div");
      
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
    // videoSection.append(div);
    // }else 
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
console.log(fourthClassEnglishLink);


      if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){                        
        let div = document.createElement("div");
      div.classList.add("video-div")
      // div.innerHTML = `<video
      // id="my-video"
      // class="video-js video-link"
      // controls
      // controlsList="nodownload"
      // preload="auto" 
      // poster="/assets/images/poster.gif"
      // data-setup="{}"
      // >
      // <source src = ${fifthClassEnglishLink} type="video/mp4" />
      // </video>`;
      // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/Vby2raa4GdQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      //afternoon
      div.innerHTML = `<iframe  src="https://www.youtube.com/embed/qQ-YXlYeHpM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      
      //13th mrning
      // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/QH-I4BoJn9k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      
      //afternoon
      // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/LU_4k8csC4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
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
  // if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                                  
          //     let div = document.createElement("div");
          //     div.classList.add("video-div")
          //   //   div.innerHTML = `<video
          //   //   id="my-video"
          //   //   class="video-js video-link"
          //   //   controls
          //   //   controlsList="nodownload"
          //   //   preload="auto" 
          //   //   poster="/assets/images/poster.gif"
          //   //   data-setup="{}"
          //   // >
          //   //   <source src = ${fifthClassMathsLink} type="video/mp4" />
          //   // </video>`;
          //   div.innerHTML = `<iframe  src="https://www.youtube.com/embed/C_-Zqs12rPo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;modestbranding=1;rel =0; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          //     videoSection.append(div);

          // }else{
          let div = document.createElement("div");
          div.innerText = "Lessons Not available" ;
          videoSection.append(div);
          // }
 }
 if(event.target.dataset.set == "Science"){
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
              <source src = ${fifthClassScienceLink} type="video/mp4" />
            </video>`;
            // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/97skc-qOAyA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;rel =0; modestbranding=1;rel = 0; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
              videoSection.append(div);

          }else{
          let div = document.createElement("div");
          div.innerText = "Lessons Not available" ;
          videoSection.append(div);
          }
 }
 if(event.target.dataset.set == "Social"){
   
              if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                                                        
                let div = document.createElement("div");
              //   div.classList.add("video-div")
              //   div.innerHTML = `<video
              //   id="my-video"
              //   class="video-js video-link"
              //   controls
              //   controlsList="nodownload"
              //   preload="auto" 
              //   poster="/assets/images/poster.gif"
              //   data-setup="{}"
              // >
              //   <source src = ${fifthClassSocialLink} type="video/mp4" />
              // </video>`;
              // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/BVGyHmWjahI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

                videoSection.append(div);

            }else{
            let div = document.createElement("div");
            div.innerText = "Lessons Not available" ;
            videoSection.append(div);
            }


    
 }

} 
// end of class 
         


// 4th class

if(activeClass == "4"){
    

              if(event.target.dataset.set == "Telugu"){
                // let teluguLinks = fourthClassLessons[0];
                // teluguLinks.forEach(link => {
                  let div = document.createElement("div");
                  div.classList.add("video-div")
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
                // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/RIjqi5B4_lk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
               div.innerHTML = `<iframe  src="https://www.youtube.com/embed/Y7_ImRkxpzQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                // let div = document.createElement("div");
                // div.innerText = "Lessons Not available" ;
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
                  // div.innerHTML = `<iframe src="https://www.youtube.com/embed/nlKd0JzdUls" frameborder="0" allow="accelerometer; autoplay; clipboard-write;rel =0; modestbranding=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                    videoSection.append(div);

                }else{
                let div = document.createElement("div");
                div.innerText = "Lessons Not available" ;
                videoSection.append(div);
                }
    }


        if(event.target.dataset.set == "Science"){
        
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
                <source src = ${fourthClassScienceLink} type="video/mp4" />
              </video>`;
              // div.innerHTML =  `<iframe  src="https://www.youtube.com/embed/h0KdIxFIuqQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                videoSection.append(div);

            }else{
            let div = document.createElement("div");
            div.innerText = "Lessons Not available" ;
            videoSection.append(div);
            }


        }
 if(event.target.dataset.set == "Social"){


                if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                                                
                  let div = document.createElement("div");
                  div.classList.add("video-div")
                //   div.innerHTML = `<video
                //   id="my-video"
                //   class="video-js video-link"
                //   controls
                //   controlsList="nodownload"
                //   preload="auto" 
                //   poster="/assets/images/poster.gif"
                //   data-setup="{}"
                // >
                //   <source src = ${fourthClassSocialLink} type="video/mp4" />
                // </video>`;
                // div.innerHTML =`<iframe src="https://www.youtube.com/embed/Eay1rYchxLU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                div.innerHTML = `<iframe src="https://www.youtube.com/embed/fX1N7coE-Ns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                ;
                  videoSection.append(div);

              }else{
              let div = document.createElement("div");
              div.innerText = "Lessons Not available" ;
              videoSection.append(div);
              }

 }

} 
// end of class 

    

// 3rd class

if(activeClass == "3"){
    

  if(event.target.dataset.set == "Telugu"){
              if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){
                                  
                let div = document.createElement("div");
                div.classList.add("video-div")
              //   div.innerHTML = `<video
              //   id="my-video"
              //   class="video-js video-link"
              //   controls
              //   controlsList="nodownload"
              //   preload="auto" 
              //   poster="/assets/images/poster.gif"
              //   data-setup="{}"
              // >
              //   <source src = ${thirdClassTeluguLink} type="video/mp4" />
              // </video>`;
              div.innerHTML = thirdClassTeluguLink;
                videoSection.append(div);
            
            }else{
            let div = document.createElement("div");
            div.innerText = "Lessons Not available" ;
            videoSection.append(div);
            }
  }
  if(event.target.dataset.set == "Hindi"){
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
      <source src = ${thirdClassHindiLink} type="video/mp4" />
    </video>`;
      videoSection.append(div);
  
  }else{
  let div = document.createElement("div");
  div.innerText = "Lessons Not available" ;
  videoSection.append(div);
  }
 }

 if(event.target.dataset.set == "English"){
      
  if( (presentTime.getHours() >= morningOnTime.getHours() && presentTime.getHours() <= morningOffTime.getHours()) || (presentTime.getHours() >= afternoonOnTime.getHours() && presentTime.getHours() <= afternoonOffTime.getHours() ) ){                        
              let div = document.createElement("div");
              div.classList.add("video-div")
            //   div.innerHTML = `<video
            //   id="my-video"
            //   class="video-js video-link"
            //   controls
            //   controlsList="nodownload"
            //   preload="auto" 
            //   poster="/assets/images/poster.gif"
            //   data-setup="{}"
            // >
            //   <source src = ${thirdClassEnglishLink} type="video/mp4" />
            // </video>`;
            // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/7Z62Js9jCAQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
            if( (presentTime.getHours() >= commonMorningOnTime.getHours() && presentTime.getHours() <= commonMorningOffTime.getHours()) || (presentTime.getHours() >= commonAfternoonOnTime.getHours() && presentTime.getHours() <= commonAfternoonOffTime.getHours() ) ){
                                  
              let div = document.createElement("div");
              div.classList.add("video-div")
            //   div.innerHTML = `<video
            //   id="my-video"
            //   class="video-js video-link"
            //   controls
            //   controlsList="nodownload"
            //   preload="auto" 
            //   poster="/assets/images/poster.gif"
            //   data-setup="{}"
            // >
            //   <source src = ${thirdClassMathsLink} type="video/mp4" />
            // </video>`;
            
            // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/o3lbLiaxk78" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            // div.innerHTML = `<iframe src="https://www.youtube.com/embed/n7ShgmxqU1k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            ;
              videoSection.append(div);

          }else{
          let div = document.createElement("div");
          div.innerText = "Lessons Not available" ;
          videoSection.append(div);
          }
 }

 if(event.target.dataset.set == "Science"){
            if( (presentTime.getHours() >= commonMorningOnTime.getHours() && presentTime.getHours() <= commonMorningOffTime.getHours()) || (presentTime.getHours() >= commonAfternoonOnTime.getHours() && presentTime.getHours() <= commonAfternoonOffTime.getHours() ) ){
                                  
              let div = document.createElement("div");
              div.classList.add("video-div")
            //   div.innerHTML = `<video
            //   id="my-video"
            //   class="video-js video-link"
            //   controls
            //   controlsList="nodownload"
            //   preload="auto" 
            //   poster="/assets/images/poster.gif"
            //   data-setup="{}"
            // >
            //   <source src = ${thirdClassScienceLink} type="video/mp4" />
            // </video>`;
            // div.innerHTML = `<iframe  src="https://www.youtube.com/embed/MHT1r-mzqc4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            div.innerHTML = `<iframe  src="https://www.youtube.com/embed/rpwbuu1CeVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
            videoSection.append(div);

          }else{
          let div = document.createElement("div");
          div.innerText = "Lessons Not available" ;
          videoSection.append(div);
          }
 }
  if(event.target.dataset.set == "Social"){
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
                <source src = ${thirdClassSocialLink} type="video/mp4" />
              </video>`;
                videoSection.append(div);

            }else{
            let div = document.createElement("div");
            div.innerText = "Lessons Not available" ;
            videoSection.append(div);
            }
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
