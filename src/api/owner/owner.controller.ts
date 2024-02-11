import { Controller, Get } from '@nestjs/common';
import { OwnerService } from './owner.service';

@Controller()
export class OwnerController {
  constructor(private readonly appService: OwnerService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
