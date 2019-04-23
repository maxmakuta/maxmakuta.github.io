var btn = document.querySelector(".add");
var addBtn = document.querySelector("#newbtn");
var addDiv = document.querySelector("#newnote")
var input = document.querySelector(".notetext");
var list = document.querySelector(".list");
var inputDiv = document.querySelector("#inputdiv");
var sortSelect = document.querySelector("#sort");
var filterField = document.querySelector("#filter");

var notesData = [];

function addNote(){
  var userText = {
    text: "Enter message text"

  };
  if(userText){
    notesData.push(userText);
    console.log(notesData);
    
    createAllNotes(notesData);
  } 
};

function createAllNotes(arr){
  list.innerHTML = "";
  for(var i = 0; i < arr.length; i++){
    createOneLi(arr[i].text, i);
  }
}

function createOneLi(text, index, arr){ 
  var note = document.createElement("li");
  note.className = "note list-group-item";

  var prioryti = document.createElement("select");
  prioryti.className = "custom-select-sm";
  note.appendChild(prioryti);

  var option = document.createElement("option");
  option.className = "custom-select-sm";
  prioryti.appendChild(option);
  option.textContent = ("Priority");
  option.value = ("Priority");

  var optionOne = document.createElement("option");
  optionOne.className = "custom-select-sm";
  prioryti.appendChild(optionOne);
  optionOne.textContent = ("Hight Priority");
  optionOne.value = ("Hight Priority");

  var optionTwo = document.createElement("option");
  optionTwo.className = "custom-select-sm";
  prioryti.appendChild(optionTwo);
  optionTwo.textContent = ("Medium Priority");
  optionTwo.value = ("Medium Priority");

  var optionThree = document.createElement("option");
  optionThree.className = "custom-select-sm";
  prioryti.appendChild(optionThree);
  optionThree.textContent = ("Low Priority");
  optionThree.value = ("Low Priority");

  var innerDiv = document.createElement("li");
  innerDiv.className = "note list-group-item";
  note.appendChild(innerDiv);
  innerDiv.textContent = text;
  var textArea = document.createElement("textarea");
  textArea.className = "form-control";
  note.appendChild(textArea);

  innerDiv.ondblclick = function(){
    innerDiv.style.display = "none";
    textArea.style.display = "block";
    textArea.value = innerDiv.textContent;
  }

  textArea.ondblclick = function(){
    innerDiv.style.display = "block";
    textArea.style.display = "none";
    innerDiv.textContent = textArea.value;
    notesData[index].text = textArea.value;
    console.log(notesData);
  }



  
  var delSpan = document.createElement("span");
  delSpan.setAttribute("class","glyphicon glyphicon-remove pull-right");
  innerDiv.appendChild(delSpan);
  //// Delete Note Function
  delSpan.onclick = function(){
    notesData = notesData.filter(function(item){
      return item !== text; 
    });
    console.log(notesData);
    createAllNotes(notesData);
  }

    list.appendChild(note);


    sortSelect.onchange = function(e){
  console.log(e.target.value);
  var dataCopy = notesData.concat([]);
  if(e.target.value == "up"){
    dataCopy.sort(function(a,b){
      if(a > b){
        return 1
      }
      else {
        return -1
      }
    });
    createAllNotes(dataCopy);
  }
  else if(e.target.value == "down"){
    dataCopy.sort(function(a,b){
      if(a > b){
        return -1
      }
      else {
        return 1
      }
    });
    createAllNotes(dataCopy);
  }
  else {
    createAllNotes(notesData);
  }
};

};

btn.onclick = addNote;
