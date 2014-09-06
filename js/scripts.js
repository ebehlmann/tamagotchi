var Tamagotchi = {  					// this is a prototype for a single Tamagotchi pet
	initialize: function(petName, petType) {
		this.name = petName;
		this.type = petType;
		this.foodLevel = 10.0;
		this.sleepLevel = 10.00;
		this.activityLevel = 10.0;
	},
	timePasses: function() {   	// function depletes pet's levels each time it's called
		this.foodLevel = this.foodLevel-1;
		this.sleepLevel = this.sleepLevel - 0.75;
		this.activityLevel = this.activityLevel - 0.5;
	},
	isAlive: function() {   		// function passes only when pet's food, sleep and activity are all > 0
		if (this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0) {
			return true;
		} else {
			return false;
		}
	}
}

var Zoo = {										// this is a prototype for a new zoo containing pet objects
	initialize: function(zooName) {
		this.name = zooName;
		this.petsInZoo = [];
	}
}

var createAPet = function(zoo) {													// called whenever a new pet form is submitted. Creates & initializes pet object.
	var newPet = Object.create(Tamagotchi);
	newPet.initialize(($('input#new-pet-name').val()), ($('input#new-pet-type').val()));
	zoo.petsInZoo.push(newPet);															// new pet is added to zoo
	$('div#zoo-list').append('<button type="button" class="btn btn-default">' + newPet.name + ' the ' + newPet.type + '</button>');
	$('div#zoo').show();
	$('div#zoo-list button').last().click(function() {			// sets up a click handler for the new pet
		showAPet(newPet);
	});
}

var showAPet = function(pet) {								// function runs when a pet's name is clicked
	$('div.pet-stats').hide();									// clears old information from screen
	$('div.after-death').hide();
	$('button#feed').off();											// clears any click handlers associated with other pets
	$('button#put-to-bed').off();
	$('button#play').off();

	if (pet.isAlive()) {												// shows pet's stats if it's alive
		$('span#name').text(pet.name + ' the ' + pet.type);
		$('span#food').text(pet.foodLevel);
		$('span#sleep').text(pet.sleepLevel);
		$('span#activity').text(pet.activityLevel);
		$('div.pet-stats').show();
	} else {																		// otherwise, shows that pet has died
		$('div.pet-stats').hide();
		$('h3#status-message').text(pet.name + ' has died.');
		$('div.after-death').show();
	}
	
	setInterval(function() {										// begins running depletions every 10 seconds
		pet.timePasses();
//		$('span#name').text(pet.name);
//		$('span#food').text(pet.foodLevel);
//		$('span#sleep').text(pet.sleepLevel);
//		$('span#activity').text(pet.activityLevel);
//		if (pet.isAlive()===false) {
//			$('div.pet-stats').hide();
//			$('h3#status-message').text(pet.name + ' has died.');
//			$('div.after-death').show();
//		};
	}, 10 * 1000);
	
	$('button#feed').click(function() {				// creates click handler to feed current pet
		pet.foodLevel = pet.foodLevel + 5;
		$('span#food').text(pet.foodLevel);
	});
		
	$('button#put-to-bed').click(function() {		// creates click handler to put current pet to bed
		pet.sleepLevel = pet.sleepLevel + 8;
		$('span#sleep').text(pet.sleepLevel);
	});
		
	$('button#play').click(function() {					// creates click handler to play with current pet
		pet.activityLevel = pet.activityLevel + 4;
		$('span#activity').text(pet.activityLevel);
	});
}



$(document).ready(function() {
	var newZoo = Object.create(Zoo);				// prepares a new zoo upon page load
	newZoo.initialize("My Zoo");

	$('form#new-pet').submit(function(event) {		// sets up a new pet upon form submission
		event.preventDefault();		
		
		createAPet(newZoo);	
		
		$('input#new-pet-name').val('');
		$('input#new-pet-type').val('');

	});

});