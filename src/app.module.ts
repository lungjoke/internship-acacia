import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { GlobalHelpersModule } from './shared/global-helpers/global-helpers.module';
import { UtilsModule } from './shared/utils/utils.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/db/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { NotiModule } from './noti/noti.module';
import { ScheduleModule } from '@nestjs/schedule';



@Module({
  imports: [ConfigModule.forRoot(),
    CustomersModule, GlobalHelpersModule, UtilsModule, CategoriesModule, PrismaModule, AuthModule, EventsModule, NotiModule,ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
