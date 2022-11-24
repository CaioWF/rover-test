import type { ISwaggerConfig } from '../interfaces/swagger.config.interface';

const swaggerConfig: ISwaggerConfig = {
  enabled: true,
  title: 'Test Rover',
  description: "API to handle NASA's rover issues",
  version: '1.0',
  path: 'api',
  servers: {
    local: {
      url: 'http://localhost:3333',
      description: 'Local server',
    }
  }
};

export default (): ISwaggerConfig => swaggerConfig;
