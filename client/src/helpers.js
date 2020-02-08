export function truncateDate(d) {
  const date = d;
  const everythingBeforeTimeZone = /(.*):\d{2}/g;

  const truncatedDate = date.match(everythingBeforeTimeZone);
  console.log("truncatedDate", truncatedDate);
  return truncatedDate;
}
