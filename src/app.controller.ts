import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //localhost:port/
  getAPIHome(): string {
    return 'Nest API Running.....';
  }

  @Get('hello') //localhost:post/hello
  getHello(): string {
    return this.appService.getHello();
  }
}
