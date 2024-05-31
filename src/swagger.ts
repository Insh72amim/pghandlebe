import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

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

  const darktheme = new SwaggerTheme().getBuffer(SwaggerThemeNameEnum.ONE_DARK);
  const expressOptions: SwaggerCustomOptions = {
    customSiteTitle: 'PG Handle',
    customCss: darktheme,
  };

  SwaggerModule.setup('docs', app, document, expressOptions);
};
