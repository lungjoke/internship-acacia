import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:port/
  getAPIHome() {
    return {message: 'Nest API Running.....'+'Version: '+ process.env.API_VERSION};
  }

  @Get('hello') //localhost:post/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
