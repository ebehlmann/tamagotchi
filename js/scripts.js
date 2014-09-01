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

$(document).ready(function() {
	$('form#new-pet').submit(function(event) {
		event.preventDefault();
		
		var newPet = Object.create(Tamagotchi);
		newPet.initialize(($('input#new-pet-name').val()), ($('#input#new-pet-type').val()));
		
		$('form#new-pet').hide();
		$('div.pet-stats').show();
		
		$('span#name').text(newPet.name);
		$('span#food').text(newPet.foodLevel);
		$('span#sleep').text(newPet.sleepLevel);
		$('span#activity').text(newPet.activityLevel);
		
		setInterval(function() {
			newPet.timePasses();
			$('span#name').text(newPet.name);
			$('span#food').text(newPet.foodLevel);
			$('span#sleep').text(newPet.sleepLevel);
			$('span#activity').text(newPet.activityLevel);
		}, 60 * 1000);
	});

});