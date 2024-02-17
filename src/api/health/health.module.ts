import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { DatabaseHealthCheckIndicator } from './indicators/database.health.indicator';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [DatabaseHealthCheckIndicator],
  exports: [TerminusModule],
})
export class HealthModule {}
