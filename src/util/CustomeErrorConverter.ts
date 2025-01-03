const keyWords: string[] = [
  "after",
  "aggregate",
  "all",
  "and",
  "as",
  "asc",
  "ascending",
  "before",
  "between",
  "by",
  "called",
  "case",
  "cast",
  "code",
  "Code",
  "codesystem",
  "codesystems",
  "collapse",
  "concept",
  "Concept",
  "contains",
  "context",
  "convert",
  "date",
  "day",
  "days",
  "default",
  "define",
  "desc",
  "descending",
  "difference",
  "display",
  "distinct",
  "div",
  "duration",
  "during",
  "else",
  "end",
  "ends",
  "except",
  "exists",
  "expand",
  "false",
  "flatten",
  "fluent",
  "from",
  "function",
  "hour",
  "hours",
  "if",
  "implies",
  "in",
  "include",
  "includes",
  "included in",
  "intersect",
  "Interval",
  "is",
  "let",
  "library",
  "List",
  "maximum",
  "meets",
  "millisecond",
  "milliseconds",
  "minimum",
  "minute",
  "minutes",
  "mod",
  "month",
  "months",
  "not",
  "null",
  "occurs",
  "of",
  "on or",
  "or",
  "or after",
  "or before",
  "or less",
  "or more",
  "or on",
  "overlaps",
  "parameter",
  "per",
  "point",
  "predecessor",
  "private",
  "properly",
  "public",
  "return",
  "same",
  "second",
  "seconds",
  "singleton",
  "start",
  "starting",
  "starts",
  "sort",
  "successor",
  "such that",
  "then",
  "time",
  "timezoneoffset",
  "to",
  "true",
  "Tuple",
  "union",
  "using",
  "valueset",
  "version",
  "week",
  "weeks",
  "where",
  "when",
  "width",
  "with",
  "within",
  "without",
  "xor",
  "year",
  "years",
];
const convertCustomError = (errorMessage: string): string => {
  let convertedMsg: string = errorMessage;

  if (errorMessage.match(/mismatched input \'display\' expecting \'from\'/g)) {
    convertedMsg =
      "code statement requires a codesystem reference. Please add a 'from' clause to your statement.";
  }

  switch (errorMessage) {
    case "no viable alternative at input 'define :'": {
      convertedMsg = "Definition is missing a name.";
      break;
    }
    default: {
      const findKeyword = errorMessage
        .replace(/'/g, "")
        .replace("no viable alternative at input define ", "");
      if (findKeyword && keyWords.find((kword) => findKeyword === kword)) {
        convertedMsg = "Definition names must not be a reserved word.";
      }
      break;
    }
  }
  return convertedMsg;
};

export default convertCustomError;
