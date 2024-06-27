import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginDto{


    @IsNotEmpty({message:'อีเมล์ ห้ามว่าง'})
    @IsEmail({},{message:'รูปแบบอีเมลไม่ถูกต้อง'})
    email:string;

    @IsNotEmpty({message:'รหัสผ่าน ต้องไม่น้อยกว่า $constraint1 ตัวอักษร'})
    password:string;
}
