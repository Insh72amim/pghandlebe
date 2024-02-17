import { HealthCheckError, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';
import { MikroORM } from '@mikro-orm/core';

@Injectable()
export class DatabaseHealthCheckIndicator extends HealthIndicator {
  constructor(private readonly orm: MikroORM) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      const connected = await this.orm.isConnected();
      return this.getStatus(key, connected);
    } catch (e) {
      throw new HealthCheckError('Database check failed', this.getStatus(key, false, { message: e.message }));
    }
  }
}
