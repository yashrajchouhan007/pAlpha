import moment from "moment";
import config from "../../Config/config";
export const pluralize = (val, word, plural = word + "s") => {
  const _pluralize = (num, word, plural = word + "s") =>
    [1, -1].includes(Number(num)) ? `${val} ${word}` : `${val} ${plural}`;
  if (typeof val === "object")
    return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};

export const daysRemaining = (date, isTrail) => {
  // console.log("date", date);
  let eventDate = moment(date);
  let todaysDate = moment();
  const d = eventDate.diff(todaysDate, "days");
  const rd = isTrail ? config.freeTrailPeriod - d : d
  return rd > 0 ? rd : 0;
};
