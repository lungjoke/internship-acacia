import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EventsGateway } from 'src/events/events.gateway';





@Injectable()
export class NotiService {
    constructor(private readonly eventsGateWay: EventsGateway){ }
        @Cron(CronExpression.EVERY_10_SECONDS)
        broadcastCon(){
            //query data from db
            const data = {
                title: 'มีข่าวใหม่!'
            }
            this.eventsGateWay.broadcastMessage(data);
        }
        broadcast(){
            //query data from db
            const data = {
                title: 'มีข่าวใหม่!'
            }
            this.eventsGateWay.broadcastMessage(data);
        }

   
}
