import { Controller, Get, Param } from '@nestjs/common';
import { HealthCheckResult, HealthCheckService } from '@nestjs/terminus';
import { DatabaseHealthCheckIndicator } from './indicators/database.health.indicator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('0. Health')
@Controller('health')
export class HealthController {
  constructor(
    private readonly db: DatabaseHealthCheckIndicator,
    private readonly healthService: HealthCheckService,
  ) {}

  @Get()
  async getOwnerById(): Promise<HealthCheckResult> {
    return this.healthService.check([() => this.db.isHealthy('database')]);
  }
}
