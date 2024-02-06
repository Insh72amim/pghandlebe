import { initializeSwagger } from './swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { match, P } from 'ts-pattern';

export const createServer = async () => {
  const options = { bufferLogs: true };
  const app = await NestFactory.create(AppModule, options);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
  });

  initializeSwagger(app);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      transform: true,
    }),
  );

  app.use(json({ type: ['application/json', 'application/*+json'] }));
  app.use(urlencoded({ extended: true }));

  app.enableShutdownHooks();

  return app;
};

async function main(): Promise<void> {
  const app = await createServer();

  const port = match(process.env)
    .with({ PORT: P.string }, ({ PORT }) => PORT)
    .otherwise(() => 3000);

  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}

void main();
