import { ConflictException, HttpException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { hash, genSalt, compare } from 'bcrypt';
import { RegisterDto } from './dto/register.Dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'src/shared/db/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { JwtModule } from '@nestjs/jwt';
import { access } from 'fs';

@Injectable()
export class AuthService {
    constructor(private readonly prismaservice: PrismaService, private readonly jwtService: JwtService) { }


    async register(registerDto: RegisterDto) {
        try {
            //เข้ารหัส password
            const salt = await genSalt(10);
            const hashedPassword = await hash(registerDto.password, salt);
            //create user
            const newUser = await this.prismaservice.user.create({
                data: {
                    name: registerDto.name,
                    email: registerDto.email,
                    passwaord: hashedPassword
                }
            });
            return newUser;
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException('มีผู้ใช้งานอีเมล์นี้ในระบบแล้ว');
            }
            throw new HttpException(error, 500);
        }
    }




    async login(loginDto: LoginDto) {
        const user = await this.prismaservice.user.findUnique({
            where: { email: loginDto.email }
        });
        if (!user) {
            throw new NotFoundException(`ไม่พบผู้ใช้ในระบบ`);

        }
        const isValid = await compare(loginDto.password, user.passwaord);
        if (!isValid) {
            throw new UnauthorizedException('รหัสผ่านไม่ถูกต้อง');
        }


        const playload = {user_id: user.id, user_permission:user.permission};
        const token = await this.jwtService.signAsync(
            playload,
            {secret: process.env.JWT_SECRET}
        )
        //decode exp
        const tokenDecode = this.jwtService.decode(token);

        return { access_token:token,
                 expired_id:tokenDecode['exp']
        };

    }
}
