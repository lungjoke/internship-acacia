import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { UtilsModule } from 'src/shared/utils/utils.module';

@Module({
    imports: [UtilsModule],
    controllers: [CustomersController],
})
export class CustomersModule { }
