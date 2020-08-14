const {
  format,
  parseISO,
} = require('date-fns');

const {
  date,
  fomatedDate,
  formatString,
  postfixDate,
  prefixDate
} =  require('./mock/mock');


const formatDate = (date, formatString, prefix = '', postfix = '') => {
  const regexISO = '^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$';

  if (date.match(regexISO)) {
    const parseDateISO = parseISO(date);
    const formatDate = format(parseDateISO, formatString);

    if (!!prefix === false && !!postfix === false) {
      return `${formatDate}`;
    }

    return `${prefix} ${formatDate} ${postfix}`;
  }
  return `${date} <- is incorrect format of date (Need ISO format)`;
};

//console.log(formatDate(date.secondDateString, formatString.firstFormatString, prefixDate, postfixDate));

module.exports = {
  formatDate,
};

