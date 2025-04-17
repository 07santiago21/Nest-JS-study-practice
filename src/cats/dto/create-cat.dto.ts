import { IsInt, IsNumber, IsOptional, IsPositive, IsString,} from "class-validator";

export class CreateCatDto {

    @IsString()
    name:string;
    

    @IsInt()
    @IsPositive()
    age:number;
    
    @IsString()
    @IsOptional()
    bread?:string;

}
