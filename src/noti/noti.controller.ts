import { Controller, Get, HttpCode } from '@nestjs/common';
import { version } from 'os';
import { NotiService } from './noti.service';

@Controller({
    version:'1',
    path:'noti'
})
export class NotiController {
    constructor(private readonly notiService :NotiService){}

    @Get()
    @HttpCode(200)
    broadcast(){
        this.notiService.broadcast();
        return{message:'ส่งข้อมูล noti สำเร็จ'};
    }
}
