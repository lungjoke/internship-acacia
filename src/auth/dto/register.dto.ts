import { IsEmail, IsEmpty, IsNotEmpty, IsString, MinLength } from "class-validator";

export class RegisterDto{


    @IsString({message:'ชื่อสกุล ต้องเป็นตัวอักษรเท่านั้น'})
    @IsNotEmpty({message:'ชื่อสกุล ห้ามว่าง'})
    @MinLength(3,{message:'ชื่อสกุล ต้องไม่น้อยกว่า $constraint1 ตัวอักษร'})
    name:string;

    @IsNotEmpty({message:'อีเมล์ ห้ามว่าง'})
    @IsEmail({},{message:'รูปแบบอีเมลไม่ถูกต้อง'})
    email:string;

    @IsNotEmpty({message:'รหัสผ่าน ต้องไม่น้อยกว่า $constraint1 ตัวอักษร'})
    password:string;
}