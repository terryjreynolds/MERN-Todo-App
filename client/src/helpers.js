
const functions = {

  truncateDate: function truncateDate(d) {
    const date = d;
    console.log(date);
    const everythingBeforeTimeZone = /(.*):\d{2}/g;
  
    const truncatedDate = date.match(everythingBeforeTimeZone);
    console.log("truncatedDate", truncatedDate);
    return truncatedDate;
  }
};



module.exports = functions;