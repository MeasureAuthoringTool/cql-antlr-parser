import {CqlResult} from "../dto";

export default class CqlFinder {

  constructor(private result: CqlResult, private aliases: string[]) {
  }

  find(term: string): boolean {

    if (this.aliases.find(a => a === term)) {
      return true;
    }

    if (this.result.context?.name === term) {
      return true;
    }

    for (const i of this.result.includes) {
      if( i.called === term) {
        i.hits += 1;
        return true;
      }
    }

    for (const v of this.result.valueSets) {
      if (v.name === term) {
        v.hits += 1;
        return true;
      }
    }

    for (const v of this.result.parameters) {
      if (v.name === term) {
        v.hits += 1;
        return true;
      }
    }

    for (const v of this.result.expressionDefinitions) {
      if (v.name === term) {
        v.hits += 1;
        return true;
      }
    }

    for (const v of this.result.codeSystems) {
      if (v.name === term) {
        v.hits += 1;
        return true;
      }
    }

    for (const v of this.result.codes) {
      if (v.name === term) {
        v.hits += 1;
        return true;
      }
    }

    return false;
  }


}
