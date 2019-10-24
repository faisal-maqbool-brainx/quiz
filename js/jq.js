$(document).ready(function() {

  var myObj, i = 0, len, count=0,questions=3, qNo=[10,10,10] ,qNoIndex=0 ; options[[],[],[]]
  var  correctAns=['f','f','f',], givwnAns=['f','f','f'], score=0;
  $("#start").click(function(){

    $("#start").css("display", "none");
    $.get("quizdata.txt", function(data, status){
      
      myObj = JSON.parse(data);
      len=myObj.questions.length;
      i=Math.floor(Math.random() * 10);
      qNo[qNoIndex]=i;
      displayQuestion(i);
      $("#next").removeClass("invisible");
      $("#previous").removeClass("invisible");
      $("#next").addClass("visible");
      $("#previous").addClass("visible");
    });



  });

  $("#next").click(function(){
    var value = $('input[type=radio]:checked').val();
    givwnAns[qNoIndex]=value;
    if(qNo[qNoIndex+1]==10)
    {
      if(qNoIndex<questions)
      {
        i=Math.floor(Math.random() * 10);
        while(qNo.includes(i)){
          i=Math.floor(Math.random() * 10);
        }
        qNoIndex++;
        qNo[qNoIndex]=i;
        displayQuestion(i);
        if(qNoIndex==2)
        {
          $("#next").css("display", "none");
          $("#submit").removeClass("invisible");
          $("#submit").addClass("visible");
          $("#submit").css("display", "block");
        }
        
      }
    }
    else if (qNoIndex<questions){
      qNoIndex++;
      i=qNo[qNoIndex];
      displayOldQuestion(i);
      if(qNoIndex==2)
        {
          $("#next").css("display", "none");
          $("#submit").css("display", "block");
        }

    }

  });

  $("#previous").click(function(){
    if(qNoIndex>0)
    {
      qNoIndex--;
      i=qNo[qNoIndex];
      displayOldQuestion(i);
      $("#submit").css("display", "none");
      $("#next").css("display", "block");
    }
  });




  function displayQuestion(x){
    $("#showCD").text(myObj.questions[x].statement);
      var list="";
      var optionName=['a','b','c'];
      var opts=[6,6,6] ,optIndex=0, opt;
      var correctInc=false; 

      for(var j=0;j<2;j++){
        opt=Math.floor(Math.random() * 5);
        while(opts.includes(opt)){
          opt=Math.floor(Math.random() * 5);
        }
        opts[optIndex]=opt;
        optIndex++;
        list+= "<input type='radio' name='answer' value='" +optionName[j]+"'>" +myObj.questions[x].options[opt]+"<br>";
        if(opt== parseInt(myObj.questions[x].correctAnswer))
        {
          correctInc=true;
          correctAns[x]=optionName[j];
        }
      }
      if(!correctInc)
      {
        opt=parseInt(myObj.questions[x].correctAnswer);
        opts[optIndex]=opt;
        optIndex++;
        list+= "<input type='radio' name='answer' value='" +optionName[j]+"'>" +myObj.questions[x].options[opt]+"<br>";
        correctInc=true;
        correctAns[x]=optionName[2];

      }
      else{
        opt=Math.floor(Math.random() * 5);
        while(opts.includes(opt)){
          opt=Math.floor(Math.random() * 5);
        }
        opts[optIndex]=opt;
        optIndex++;
        list+= "<input type='radio' name='answer' value='" +optionName[j]+"'>" +myObj.questions[x].options[opt]+"<br>";

      }
      options[qNoIndex]=opts;

      $("#options").html(list);
      
      

  }

  function displayOldQuestion(x){
    $("#showCD").text(myObj.questions[x].statement);
    var list="";
    var optionName=['a','b','c'];

    for(var j=0;j<3;j++){
      
      list+= "<input type='radio' name='answer' value='" +optionName[j]+"'>" +myObj.questions[x].options[options[qNoIndex][j]]+"<br>";

    }
    $("#options").html(list);

  }

  $("#submit").click(function(){
    for(var k=0;k<3;k++)
    {
      if(givwnAns[k]==correctAns[k])
      {
        score++;
      }
    }
    alert(score);

  });






});