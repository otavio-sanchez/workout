export const formatDate = (date: string): string => {
  const dateReplace = new Date(date);
  const year = dateReplace.getFullYear();
  const month = (`00${dateReplace.getMonth() + 1}`).slice(-2);
  const day = (`00${dateReplace.getDate()}`).slice(-2);

  return `${day}/${month}/${year}`;
};
