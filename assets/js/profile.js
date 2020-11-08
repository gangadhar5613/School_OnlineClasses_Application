


// create subjet list
let div = document.createElement("div");
div.classList.add("classes");
let activeStudentName = document.querySelector(".student-name");
let nameOfUser = localStorage.getItem("username");
let studentClass = localStorage.getItem("class")
let classChange = document.querySelector(".student-class");
activeStudentName.innerText = nameOfUser;
classChange.innerText = studentClass;

//active schedule
// let activeSessionMor = localStorage.getItem("fifthActiveMorning");
// let activeSessionAtn = localStorage.getItem('fifthActiveAfternoon');

let morningSession = document.querySelector(".morningSession");
let afternoonSession = document.querySelector(".afternoonSession");
//third class local storage

let thirdActiveSessionMorning = localStorage.getItem("thirdClassScheduleMorning");
let thirdActiveSessionAfternoon = localStorage.getItem('thirdClassScheduleAfternoon');



if(studentClass == 3){
    morningSession.innerText = thirdActiveSessionMorning;
    afternoonSession.innerText = thirdActiveSessionAfternoon;

}

//


//fourth class local storage

let fourthActiveSessionMorning = localStorage.getItem("fourthClassScheduleMorning");
let fourthActiveSessionAfternoon = localStorage.getItem('fourthClassScheduleAfternoon');



if(studentClass == 4){
    morningSession.innerText = fourthActiveSessionMorning;
    afternoonSession.innerText = fourthActiveSessionAfternoon;

}

//


//fifth class local storage

let fifthActiveSessionMorning = localStorage.getItem("fifthClassScheduleMorning");
let fifthActiveSessionAfternoon = localStorage.getItem('fifthClassScheduleAfternoon');



if(studentClass == 5){
    morningSession.innerText = fifthActiveSessionMorning;
    afternoonSession.innerText = fifthActiveSessionAfternoon;

}

//


// changeSubject.innerText = activeSessionMor;

// changeSession.innerText = activeSessionAtn;

//









//

function createClasses(){
   
    studentProfile.style.display = "none";
    subjects.forEach(subject => {
        let anchor = document.createElement("a");
        anchor.classList.add(`subject`,`${subject}`)
        anchor.setAttribute("data-set",`${subject}`)
        anchor.innerText = subject;
        anchor.href ="../pages/subjects.html";
        div.append(anchor);
        
        // subjectBtn.innerText = subject;

        
    });
    
    contentBox.append(div);
   
  
    
}

function handleClick(event){
    if(event.target.value === "Classes"){
        window.location.href ="../pages/subjects.html";
    }else if (event.target.value = "Profile"){
    //    div.style.display = "none";
        div.innerHTML ="";
       studentProfile.style.display = "block";

    }else{
        studentProfile.style.display = "block";
    }
     
}

  pageSelection.addEventListener("input",handleClick);


  

