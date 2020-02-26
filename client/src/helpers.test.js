const functions = require('./helpers');

it('truncates the date object', () => {

    const d = "Wed Feb 26 2020 09:43:12 GMT-0500 (Eastern Standard Time)"
    const d2 = "Wed Feb 26 2020 09:48:03 GMT-0500 (Eastern Standard Time)"

    expect(functions.truncateDate(d)).toEqual(["Wed Feb 26 2020 09:43:12"]);
    expect(functions.truncateDate(d2)).toEqual(["Wed Feb 26 2020 09:48:03"]);
});

