
	

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

		//on click for "Monkey"
		$('button.monkey').addEventListener("submit");
			

		$(function() {

			//run array shuffle
			shuffle(primates);
			console.log(primates);

			//create loop	
		    for (var i = 0; i < primates.length; i++) {
			

		    //add cards to page
			$('#content_wrapper').append(
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
					"<input type='submit' class='button monkey' value='Monkey'>"+
					"<input type='submit' class='button not_a_monkey' value='Not a Monkey'>"+
					"</div>"+
					"</div>"+
					"</div>"+
					"</div>"
					);

				} 

		});

var primates = [

	{
		name:"Brown Woolly Monkey",
		class:"brown_woolly", 
		type:"Monkey",	
		species:"Lagothrix lagotricha",	
		status:"Threatened",	
		diet:"Omnivore",	
		habitat:"Humid and mature tropical forests",	
		location:"South America",	
		branch:"New World",	
		image:"images/brown_woolly.jpg"
	},

	{
		name:"Wolf's Mona Monkey", 
		class:"wolfs_monkey",
		type:"Monkey", 
		species:"Cercopithecus wolfi",	
		status:"Least Concern",	
		diet:"Frugivore", 	
		habitat:"Lowland rainforest and swamp forest",
		location:"Central Africa",	
		branch:"Old World",	
		image:"images/wolfs_mona_monkey.jpg"
	},
	{
		name:"Proboscis Monkey", 
		class: "proboscis",
		type:"Monkey",	
		species:"Nasalis larvatus",	
		status:"Endangered",
		diet:"Folivore and Frugivore", 	
		habitat:"Dipterocarp, mangrove and riverine forests. It can also be found in swamp forests",
		location:"Borneo",	
		branch:"Old World",
		image:"images/proboscis.jpg"
	},
	{
		name:"Barbary Macaque", 
		class:"barbary",
		type:"Monkey",	
		species:"Macaca sylvanus",	
		status:"Endangered",
		diet:"Omnivore", 	
		habitat:"Wooded Forests, scrubs, or rocky ridges full of vegetation",
		location:"North West Africa",	
		branch:"Old World",
		image:"images/barbary.jpg"
	},
	{
		name:"Bonobo",
		class:"bonobo",
		type:"Ape", 
		species:"Pan paniscus",	
		status:"Endangered",
		diet:"Omnivore", 	
		habitat:"Lowland jungle and swamp forests",
		location:"Central Africa",	
		branch:"Greater Ape",
		image:"images/bonobo.jpg"
	},
	{
		name:"Chimpanzee", 
		class:"chimp",
		type:"Ape",	
		species:"Pan troglodytes",	
		status:"Endangered",
		diet:"Omnivorous forager", 	
		habitat:"Rain forests and wet savannas",
		location:"Central Africa",	
		branch:"Greater Ape",
		image:"images/chimp.jpg"
	},
	{
		name:"De Brazza's Monkey", 
		class:"debrazzas",
		type:"Monkey",	
		species:"Cercopithecus neglectus",	
		status:"Least Concern",
		diet:"Omnivorous", 	
		habitat:"Areboreal swamps and dry mountain forests",
		location:"Central Africa",	
		branch:"Old World",
		image:"images/debrazzas.jpg"
	},
	{
		name:"Common Squirrel Monkey",
		class:"common_squirrel_monkey", 
		type:"Monkey",	
		species:"	Saimiri sciureus",	
		status:"Least Concern",
		diet:"Frugivorous and insectivorous", 	
		habitat:"Tropical rainforest",
		location:"South America",	
		branch:"New World",
		image:"images/common_squrrel_monkey.jpg"
	},
	{
		name:"Spider Monkey", 
		class:"spider_monkey",
		type:"Monkey",	
		species:"Simia Paniscus",	
		status:"Least Concern",
		diet:"Omnivore", 	
		habitat:"Tropical jungle and rainforest",
		location:"South America",	
		branch:"Old World",
		image:"images/spider_monkey.jpg"
	},
	{
		name:"Langur Monkey",
		class:"langur", 
		type:"Monkey", species:"Simia entellus",	
		status:"Threatened",
		diet:"Herbivores", 	
		habitat:"Wooded and Urban areas",
		location:"South Asia",	
		branch:"Old World",
		image:"images/langur.jpg"
	},
	{
		name:"Amazon Monkey", 
		class:"amazon_monkey",
		type:"Monkey", 
		species:"Saimiri",	
		status:"Least Concern",
		diet:"Omnivore", 	
		habitat:"Dense, tropical jungle close to a stream",
		location:"Central and South America",	
		branch:"New World",
		image:"images/amazon_monkey.jpg"
	},
	{
		name:"Patas Monkey", 
		class:"patas",
		type:"Monkey", 
		species:"Erythrocebus patas",	
		status:"Least Concern",
		diet:"Omnivore", 	
		habitat:"Savanna and open woodland",
		location:"West/East Africa",	
		branch:"Old World",
		image:"images/patas.jpg"
	},
	{
		name:"Golden Snubnosed Monkey", 
		class:"snubnosed_monkey",
		type:"Monkey",	
		species:"Rhinopithecus roxellana",	
		status:"Endangered",
		diet:"Herbivores", 	
		habitat:"Forested Mountains",
		location:"Central and South West China",	
		branch:"Old World",
		image:"images/subnosed_monkey.jpg"
	},	
	{
		name:"Ringtailed Lemur",
		class:"ringtailed_lemur", 
		type:"Prosimian",	
		species:"Lemur catta",	
		status:"Endangered",
		diet:"Omnivore", 	
		habitat:"Gallery Forests",
		location:"Madagascar",	
		branch:"Old World",
		image:"images/ringtailed_lemur.jpg"
	},
	{
		name:"Slow Loris", 
		class:"slow_loris",
		type:"Prosimian",	
		species:"	Lori bengalensis",	
		status:"Vulnerable/Endangered",
		diet:"Omnivores", 	
		habitat:"Tropical Forest and Bamboo groves",
		location:"South and Southeast Asia",	
		branch:"Old World",
		image:"images/slow_loris.jpg"
	},
	{
		name:"Bushbaby", 
		class:"galago",
		type:"Prosimian",	
		species:"Galago senegalensis",	
		status:"Least Threatened",
		diet:"Omnivorous", 	
		habitat:"Woodlands and bushland",
		location:"East Africa/Sub-Saharan",	
		branch:"Old World",
		image:"images/galago.jpg"
	},
	{
		name:"Tarsier", 
		class:"tarsier",
		type:"Prosimian",	
		species:"Tarsius",	
		status:"Endangered",
		diet:"Carnivore", 	
		habitat:"Forests, mangroves and scrub",
		location:"South-east Asian islands",	
		branch:"Old World",
		image:"images/tarsier.jpg"
	},
	{
		name:"Pygmy Marmoset",
		class:"pygmy", 
		type:"Monkey",	
		species:"	Cebuella pygmaea",	
		status:"Least Concern",
		diet:"Omnivore", 	
		habitat:"Rainforests",
		location:"South America",	
		branch:"New World",
		image:"images/marmoset.jpg"
	},
	{
		name:"Orangutan", 
		class:"orangutan",
		type:"Ape",	
		species:"Pongo borneo",	
		status:"Endangered",
		diet:"Omnivore", 	
		habitat:"Rainforests",
		location:"Indonesia and Malaysia",	
		branch:"Old World",
		image:"images/orangutan.jpg"
	},
	{
		name:"Gorilla", 
		class:"gorilla",
		type:"Ape",
		species:"Gorilla gorilla",	
		status:"Endangered",
		diet:"Herbivorous", 	
		habitat:"Dense forests and lowland swamps and marshes",
		location:"Central West African and The Democratic Republic of the Congo",	
		branch:"Greater Ape",
		image:"images/gorilla.jpg"
	},
	{
		name:"Gibbon", 
		class:"gibbon",
		type:"Ape",
		species:"Hylobates",	
		status:"Endangered",
		diet:"Omnivore", 	
		habitat:"Tropical and subtropical rainforests",
		location:"India to Indonesia and China",	
		branch:"Old World",
		image:"images/gibbon.jpg"
	},
	{
		name:"Black Cap", 
		class:"blackcap_squirrel_monkey",
		type:"Monkey",
		species:"Saimiri boliviensis",	
		status:"Least Concern",
		diet:"Omivore", 	
		habitat:"Dense tropical jungle close to a stream",
		location:"South America",	
		branch:"New World",
		image:"images/blackcap_squirrel_monkey.jpg"
	},
	{
		name:"Potto", 
		class:"potto",
		type:"Prosimian",
		species:"Perodicticus potto",	
		status:"Least Concern",
		diet:"Frugivorous and Insectivorous", 	
		habitat:"Canopy forests",
		location:"Central West Africa",	
		branch:"Old World",
		image:"images/potto.jpg"
	}


]

	});    




