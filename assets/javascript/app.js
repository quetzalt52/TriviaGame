$(document).ready(function() {
var img;
	 $('#start').click(loadProgram);
	 $('#stop').click(endGame);	
	}

		$("#start").on("click", function(event) {
       	 loadProgram();
       	 checkAnswers();
		 countDown();

      });

      $("#stop").on("click", function(event) {
        endGame();
      });


	function loadProgram(){
		// need to insert image /assets/images/start.gif  either the image or the will init the game once clicked
		//<img src=assets/images/start.gif width='200px'/>
		img =  ('assets/images/start.gif');
		checkAnswers();  
		//$(#start).click(questionForm);
		
	}

	function endGame(){
		var total =5;
		var score =0;
		var counter = 0;
		var timeleft = 60;
		clearInterval(setTimer);
	}

	

	function checkAnswers(){
		var total =5;
		var score =0;
			// get the input from the user 
			//https://www.w3schools.com/jsref/coll_doc_forms.asp; https://www.w3schools.com/js/js_validation.asp
			var q1 = document.forms["questionForm"]["question1"].value; 
			var q2 = document.forms["questionForm"]["question2"].value; 
			var q3 = document.forms["questionForm"]["question3"].value; 
			var q4 = document.forms["questionForm"]["question4"].value; 
			var q5 = document.forms["questionForm"]["question5"].value; 

			// validation; https://www.w3schools.com/jsref/jsref_eval.asp
			for(var i = 1; i <= total; i++){
				if(eval('q' + i) == null || eval('q' + i) ==''){
					alert("you miss question"  + i);
					return false;
				}// end if 
			}// end for loop

			var answers = ["Folgers","2001","Lies","Rose", "Bruno"];

			for(var i = 1; i <= total; i++){
				if(eval('q' + i) == answers[i -1]){
					score++;
				}
			}			

			var results = document.getElementById('#results');
			results.html = '<h3> You scored <span>' + score+ '</span> out of :  <span>' + total + 'total';
			console.log("You scored", score, "out of the total",total);

			return false;
	}// end of function 

	// should be a new window  ;( not working yet
	
	var counter = 0;
	var timeleft = 60;
	var setTimer;

	function countDown() {
		var timer = document.getElementById("#timer");
		setTimer= setInterval(timeIt, 10000);

	  	function timeIt() {
			// timeIt body...
			counter++
			timer.html(counter);
		}
		
		timer.html(timeleft - counter);
	}
	

}; //end ready function 