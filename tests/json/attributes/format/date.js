if (typeof module !== 'undefined' && module.exports) {
  var expect = require('expect.js');
  var Amanda = require('../../../../dist/latest.js');
}

/**
 * Format
 * --------------------
 */
suite('JSON/Attribute/format#date', function() {

  var count = 0;

  /**
   * Schema
   */
  var schema = {
    format: 'date'
  };

  /**
   * Validator
   */
  var Validator = new Amanda('json');

  test('should return an error', function() {
    [
      0,
      1,
      2,
      '123',
      '+@#$~^*{}',
      'lorem ipsum',
      ' ',
      123,
      null,
      [],
      {},
      function() {},
      null,
      undefined
    ].forEach(function(data) {
      Validator.validate(data, schema, function(error) {
        count += 1;
        expect(error).to.be.ok();
      });  
    });
  });

  test('should run 14 times', function() {
    expect(count).to.be.eql(14);
  });

});