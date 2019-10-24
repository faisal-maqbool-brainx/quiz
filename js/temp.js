var i = 0, len;
displayQuestion(i);

function displayQuestion(i) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        len=myObj.questions.length;
        document.getElementById("showCD").innerHTML =myObj.questions[i].statement;
        var list="";
        var optionName=['a','b','c','d','e'];
        for(var j=0;j<5;j++){
            list+= "<input type='radio' name='answer' value='" +optionName[j]+"'>" +myObj.questions[i].options[j]+"<br>";
        }

        document.getElementById("options").innerHTML =list;
    }
  };
  xmlhttp.open("GET", "quizdata.txt", true);
  xmlhttp.send();
}

function next() {
    if (i < len-1) {
      i++;
      displayQuestion(i);
    }
  }
  
  function previous() {
    if (i > 0) {
      i--;
      displayQuestion(i);
    }
  }






















  $("#next").click(function(){
    if(qNoIndex<questions)
    {
      i=Math.floor(Math.random() * 10);
      while(qNo.includes(i)){
        i=Math.floor(Math.random() * 10);
      }
      qNo[qNoIndex]=i;
      qNoIndex++;

      displayQuestion(i);
    }
  });
  questions=3, qNo=[10,10,10] ,qNoIndex=0;