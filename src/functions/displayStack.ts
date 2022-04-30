export const displayStack = (stack:string[], limit=0) : string => {
  let counter = 0;
  let newRow = '';
  for (const row of stack) {
    newRow += row + ', ';
    counter++;
    if (limit&&counter > limit) return newRow=newRow.slice(0, -2)+' ...';
  }
  return newRow?newRow.slice(0, -2):'Empty ...';
};
