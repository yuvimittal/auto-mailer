import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/send-mail')
  async sendMail(@Query('to') to: string): Promise<boolean> {
    const toArray = to.split(',');
    return this.appService.sendMailParallel(toArray);
  }
}
