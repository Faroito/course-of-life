import "moment/locale/fr";
import "moment/locale/en-gb";

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const clearName = (name) => {
  return name
    .toLowerCase()
    .replace(/[0-9]/g, "")
    .replace(".", "-")
    .replace(" ", "-")
    .replace(/\+/g, "plus");
};

const formatDate = (date, locale) => {
  const month = capitalize(date.format("MMM"));
  const sep = locale === "fr" ? " " : ". ";
  return month + sep + date.format("YYYY");
};

export const formatDateDuration = (start, end, locale) => {
  return formatDate(start, locale) + " - " + formatDate(end, locale);
};
