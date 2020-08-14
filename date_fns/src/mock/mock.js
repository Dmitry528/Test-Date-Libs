// MOCKS
const date = {
  firstDateString: '2019-01-09T12:37:11.312Z',
  secondDateString: '2019-02-10T13:36:12.322Z',
  thirdNativeJSDate: new Date(2020, 6, 21),
  fourthNotISODate: '2019-01-0912:37:11.312Z',
  fifthISONativeDate: new Date(2020, 5, 1).toISOString(),
};
const formatString = {
  firstFormatString: 'MMM dd',
  secondFormatString: 'MM/dd/yyyy',
  thidrFormatString: 'MM/dd/yy',
  fourthFormatString: 'MMMM, do yyyy', // , and do ?
  fifthFormatString: 'MMMM, do yyyy [at] h:mma',
}
const prefixDate = 'Prefix';
const postfixDate = 'Postfix';

const formatedDate = {
  firstDateString: 'Jan 09',
  secondDateString: '02/10/2019',
  thirdDateString: '06/01/20',
}
/*====================================================================================*/


module.exports = {
  date,
  formatString,
  prefixDate,
  postfixDate,
  formatedDate,
}