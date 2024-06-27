import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/shared/db/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '30d' },
    }),
    PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],

})
export class AuthModule { }
