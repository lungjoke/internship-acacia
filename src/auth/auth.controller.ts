import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.Dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller(
    {version: '1',
    path: 'auth'})


export class AuthController { 
    constructor(private readonly authService : AuthService){}

    @Post('register')
    @HttpCode(201)
    async register(@Body() registerDto:RegisterDto){
    await this.authService.register(registerDto);
        return {
            message:"ลงทะเบียนสำเร็จ"
        }
}


    @Post('login')
    @HttpCode(200)
    login(@Body() loginDto:LoginDto){
    return this.authService.login(loginDto);}
}
