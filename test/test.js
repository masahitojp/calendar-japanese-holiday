var csh = require('../');
var assert = require('assert');

describe('days_in_month', function() {
 
    it('getHolidays', function() {
	assert.deepEqual(
	    csh.getHolidays(2008, 6),
	    {}
	);
	assert.deepEqual(
	    csh.getHolidays(2009, 9, true),
	    {"21":"敬老の日","22":"国民の休日","23":"秋分の日"}
	);
	assert.deepEqual(
	    csh.getHolidays(2014, 5, true),
	    {"3":"憲法記念日","4":"みどりの日","5":"こどもの日", "6":"振替"}
	);
	assert.deepEqual(
	    csh.getHolidays(2014, 5),
	    {"3":"憲法記念日","4":"みどりの日","5":"こどもの日"}
	);
    });

    it('isHoliday', function() {
	assert.equal(csh.isHoliday(2014, 5, 7), false);
	assert.equal(csh.isHoliday(2014, 5, 5), true, "祝日");
	assert.equal(csh.isHoliday(2014, 5, 6), false, 
		     "振替オプションON出ない場合はfalse");
	assert.equal(csh.isHoliday(2014, 5, 6, true), true, "振替");
	assert.equal(csh.isHoliday(2009, 9, 22, true), true, "国民の祝日");
    });
});
