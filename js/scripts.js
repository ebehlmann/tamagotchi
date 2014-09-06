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
	newPet.initialize(($('input#new-pet-name').val()), ($('input#new-pet-type').val()));
	zoo.petsInZoo.push(newPet);
	$('div#zoo-list').append('<button type="button" class="btn btn-default">' + newPet.name + ' the ' + newPet.type + '</button>');
	$('div#zoo').show();
	$('div#zoo-list button').last().click(function() {
		showAPet(newPet);
	});
}

var showAPet = function(pet) {
	$('div.initial-instructions').hide();
	$('div.pet-stats').hide();
	$('div.after-death').hide();
	$('button#feed').off();
	$('button#put-to-bed').off();
	$('button#play').off();

	if (pet.isAlive()) {
		$('span#name').text(pet.name + ' the ' + pet.type);
		$('span#food').text(pet.foodLevel);
		$('span#sleep').text(pet.sleepLevel);
		$('span#activity').text(pet.activityLevel);
		$('div.pet-stats').show();
	} else {
		$('div.pet-stats').hide();
		$('h3#status-message').text(pet.name + ' has died.');
		$('div.after-death').show();
	}
	
	setInterval(function() {
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
	
	$('button#feed').click(function() {
		pet.foodLevel = pet.foodLevel + 5;
		$('span#food').text(pet.foodLevel);
	});
		
	$('button#put-to-bed').click(function() {
		pet.sleepLevel = pet.sleepLevel + 8;
		$('span#sleep').text(pet.sleepLevel);
	});
		
	$('button#play').click(function() {
		pet.activityLevel = pet.activityLevel + 4;
		$('span#activity').text(pet.activityLevel);
	});
}



$(document).ready(function() {
	var newZoo = Object.create(Zoo);
	newZoo.initialize("My Zoo");

	$('form#new-pet').submit(function(event) {
		event.preventDefault();		
		
		createAPet(newZoo);	
		
		$('input#new-pet-name').val('');
		$('input#new-pet-type').val('');

	});

});