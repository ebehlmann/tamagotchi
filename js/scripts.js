var Tamagotchi = {
	initialize: function(petName, petType) {
		this.name = petName;
		this.type = petType;
		this.foodLevel = 10.0;
		this.sleepLevel = 10.00;
		this.activityLevel = 10.0;
	},
	timePasses: function() {
		this.foodLevel = this.foodLevel-1;
		this.sleepLevel = this.sleepLevel - 0.75;
		this.activityLevel = this.activityLevel - 0.5;
	},
	isAlive: function() {
		if (this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0) {
			return true;
		} else {
			return false;
		}
	}
}

var Zoo = {
	initialize: function(zooName) {
		this.name = zooName;
		this.petsInZoo = [];
	}
}

var createAPet = function(zoo) {
	var newPet = Object.create(Tamagotchi);
	newPet.initialize(($('input#new-pet-name').val()), ($('#input#new-pet-type').val()));
	zoo.petsInZoo.push(newPet);
	$('ul#zoo-list').append('<li>' + newPet.name + '</li>');
	$('div#zoo').show();
}

var showAPet = function(pet) {
	if (pet.isAlive()) {
		$('div.pet-stats').show();
		$('span#name').text(pet.name);
		$('span#food').text(pet.foodLevel);
		$('span#sleep').text(pet.sleepLevel);
		$('span#activity').text(pet.activityLevel);
	} else {
		$('div.pet-stats').hide();
		$('h3#status-message').text(pet.name + ' has died.');
		$('div.after-death').show();
	}
	
	setInterval(function() {
		pet.timePasses();
		$('span#name').text(pet.name);
		$('span#food').text(pet.foodLevel);
		$('span#sleep').text(pet.sleepLevel);
		$('span#activity').text(pet.activityLevel);
		if (pet.isAlive()===false) {
			$('div.pet-stats').hide();
			$('h3#status-message').text(pet.name + ' has died.');
			$('div.after-death').show();
		};
	}, 1 * 1000);
}

$(document).ready(function() {
	var newZoo = Object.create(Zoo);
	newZoo.initialize("My Zoo");

	$('form#new-pet').submit(function(event) {
		event.preventDefault();		
		
		createAPet(newZoo);
				
		
		$('button#feed').click(function() {
			newPet.foodLevel = newPet.foodLevel + 5;
		});
		
		$('button#put-to-bed').click(function() {
			newPet.sleepLevel = newPet.sleepLevel + 8;
		});
		
		$('button#play').click(function() {
			newPet.activityLevel = newPet.activityLevel + 4;
		});
	});

});