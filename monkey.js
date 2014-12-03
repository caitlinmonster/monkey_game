

function create_card_listener($card, i) {
		$('#game').append($card);
		$card.find('input').on('click', function(){
			var primateNumber = (primates[i]);
			var buttonValue = ($(this).data("monkey"));
		

			//var monkeyValue = buttonValue.get("monkey");
			var monkeyStatus = (primates[i].monkey);
			
			//logs the value of the button
			console.log(buttonValue);
			//logs the value of the monkey as true or false
			console.log(monkeyStatus);
			
			var $popUpMonkey = $(
				'<div class="correct">'+
				'<p>That is a Monkey!</p>'+
				'</div>'
				)
			var $popUpProsimian = $(
				'<div class="wrong">'+
				'<p>That is a Prosimian!</p>'+
				'</div>'
				)
			var $popUpApe = $(
				'<div class="wrong">'+
				'<p>That is an Ape!</p>'+
				'</div>'
				)

			var $popUpCorrect = $(
				'<div class="correct">'+
				'<p>Correct!</p>'+
				'</div>'
				)

			if (buttonValue === "Monkey")
			{
				console.log('That is a Monkey!');
				$($card).append($popUpCorrect);
			} 
			else if (buttonValue === "Prosimian")
			{
				console.log('That is NOT a Monkey! Have you never seen a Prosimian before?');
				$($card).append($popUpProsimian);
			} 
			else if (buttonValue === "Ape")
			{
				console.log('That is NOT a Monkey! Have you never seen an Ape before?');
				$($card).append($popUpApe);
			}

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




