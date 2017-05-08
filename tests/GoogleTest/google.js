module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 2000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'ThoughtWorks')
      .click('#hplogo')
      .click('button[name=btnK]')
      .pause(1000)
      .assert.containsText('ol#rso li:first-child',
        'ThoughtWorks')
      .end();
  }
};