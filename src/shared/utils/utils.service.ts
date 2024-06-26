import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
    getServerDate(){
        return 'Date now: ' + new Date().toLocaleDateString();
    }
}
