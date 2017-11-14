var expect = require('chai').expect;
var singleline = require('./index');

describe('singleline', () => {

  it('should convert a multuline class string to a singleline class string', function() {
    var testMultilineClassString = singleline(`

    class1
          class2
    class3 class4

    `);
    expect(testMultilineClassString).to.equal('class1 class2 class3 class4');
  });

  it('should convert a multuline HTML string to a singleline HTML string', function() {
    var testMultilineHTMLString = singleline(`

      <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>GDD - Giphy Github embed Gif code explorer</title>
    <link href="css/styleguide.css" rel="stylesheet">
  </head>
  <body>
    <div id="root" class="root"></div>
    <script src="app.js"></script>
  </body>
  </html>

    `);
    expect(testMultilineHTMLString).to.equal('<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1"> <title>GDD - Giphy Github embed Gif code explorer</title> <link href="css/styleguide.css" rel="stylesheet"> </head> <body> <div id="root" class="root"></div> <script src="app.js"></script> </body> </html>');
  });

});
