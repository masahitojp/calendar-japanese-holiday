var furikaeStr = '振替';

var staticHoliday = [
// 4/29 みどりの日 => 昭和の日 変更
// みどりの日は5/4に移行
		     {'start' : 2007, 'end' : 2999,
		      'days' : {1  : { 1 : '元日'},
				 2  : {11 : '建国記念の日'},
				 4  : {29 : '昭和の日'},
				 5  : { 3 : '憲法記念日',
					 4 : 'みどりの日',
					 5 : 'こどもの日'},
				 11 : { 3 : '文化の日',
					23 : '勤労感謝の日'},
				 12 : {23 : '天皇誕生日'},
				},
		     },
// 海の日,敬老の日がHappy Mondayに
		     {'start' : 2003, 'end' : 2006,
		       'days' : {1  : { 1 : '元日'},
				  2  : {11 : '建国記念の日'},
				  4  : {29 : 'みどりの日'},
				  5  : { 3 : '憲法記念日',
					  5 : 'こどもの日'},
				  11 : { 3 : '文化の日',
					 23 : '勤労感謝の日'},
				  12 : {23 : '天皇誕生日'},
				 },
		     },
// 成人の日,体育の日がHappy Mondayに
		     {'start' : 2000, 'end' : 2002,
		      'days' : {1  : { 1 : '元日'},
				 2  : {11 : '建国記念の日'},
				 4  : {29 : 'みどりの日'},
				 5  : { 3 : '憲法記念日',
					 5 : 'こどもの日'},
				 7  : {20 : '海の日'},
				 9  : {15 : '敬老の日'},
				 11 : { 3 : '文化の日',
					 23 : '勤労感謝の日'},
				 12 : {23 : '天皇誕生日'},
				},
		     },
// 海の日追加
		     {'start' : 1996, 'end' : 1999,
		      'days' : {1  : { 1 : '元日',
					15 : '成人の日'},
				 2  : {11 : '建国記念の日'},
				 4  : {29 : 'みどりの日'},
				 5  : { 3 : '憲法記念日',
					 5 : 'こどもの日'},
				 7  : {20 : '海の日'},
				 9  : {15 : '敬老の日'},
				 10 : {10 : '体育の日'},
				 11 : { 3 : '文化の日',
					 23 : '勤労感謝の日'},
				 12 : {23 : '天皇誕生日'},
				},
		     },
// 天皇誕生日変更 4/29 : 12/23
// 旧天皇誕生日をみどりの日に変更
		     {'start' : 1989, 'end' : 1995,
		      'days' : {1  : { 1 : '元日',
					15 : '成人の日'},
				 2  : {11 : '建国記念の日'},
				 4  : {29 : 'みどりの日'},
				 5  : { 3 : '憲法記念日',
					 5 : 'こどもの日'},
				 9  : {15 : '敬老の日'},
				 10 : {10 : '体育の日'},
				 11 : { 3 : '文化の日',
					23 : '勤労感謝の日'},
				 12 : {23 : '天皇誕生日'},
				},
		     },
// 建国記念の日追加
		     {'start' : 1967, 'end' : 1988,
		      'days' : {1  : { 1 : '元日',
					15 : '成人の日'},
				 2  : {11 : '建国記念の日'},
				 4  : {29 : '天皇誕生日'},
				 5  : { 3 : '憲法記念日',
					 5 : 'こどもの日'},
				 9  : {15 : '敬老の日'},
				 10 : {10 : '体育の日'},
				 11 : { 3 : '文化の日',
					23 : '勤労感謝の日'},
				},
		     },
// 敬老の日,体育の日追加
		     {'start' : 1966, 'end' : 1966,
		      'days' : {1  : { 1 : '元日',
					15 : '成人の日'},
				 4  : {29 : '天皇誕生日'},
				 5  : { 3 : '憲法記念日',
					 5 : 'こどもの日'},
				 9  : {15 : '敬老の日'},
				 10 : {10 : '体育の日'},
				 11 : { 3 : '文化の日',
					23 : '勤労感謝の日'},
				},
		     },
// 国民の祝日に関する法律に定められた祝日のうち7/20以前のものを追加
		     {'start' : 1949, 'end' : 1965,
		      'days' : {1  : { 1 : '元日',
					15 : '成人の日'},
				 4  : {29 : '天皇誕生日'},
				 5  : { 3 : '憲法記念日',
					 5 : 'こどもの日'},
				 11 : { 3 : '文化の日',
					23 : '勤労感謝の日'},
				},
		     },
// 国民の祝日に関する法律 1948/7/20制定
		     {'start' : 1948, 'end' : 1948,
		      'days' : {11 : { 3 : '文化の日',
					23 : '勤労感謝の日'},
				},
		     },
];

var exceptionalHoliday = {
    195904 : {10 : '皇太子明仁親王の結婚の儀'},
    198902 : {24 : '昭和天皇の大喪の礼'},
    199011 : {12 : '即位礼正殿の儀'},
    199306 : { 9 : '皇太子徳仁親王の結婚の儀'},
};

var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var days_in_month = function(year, mon) {

    var days = daysInMonth[mon - 1];

    if (mon == 2 && year % 4 == 0) {
	if (year % 100 == 0) {
	    if (year % 400 == 0) {
		return days + 1;
	    }
	    return days;
	}
	return days + 1;
    }

    return days;
};

// 指定曜日の日付一覧を配列で返す
function week_days ($year, $mon, $wday) {

    var week_days = [];

    var $wd = (new Date($year, $mon - 1, 1)).getDay();

    // 指定曜日の最初の日付(カレンダー的に空欄の場合は0以下の値となる)
    var $start = 1 - $wd + $wday;

    var $last_day = days_in_month($year, $mon);

    for (var $day = $start ; $day <= $last_day ; $day += 7) {
	if ($day > 0) {
	    week_days.push($day);
	}
    }

    return week_days;
}

function shallowCopy(oldObj) {
    var newObj = {};
    for(var i in oldObj) {
        if(oldObj.hasOwnProperty(i)) {
            newObj[i] = oldObj[i];
        }
    }
    return newObj;
}


function lookup_holiday_table ($year) {

    for(var i = 0, len = staticHoliday.length; i < len; i++) {
	var tbl = staticHoliday[i];
	if (tbl.start <= $year && $year <= tbl.end){
	    return tbl.days;
	}
    }
    return;
}

// 春分の日
// Ref to.
//   http://www.nao.ac.jp/QA/faq/a0301.html
//   http://ja.wikipedia.org/wiki/%E6%98%A5%E5%88%86%E3%81%AE%E6%97%A5
function shunbun_day ($year) {

    var $day;

    var $mod = $year % 4;
    if ($mod == 0) {
	if      (1900 <= $year && $year <= 1956) {$day = 21;}
	else if (1960 <= $year && $year <= 2088) {$day = 20;}
	else if (2092 <= $year && $year <= 2096) {$day = 19;}
    } else if ($mod == 1) {
	if      (1901 <= $year && $year <= 1989) {$day = 21;}
	else if (1993 <= $year && $year <= 2097) {$day = 20;}
    } else if ($mod == 2) {
	if      (1902 <= $year && $year <= 2022) {$day = 21;}
	else if (2026 <= $year && $year <= 2098) {$day = 20;}
    } else if ($mod == 3) {
	if      (1903 <= $year && $year <= 1923) {$day = 22;}
	else if (1927 <= $year && $year <= 2055) {$day = 21;}
	else if (2059 <= $year && $year <= 2099) {$day = 20;}
    }

    return $day;
}

// 秋分の日
function shuubun_day ($year) {

    var $day;

    var $mod = $year % 4;
    if ($mod == 0) {
	if    ($year == 1900)                  {$day = 23;}
	else if (1904 <= $year && $year <= 2008) {$day = 23;}
	else if (2012 <= $year && $year <= 2096) {$day = 22;}
    } else if ($mod == 1) {
	if    (1901 <= $year && $year <= 1917) {$day = 24;}
	else if (1921 <= $year && $year <= 2041) {$day = 23;}
	else if (2045 <= $year && $year <= 2097) {$day = 22;}
    } else if ($mod == 2) {
	if    (1902 <= $year && $year <= 1946) {$day = 24;}
	else if (1950 <= $year && $year <= 2074) {$day = 23;}
	else if (2078 <= $year && $year <= 2098) {$day = 22;}
    } else if ($mod == 3) {
	if    (1903 <= $year && $year <= 1979) {$day = 24;}
	else if (1983 <= $year && $year <= 2099) {$day = 23;}
    }

    return $day;
}

function get_furikae_days (year, mon, holidays_tbl) {

    var days = {};

    if (year < 1973){
	return days;
    }
    
    for (var h_day in holidays_tbl) {
	var name = holidays_tbl[h_day];
	// 祝日が日曜日かチェック
	var wday = (new Date(year, mon -1, h_day)).getDay();

	if (wday == 0) {
	    var furikae_day = Number(h_day) + 1;
	    if (year >= 2007) {
		// 振り替えた先も祝日ならさらに進める
		while(holidays_tbl.hasOwnProperty(furikae_day)){
		    furikae_day++
		}
		days[furikae_day] = name;
	    } else {
		if (!holidays_tbl.hasOwnProperty(furikae_day)){
		    days[furikae_day] = name;
		}
	    }
	}
    }

    return days;
}

function getHolidays (year, mon, furikae) {

    var holiday_tbl = lookup_holiday_table(year);

    if (!holiday_tbl){ 
	return holidays_tbl;
    }

    var holidays = {};
    if (holiday_tbl.hasOwnProperty(mon)) {
	holidays = shallowCopy(holiday_tbl[mon]);
    }

    // Happy Monday (成人の日、海の日、敬老の日、体育の日)
    var mondays = week_days(year, mon, 1);	// 月曜日の一覧

    if (year >= 2000) {
	if (mon === 1) {holidays[mondays[1]] = '成人の日';}
	if (mon === 10){holidays[mondays[1]] = '体育の日';}
    }

    if (year >= 2003) {
	if (mon === 7) {holidays[mondays[2]] = '海の日';}
	if (mon === 9) {holidays[mondays[2]] = '敬老の日';}
    }

    // 不定なもの
    if (mon === 3) {holidays[shunbun_day(year)] = '春分の日';}
    if (mon === 9) {holidays[shuubun_day(year)] = '秋分の日';}

    // 例外的なもの
    var yymm = year * 100 + mon;
    var temp = exceptionalHoliday[yymm];
    if (temp) {
	for (var day in temp) {
	    holidays[day] = temp[day];
	}
    }

    // 国民の休日
    if (year >= 1986) {
	// 祝日に挟まれた平日を探す (祝日A - 平日B - 祝日C)
	for (var s_day in holidays) {
	    var day = Number(s_day)
	    if ( holidays[day + 2] &&
		 !holidays[day + 1]) {
		var wday = (new Date(year, (mon - 1), day)).getDay();

		// 祝日Aの時は平日Bはただの振り替え休日
		if (wday === 0) next;

		// 平日Bが日曜の場合も国民の休日とはならない
		if (wday === 6) next;

		holidays[day + 1] = '国民の休日';
	    }
	}
    }

    // 振り替え休日も含める
    if(furikae) {
	var furikae_days = get_furikae_days(year, mon, holidays);
	for (var val in furikae_days) {
	    holidays[val] = furikaeStr;
	}
    }

    return holidays;
}

// For isHokyday
var cache_holidays_Year  = 0;
var cache_holidays_Month = 0;
var cache_holidays;

function isHoliday (year, mon, day, furikae) {
    var holidays;

    if (year == cache_holidays_Year &&
	mon  == cache_holidays_Month) {
	holidays = cache_holidays;	// From Cache
    } else {
	holidays = getHolidays(year, mon, true);
	if(!holidays) return holidays;
	// Cache
	cache_holidays = holidays;
	cache_holidays_Year  = year;
	cache_holidays_Month = mon;
    }
    if(!holidays.hasOwnProperty(day)) return false;
    if (!furikae && holidays[day] === furikaeStr) return false;
    return holidays.hasOwnProperty(day);

}

module.exports = {
    getHolidays: getHolidays,
    isHoliday: isHoliday
}
