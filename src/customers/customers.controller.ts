import { Controller, Get, HttpCode, Version } from '@nestjs/common';
import { GlobalHelpersService } from 'src/shared/global-helpers/global-helpers.service';
import { UtilsService } from 'src/shared/utils/utils.service';

@Controller({
    version: '1',
    path: 'customers',
})

export class CustomersController {
    constructor(private readonly utilsService: UtilsService, private readonly globalHelpersService: GlobalHelpersService){}

    @Get('getthaidate')
    @HttpCode(200)
    getThaiDate() {
        return this.globalHelpersService.getThaiDate();
    }
    @Get('getdate')
    @HttpCode(200)
    getServerdate() {
        return this.utilsService.getServerDate();
    }
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
