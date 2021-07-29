import {CqlResult} from "../dto";

export default class CqlFinder {

  constructor(private result: CqlResult, private aliases: string[]) {
  }

  find(term: string): boolean {

    if (this.aliases.find(a => a === term)) {
      return true;
    }

    for (const i of this.result.includes) {
      if( i.called === term) {
        i.hits++;
        return true;
      }
    }
    for (const v of this.result.valueSets) {
      if (v.name === term) {
        v.hits++;
        return true
      }
    }

    return false;
  }


}
