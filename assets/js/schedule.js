//october schedule
 
 let presentDate = new Date();

 

     //3rd class schedule
      let thirdClassEnglishLink;

      let thirdClassEnglishClasses = thirdClassLessonVidoes[2];


          //30th october afternoon

          //afternoon
          let october30AfternoonOnTime = new Date(`October 31,2020 09:00:00`);
          let october30AfternoonOffTime = new Date(`October 31,2020 15:00:00`);

          if(presentDate.getDate() == october30AfternoonOnTime.getDate() && presentDate.getHours() >= october30AfternoonOffTime.getHours  && presentDate.getHours <= october31MorningOffTime()){
               thirdClassEnglishLink = thirdClassEnglishClasses[3];
           }


        //31st october

            //morning
            let october31MorningOnTime = new Date(`October 31,2020 09:00:00`);
            let october31MorningOffTime = new Date(`October 31,2020 10:00:00`);


            if(presentDate.getDate() == october31MorningOnTime.getDate() && presentDate.getHours() >= october31MorningOnTime.getHours  && presentDate.getHours <= october31MorningOffTime()){
               thirdClassEnglishLink = thirdClassEnglishClasses[4];
           }

            //afternoon
            let october31AfternoonOnTime = new Date(`October 31,2020 14:00:00`);
            let october31AfternoonOffTime = new Date(`October 31,2020 15:00:00`);



            

  

     //













//