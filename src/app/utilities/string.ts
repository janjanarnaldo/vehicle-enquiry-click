export const capitalizeEachWord = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export const capitalizeFirstWord = (str: string): string => {
  return str.replace(/^\w/, c => c.toUpperCase());
}
