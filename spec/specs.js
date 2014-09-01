describe('Tamagotchi', function() {
	describe('initialize', function() {
		it("sets the name and the starting properties", function() {
			var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.name.should.equal("my little pet");
			myPet.type.should.equal("turtle");
			myPet.foodLevel.should.equal(10);
			myPet.sleepLevel.should.equal(10);
			myPet.activityLevel.should.equal(10);
		});
	});
	
	describe('timePasses', function() {
		it("decreases the amount of food by 1", function() {
			var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.timePasses();
			myPet.foodLevel.should.equal(9);
		});
		
		it("decreases the amount of sleep by .75", function() {
			var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.timePasses();
			myPet.sleepLevel.should.equal(9.25);
		});
		
		it("decreases the amount of activity by .5", function() {
			var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.timePasses();
			myPet.activityLevel.should.equal(9.5);
		});
		
	});
	
	describe('isAlive', function() {
		it("should return true if pet has food, sleep and attention", function() {
			var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.isAlive().should.equal(true);
		});
		
		it("should return false if food is zero", function() {
		 var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.foodLevel = 0;
			myPet.isAlive().should.equal(false);
		});
		
		it("should return false if sleep is zero", function() {
		 var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.sleepLevel = 0;
			myPet.isAlive().should.equal(false);
		});
		
		it("should return false if activity is zero", function() {
		 var myPet = Object.create(Tamagotchi);
			myPet.initialize("my little pet", "turtle");
			myPet.activityLevel = 0;
			myPet.isAlive().should.equal(false);
		});
	});
});
