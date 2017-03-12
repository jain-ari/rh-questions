module.exports = {
'navigate': function (test) {
 
 test.open('http://localhost:3000/index.html') 
     .assert.title().is('Display Users', 'Displaying all users')
	 .click('#4')
	 .wait(1000)
	 .assert.title().is('User Details', 'User Details')
     .done();
}
};
