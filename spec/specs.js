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
});
