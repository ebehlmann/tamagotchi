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
			if (newPet.isAlive()===false) {
				$('div.pet-stats').hide();
				$('h3#status-message').text(newPet.name + ' has died.');
				$('div.after-death').show();
			};
		}, 1 * 1000);
		
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