function readTextFile(file, callback){
     let rawFile = new XMLHttpRequest();
     rawFile.overrideMimeType("application/json");
     rawFile.open("GET", file, true);
     rawFile.onreadystatechange = function(){
          if(rawFile.readyState == 4 && rawFile.status == 200){
               callback(rawFile.responseText);
          }
     }
     rawFile.send(null);
}
let data;
readTextFile("data.JSON", function(text){
     data = JSON.parse(text);
     console.log(data);
     for(let i = 0; i<data.length; i++){
          console.log(data[i]);
          let stu = new Student(data[i].firstName, data[i].lastName, data[i].studentID, data[i].email, data[i].phone, data[i].classID, data[i].questionDescription);
          addToQueue(stu);
     }
})


function Student(firstName, lastName, studentID, email, phone, classID, questionDescription){
     this.firstName = firstName;
     this.lastName = lastName;
     this.studentID = studentID;
     this.email = email;
     this.phone = phone;
     this.classID = classID;
     this.questionDescription = questionDescription;

}
let s1 = new Student("Nia", "Ignacio", "1111111", "nignacio@usc.edu", "9515264309", "CSCI201", "what's the project about?");

$("#add-to-queue").on("click", function(){
     addToQueue(s1);
});

function addToQueue(stu){
     $("#queue-list").append(`
          <div class="student">
               <h5 class="student-name"> ${stu.lastName}, ${stu.firstName} </h5>
               <span class="close">&times;</span>
               <i class="student-class"> class: ${stu.classID} <br /> topic: ${stu.questionDescription} </i>
          </div>
     `);
}

$("#btn-submit").on("click", function(){
     alert("click");
     let missingFields = [];
     let firstName = $("#fname-input").val();
     let lastName = $("#lname-input").val();
     let email = $("#email-input").val();
     let studentID = $("#student-id-input").val();
     let phone = $("#phone-input").val();
     let classID = $("#class-id").val();
     let question = $("#question-input").val();
     console.log(firstName + ", " + email);
     if( firstName.length < 1){
          missingFields.push("First Name");
     }
     if( lastName.length < 1){
          missingFields.push("Last Name");
     }
     if(email.length < 1){
          missingFields.push("Email");
     }
     if(studentID.length < 1){
          missingFields.push("Student ID");
     }
     if(phone.length < 1){
          missingFields.push("Phone");
     }
     if(classID < 1){
          missingFields.push("Class");
     }
     if(question < 1){
          missingFields.push("Question");
     }
     if(missingFields.length > 0){
          let message = "Missing Fields: \n";
          for(let i = 0; i<missingFields.length; i++){
               message += "     " + missingFields[i] + "\n";
          }
          alert(message);
     } else {
          $("#myModal").css("display", "none");
          let stu = new Student(firstName, lastName, studentID, email, phone, classID, question);
          data.push(stu);
          console.log(data);
          addToQueue(stu);
     }
});



$("#customSwitch1").on("click", function(){
     let state = ( $("#customSwitch1").prop("checked") );
     console.log(state);
     if(state){
          $(".close").css("display", "block");
          $(".close").on("click", function(){
               $(this).parent().css("display", "none");
          })
     } else {
          $(".close").css("display", "none");
     }
})
