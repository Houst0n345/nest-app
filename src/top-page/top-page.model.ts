import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { index, prop } from '@typegoose/typegoose';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class HhData {
  @prop()
  count: number;

  @prop()
  juniorSalary: number;

  @prop()
  middleSalary: number;

  @prop()
  seniorSalary: number;
}

export class TopPageAdvantage {
  @prop()
  tittle: string;

  @prop()
  description: string;
}

export interface TopPageModel extends Base {}
@index({ tittle: 'text', seoText: 'text' })
export class TopPageModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;
  @prop()
  secondCategory: string;

  @prop({ unique: true })
  alias: string;

  @prop()
  tittle: string;

  @prop()
  category: string;

  @prop({ type: () => HhData })
  hh?: HhData;
  @prop({ type: () => [TopPageAdvantage] })
  advantage: TopPageAdvantage[];
  @prop()
  seoText: string;

  @prop()
  tagsTittle: string;

  @prop({ type: () => [String] })
  tags: string[];
}
