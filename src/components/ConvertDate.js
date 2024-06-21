export const DateConverter = (dateString) => {

  const date = new Date(dateString); // Create a Date object from the dateString

  const formattedDate = date.toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}
