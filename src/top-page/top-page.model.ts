import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Prop } from '@typegoose/typegoose';

export class HhData {
  @Prop()
  count: number;

  @Prop()
  juniorSalary: number;

  @Prop()
  middleSalary: number;

  @Prop()
  seniorSalary: number;
}

export class TopPageAdvantages {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}
export interface TopPageModel extends Base {}
export class TopPageModel extends TimeStamps {
  @Prop({ enum: TopLevelCategory })
  firstCategory: TopLevelCategory;
  @Prop()
  secondCategory: string;
  @Prop({ unique: true })
  alias: string;
  @Prop()
  title: string;
  @Prop()
  category: string;
  @Prop()
  seoText: string;
  @Prop()
  tagsTitle: string;
  @Prop()
  tags: string[];
  @Prop({ type: () => HhData })
  hh?: HhData;
  @Prop({ type: () => [TopPageAdvantages] })
  advantages: TopPageAdvantages[];
}
