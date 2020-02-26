import truncateDate from './helpers';


it('truncates the date object', () => {

    expect(truncateDate("Tue Feb 25 2020 23:21:57 GMT-0500 (Eastern Standard Time)")).toBeTruthy();
});