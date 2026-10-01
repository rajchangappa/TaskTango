const createDate = () => {
  const newDate = new Date();

  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");

  const day = String(newDate.getDate()).padStart(2, "0");

  const time = newDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${day}-${month}-${year} ${time}`;
};

export default createDate;
