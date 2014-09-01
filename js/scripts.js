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