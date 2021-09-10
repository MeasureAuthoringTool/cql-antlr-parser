import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import CreatorBase from "./CreatorBase";
import CqlError from "./dto/CqlError";

export default class CqlErrorCreator extends CreatorBase<CqlError> {
  constructor(ctx: ParserRuleContext) {
    super(ctx, {} as CqlError);
  }


  protected processLineInfo(): void {
    super.processLineInfo();

    if (this.cqlDao.stop) {
      this.cqlDao.stop.position += (this.ctx.start.stopIndex - this.ctx.start.startIndex);
    }
  }

  protected build(): CqlError {
    this.cqlDao.name = this.findChildText(this.ctx.start.type);

    // if (this.cqlDao.name) {
    //   this.cqlDao.name = this.cqlDao.name.replace(/"/g, "");
    // }

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    this.cqlDao.message = `Cannot find symbol ${this.cqlDao.name}.`;

    return this.cqlDao;
  }
}
