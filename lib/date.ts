export const formatDate = (unformatDate: Date): string => {
  const d = new Date(unformatDate);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return `${year}-${month}-${date}`;
};
