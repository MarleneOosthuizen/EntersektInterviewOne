/**
 * Sample automated test scenario for Nightwatch.js
 *
 * > it navigates to google.com and searches for nightwatch,
 *   verifying if the term 'The Night Watch' exists in the search results
 */

var a = 'SCHALK NOLTE';
var b = 'CEO';

module.exports = {
  'Test Start: Navigate to Website' : function (client) {
    client
      .url('https://www.entersekt.com/Company-The-team')
      .waitForElementPresent('body', 1000);
  },


  
 'Test 1: Locate Schalk Nolte' : function(client) {
    client
      .useCss()
      .pause(1000)
   .assert.containsText('#features > div > div > div:nth-child(2) > div:nth-child(1) > h2 > span > strong > span', (a),['Test Successful. Found ' + (a)])
  },
  
   'Test 2: Is Schalk Nolte the CEO' : function(client) {
    client
      .useCss()
      .pause(1000)
   .assert.containsText('#features > div > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(3) > strong', (b), ['Test Successful. ' + (a) + ' Is the ' + (b)])   
      .end();
  }
  
  
};