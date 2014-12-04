

function create_card_listener($infoCard, i) {
		$('#info').append($infoCard);
		$infoCard.find('input').on('click', function(){
			var primateNumber = (primates[i]);
		
			

		})

	}

	

	$(document).ready(function() {
		
		

		$(function() {

			//run array shuffle
	
			console.log(primates);

			//create loop to pull from array for cards
		    for (var i = 0; i < primates.length; i++) {
			
			    //create a card from array for game
			    var $infoCard = $(					
			
						"<div class='info "+
						primates[i].class+
						"'></div>"
						)


			    //add card to page
			    create_card_listener($infoCard, i)
			} 

		});

	});    




