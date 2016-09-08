/**
 * Test does not work as expected. Im starting to think Nightwatch was a bad choice. 
 *   I cant find assertions or function to count elements or child elements.
 */


module.exports = {
  'Test Start: Navigate to Website' : function (client) {
    client
      .url('https://www.entersekt.com/Company-The-team')
      .waitForElementPresent('body', 1000);
  },

   'Test 1: Count' : function(client) {
    client
   
   
   .elements('css selector', function (result) {
    client.assert.equal(result.value.length, 4);
 });
   
   }
   
};