const { formatDate } = require('../fomatDate');

const {
  date,
  formatString,
  prefixDate,
  postfixDate,
  formatedDate,
} = require('../mock/mock');


describe('formatDate fn', () => {
  it('Should return error if date is not in ISO format', () => {
    expect(formatDate(date.fourthNotISODate, formatString.firstFormatString)).toBe(`${date.fourthNotISODate} <- is incorrect format of date (Need ISO format)`);
  });

  it('Should return formated date with prefix and postfix', () => {
    expect(formatDate(date.firstDateString, formatString.firstFormatString, prefixDate, postfixDate)).toBe(`${prefixDate} ${formatedDate.firstDateString} ${postfixDate}`);
  });

  it('Should return formated date without prefix and postfix', () => {
    expect(formatDate(date.secondDateString, formatString.secondFormatString)).toBe(`${formatedDate.secondDateString}`);
  });

  it('Should return formated date with incorrect prefix and postfix', () => {
    expect(formatDate(date.secondDateString, formatString.secondFormatString, null, undefined)).toBe(`${formatedDate.secondDateString}`);
  });

  it('Shoudl return correct Date for navite JS Date parce to ISO string', () => {
    expect(formatDate(date.fifthISONativeDate, formatString.thidrFormatString)).toBe(formatedDate.thirdDateString);
  });
});




