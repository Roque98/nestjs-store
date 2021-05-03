// src/dtos/products.dtos.ts
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateProductDto {
  @IsString() // pipe 👈
  @IsNotEmpty() // pipe 👈
  readonly name: string;

  @IsString() // pipe 👈
  @IsNotEmpty() // pipe 👈
  readonly description: string;

  @IsNumber() // pipe 👈
  @IsNotEmpty() // ...
  @IsPositive()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}