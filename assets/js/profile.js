


// create subjet list
let div = document.createElement("div");
div.classList.add("classes");
let activeStudentName = document.querySelector(".student-name");
let nameOfUser = localStorage.getItem("username");
let studentClass = localStorage.getItem("class")
let classChange = document.querySelector(".student-class");
activeStudentName.innerText = nameOfUser;
classChange.innerText = studentClass;

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


  

