const convertCustomError = (errorMessage: string): string => {
  let convertedMsg: string = errorMessage;
  switch (errorMessage) {
    case "no viable alternative at input 'define :'": {
      convertedMsg = "Definition is missing a name.";
      break;
    }
    default: {
      break;
    }
  }
  return convertedMsg;
};

export default convertCustomError;
