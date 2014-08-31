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
});
