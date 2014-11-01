var csh = require('../');
var assert = require('assert');

describe('days_in_month', function() {
 
    it('get_holidays', function() {
	assert.deepEqual(
	    csh.get_holidays(2008, 6),
	    {}
	);
	assert.deepEqual(
	    csh.get_holidays(2014, 5, true),
	    {"3":"憲法記念日","4":"みどりの日","5":"こどもの日", "6":"振替"}
	);
	assert.deepEqual(
	    csh.get_holidays(2014, 5),
	    {"3":"憲法記念日","4":"みどりの日","5":"こどもの日"}
	);
    });

    it('is_holiday', function() {
	assert.equal(csh.is_holiday(2014, 5, 7), false);
	assert.equal(csh.is_holiday(2014, 5, 5), true, "祝日");
	assert.equal(csh.is_holiday(2014, 5, 6), false, "振替");
	assert.equal(csh.is_holiday(2014, 5, 6, true), true);
    });
});
