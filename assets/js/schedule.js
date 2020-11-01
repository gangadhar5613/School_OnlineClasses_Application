//october schedule
 
let presentDate = new Date();

let commonMorningOnTime = new Date(`November 02,2020 09:00:00`);
let commonMorningOffTime = new Date(`November 02,2020 10:00:00`);

let commonAfternoonOnTime = new Date(`November 02,2020 14:00:00`);
let commonAfternoonOffTime = new Date(`November 02,2020 15:00:00`);

// let commonAfternoonOnTime = new Date(`November 01,2020 21:00:00`);
// let commonAfternoonOffTime = new Date(`November 01,2020 22:00:00`);
 

//3rd class schedule
 let thirdClassEnglishLink;
 let thirdClassMathsLink;

 let thirdClassEnglishClasses = thirdClassLessonVidoes[2];

 let thirdClassMathsClasses = thirdClassLessonVidoes[3];


     //30th october afternoon

     //afternoon
     let october30AfternoonOnTime = new Date(`October 30,2020 14:00:00`);
     let october30AfternoonOffTime = new Date(`October 30,2020 15:00:00`);
    //  thirdClassEnglishLink = thirdClassEnglishClasses[3];

  
    if( presentDate.getHours() >= october30AfternoonOnTime.getHours()  && presentDate.getHours() <= october30AfternoonOffTime.getHours()){
      thirdClassEnglishLink = thirdClassEnglishClasses[3];
        
        
    }
   
  
   


   //31st october

       //morning
       let october31MorningOnTime = new Date(`November 01,2020 9:00:00`);
       let october31MorningOffTime = new Date(`November 01,2020 10:00:00`);


       if( presentDate.getDate() == october31MorningOnTime.getDate() && presentDate.getHours() >= october31MorningOnTime.getHours()  && presentDate.getHours() <= october31MorningOffTime.getHours()){
          thirdClassEnglishLink = thirdClassEnglishClasses[4];
          console.log(thirdClassEnglishLink);
      }

       //afternoon
       let october31AfternoonOnTime = new Date(`November 01,2020 14:00:00`);
       let october31AfternoonOffTime = new Date(`November 01,2020 15:00:00`);

       if( presentDate.getHours() >= october31AfternoonOnTime.getHours()  && presentDate.getHours() <= october31AfternoonOffTime.getHours()){
          thirdClassMathsLink = thirdClassMathsClasses[0];
      }

       
      //2nd november
       let november2Timings = new Date(`November 02,2020 09:00:00 `);
    //    let november2Timings = new Date(`November 01,2020 09:00:00 `)

      
    if( (presentDate.getDate() === november2Timings.getDate() ) && ( presentDate.getHours() >= commonMorningOnTime.getHours() ) && ( presentDate.getHours() <= commonMorningOffTime.getHours()) ){
        thirdClassMathsLink = thirdClassMathsClasses[1];
        console.log("Time started");
        console.log(thirdClassEnglishLink)
        
    }



//







//4th Class Schedule

 let fourthClassEnglishLink;
 let fourthClassMathsLink;

 let fourthClassEnglishClasses = fourthClassLessons[2];

 let fourthClassMathsClasses = fourthClassLessons[3];

  //30th october afternoon

     //afternoon
     // let october30AfternoonOnTime = new Date(`October 30,2020 09:00:00`);
     // let october30AfternoonOffTime = new Date(`October 30,2020 15:00:00`);

     if(presentDate.getDate() == october30AfternoonOnTime.getDate() && presentDate.getHours() >= october30AfternoonOnTime.getHours()  && presentDate.getHours() <= october30AfternoonOffTime.getHours()){
          fourthClassEnglishLink = fourthClassEnglishClasses[3];
      }


   //31st october

     //morning
     //   let october31MorningOnTime = new Date(`October 31,2020 09:00:00`);
     //   let october31MorningOffTime = new Date(`October 31,2020 10:00:00`);
     if( presentDate.getDate() == october31MorningOnTime.getDate() && presentDate.getHours() >= october31MorningOnTime.getHours()  && presentDate.getHours() <= october31MorningOffTime.getHours()){
      fourthClassEnglishLink = fourthClassEnglishClasses[4];
      console.log(fourthClassEnglishLink);
  }

       //afternoon
     //   let october31AfternoonOnTime = new Date(`October 31,2020 14:00:00`);
     //   let october31AfternoonOffTime = new Date(`October 31,2020 15:00:00`);

     if( presentDate.getHours() >= october31AfternoonOnTime.getHours()  && presentDate.getHours() <= october31AfternoonOffTime.getHours()){
          fourthClassMathsLink = fourthClassMathsClasses[0];
     }



//



//5th Class Schedule

let fifthClassEnglishLink;
let fifthClassMathsLink;

let fifthClassEnglishClasses = fifthClassLessons[2];

let fifthClassMathsClasses = fifthClassLessons[3];

 //30th october afternoon

    //afternoon
//     let october30AfternoonOnTime = new Date(`October 30,2020 09:00:00`);
//     let october30AfternoonOffTime = new Date(`October 30,2020 15:00:00`);

    if(presentDate.getDate() == october30AfternoonOnTime.getDate() && presentDate.getHours() >= october30AfternoonOnTime.getHours()  && presentDate.getHours() <= october30AfternoonOffTime.getHours()){
         fifthClassEnglishLink = fifthClassEnglishClasses[3];
     }


  //31st october

    //morning
     //  let october31MorningOnTime = new Date(`October 31,2020 09:00:00`);
     //  let october31MorningOffTime = new Date(`October 31,2020 10:00:00`);

     if(  presentDate.getHours() >= october31MorningOnTime.getHours()  && presentDate.getHours() <= october31MorningOffTime.getHours()){
      fifthClassEnglishLink = fifthClassEnglishClasses[4];
      console.log(fifthClassEnglishLink);
  }

      //afternoon
     //  let october31AfternoonOnTime = new Date(`October 31,2020 14:00:00`);
     //  let october31AfternoonOffTime = new Date(`October 31,2020 15:00:00`);

    if(presentDate.getHours() >= october31MorningOffTime.getHours  && presentDate.getHours <= october31MorningOffTime()){
         fifthClassMathsLink = fifthClassMathsClasses[0];
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

      //31th october 

         //afternoon
         let tenthClassTimeOn = new Date(`October 30,2020 19:00:00`);
         let tenthClassTimeOff = new Date(`October 30,2020 20:00:00`);

         if( presentDate.getHours() >= tenthClassTimeOn.getHours()  && presentDate.getHours() <= tenthClassTimeOff.getHours()){
              tenthClassEnglishLink = tenthClassEnglishClasses[3];
          }

      //1st Nov
         let nov1stClass = new Date(`November 01,2020 19:00:00`);
         //physics

         if(presentDate.getDate() == nov1stClass.getDate() && presentDate.getHours() >= tenthClassTimeOn.getHours()  && presentDate.getHours() <= tenthClassTimeOff.getHours()){
          tenthClassEnglishLink;
          
      }



    //




