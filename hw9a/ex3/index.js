var moment = require('moment'); // require
console.log(moment().format("dddd, MMMM Do YYYY"));
console.log(moment('1976-11-26', 'YYYY-MM-DD').fromNow());
