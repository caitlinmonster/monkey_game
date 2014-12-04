

function create_card_listener($card, i) {
	$('#game').append($card);
	$card.find('input').on('click', function(){
		var primateNumber = primates[i];
		var buttonValue = $(this).val();
		var thisPrimate = primates[i];
		//var monkeyStatus = (primates[i].monkey);
	
		

		var $popUpCorrect = $(
			'<div class="correct '+
			thisPrimate.class+
			'">'+
			'<h2>Correct!</h2>'+
			'<br><button class="learn"><br>Learn about '+
			thisPrimate.name+
			's</button>'+
			'</div>'
			)

		var $popUpWrong = $(
			'<div class="wrong '+
			thisPrimate.class+
			'">'+
			'<h2>Wrong!</h2><br><p><br>Learn about '+
			thisPrimate.name+
			's</p>'+
			'</div>'
			)


		

		console.log(thisPrimate);
		console.log(thisPrimate.monkey);
		if (buttonValue === "Monkey" )
		{
			console.log('Monkey');
			//$($card).append($popUpCorrect);
			if (thisPrimate.monkey) 
			{
				console.log('Correct, that\'s a monkey');
				$($card).append($popUpCorrect);	
			} else {
				console.log('Wrong, that\'s is not a monkey!');
				$($card).append($popUpWrong);
			}
		
		} 
		else 
		{
			console.log('Not a Monkey');
			
			if (thisPrimate.monkey) 
			{
				console.log('Wrong, that\'s is a monkey!');
				$($card).append($popUpWrong);
			} else {
				console.log('Correct, that\'s NOT a monkey');
				$($card).append($popUpCorrect);				
			}
			//$($card).append($popUpWrong);
			//$('body').append($popUpInfo);
			//$('body').append($shadow);
		} 
		var button = $card.find('.learn');
		learn_more(button, thisPrimate)
		

	})

}

	
	


function learn_more(button, thisPrimate) {

	button.on('click', function() {
		
		var $shadow = $(
			'<div class="tint">'+
			'</div>'
			)

		var $popUpInfo = $(
			'<div class="info">'+
			'<div class="thumbnail '+
			thisPrimate.class+
			'">'+
			'</div>'+
			'<p>'+
			'<h2>'+
			thisPrimate.type+
			'</h2>'+
			'<ul>'+
			'<li><strong>Common Name:</strong> '+
			thisPrimate.name+
			'</li>'+
			'<li><strong>Primate Type:</strong> '+
			thisPrimate.type+ 
			'</li>'+
			'<li><strong>Species:</strong> '+
			thisPrimate.species+
			'</li>'+
			'<li><strong>Common Name:</strong> '+
			thisPrimate.status+
			'</li>'+
			'<li><strong>Diet:</strong> '+
			thisPrimate.diet+	
			'</li>'+
			'<li><strong>Habitat:</strong> '+
			thisPrimate.habitat+
			'</li>'+
			'<li><strong>Location:</strong> '+
			thisPrimate.location+	
			'</li>'+
			'<li><strong>Branch:</strong> '+
			thisPrimate.branch+
			'</li>'+
			'</ul>'+
			'</p>'+
			'</div>'
		)
		
		$('body').append($popUpInfo);
		console.log("WOOT");
		$('body').append($shadow);

	})
}

	$(document).ready(function() {
		
		//array shuffle
		function shuffle(primates) {
		  	var currentIndex = primates.length, temporaryValue, randomIndex ;

		  	// While there remain elements to shuffle...
		  	while (0 !== currentIndex) {

			    // Pick a remaining element...
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;

			    // And swap it with the current element.
			    temporaryValue = primates[currentIndex];
			    primates[currentIndex] = primates[randomIndex];
			    primates[randomIndex] = temporaryValue;
		 	}

  			return primates;
		}

		
			

		$(function() {

			//run array shuffle
			shuffle(primates);
			console.log(primates);

			//create loop to pull from array for cards
		    for (var i = 0; i < primates.length; i++) {
			
			    //create a card from array for game
			    var $card = $(					
			    		"<div class='flip-container "+
						primates[i].type+
						"' "+ 
						"ontouchstart='this.classList.toggle"+
						"('hover');'>"+
						"<div class='flipper'>"+
						"<div class='front'>"+
						"<div class='card_front "+
						primates[i].class+
						"'></div>"+
						"</div>"+
						"<div class='back'>"+
						"<div class='card_back'>"+
						"<div class='"+
						primates[i].class+ 
						" reverse'>"+
						"<div class='opacity'></div>"+
						"</div>"+ 
						"<input type='button' class='button monkey' value='Monkey' data-monkey="+
						(primates[i].type)+
						">"+
						"<input type='button' class='button not_a_monkey' value='Not a Monkey' data-monkey="+
						(primates[i].type)+
						">"+
						"</div>"+
						"</div>"+
						"</div>"+
						"</div>")

			    //add card to page
			    create_card_listener($card, i)
			    
			} 

		});

	});    




