export const toNormalDate = (date: string) => {
  try{
    const newDate: string[] = date.split('T'); 
    return newDate[0]+' '+newDate[1].split('.')[0];
  }
  catch{
    return date;
  }
};
