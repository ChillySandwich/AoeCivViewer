export const isDefinedAndInitialized = (value:any) => {
    return ((value ?? false) || value === 0) ? true : false;
  }
  
  export const isDefinedAndInitializedAndNotEmptyString = (value:any) => {
    return isDefinedAndInitialized(value) && value !== '';
  }
  
  export const isDefinedAndInitializedTypeGuard = <T>(arg: T | any|  number | null | undefined): arg is T => {
    return (arg === 0 || (arg ?? false)) ? true : false;
  }
  
  export const capitalizeFirstLetters = (text : string) => text.toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  
  export const convertAnyNullToBlankString = (text: string) => isDefinedAndInitialized(text) ? text : '';
  
    