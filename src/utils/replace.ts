export const formatDate = (date: string): string => {

   const dateReplace = new Date(date);

   return `${dateReplace.getDay()}/${dateReplace.getMonth()}/${dateReplace.getFullYear()}`

}