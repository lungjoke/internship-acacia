import { Controller, Get, HttpCode, Version } from '@nestjs/common';

@Controller({
    version: '1',
    path:'customers'
    })

export class CustomersController {

    @Get('')
    @HttpCode(200)
    findAll() {
      return 'Find all Customers';
    }
    @Version('2')
    @Get('')
    @HttpCode(200)
    findAllv2() {
      return 'Find all v2 Customers';
    }
}
