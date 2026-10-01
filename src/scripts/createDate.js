const createDate = () => {
  const date = new Date();
  const options = { day: "numeric", month: "short", year: "numeric" };
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${date.toLocaleDateString("en-US", options)} at ${time}`;
};

export default createDate;
