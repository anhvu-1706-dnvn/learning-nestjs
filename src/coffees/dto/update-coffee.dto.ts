import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';
// Partial Type, Set all the types of the Input Class to optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
