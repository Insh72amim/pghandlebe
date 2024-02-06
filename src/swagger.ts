import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';

export const initializeSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('PG Handle')
    .setDescription('PG Handle APIs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);

  const expressOptions: SwaggerCustomOptions = {
    customSiteTitle: 'PG Handle',
  };

  SwaggerModule.setup('docs', app, document, expressOptions);
};
