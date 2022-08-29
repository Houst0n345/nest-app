import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TopLevelCategory } from '../top-page.model';

class HhData {
  @IsNumber()
  count: number;

  @IsNumber()
  juniorSalary: number;

  @IsNumber()
  middleSalary: number;

  @IsNumber()
  seniorSalary: number;
}

class TopPageAdvantage {
  @IsString()
  tittle: string;
  @IsString()
  description: string;
}

export class CreateTopPageDto {
  @IsEnum(TopLevelCategory)
  firstLevelCategory: TopLevelCategory;
  @IsString()
  secondCategory: string;

  @IsString()
  alias: string;

  @IsString()
  tittle: string;

  @IsString()
  category: string;
  @IsOptional()
  @ValidateNested()
  @Type(() => HhData)
  hh?: HhData;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TopPageAdvantage)
  advantage: TopPageAdvantage[];

  @IsString()
  seoText: string;
  @IsString()
  tagsTittle: string;
  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
