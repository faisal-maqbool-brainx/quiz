var i = 0, len, totalQues=5, count=0;
var myObj , flagArray=[];
getQuestion(i);


function getQuestion(i) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        len=myObj.questions.length;
        // for(var j=0;j<len;j++)
        // {
        //     flagArray.push(false);

        // }
    }
  };
  xmlhttp.open("GET", "quizdata.txt", true);
  xmlhttp.send();

  next();
}

function displayQuestion(i){
    document.getElementById("showCD").innerHTML =myObj.questions[i].statement;
    var list="";
    var optionName=['a','b','c','d','e'];
    for(var j=0;j<5;j++){
        list+= "<input type='radio' name='answer' value='" +optionName[j]+"'>" +myObj.questions[i].options[j]+"<br>";
    }

    document.getElementById("options").innerHTML =list;
}

function next() {

    i = Math.floor(Math.random()*len)
    while(flagArray[i] && count<5){
      i = Math.floor(Math.random()*len);
      document.getElementById("showCD").innerHTML =myObj.questions[i].statement;
      
    }
    // displayQuestion(i);
    // flagArray[i]=true;
    // count++;
  }
  
  function previous() {
    if (i > 0) {
      i--;
      displayQuestion(i);
    }
  }