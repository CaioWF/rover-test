import { ICorsConfig } from './cors.config.interface';
import { ISwaggerConfig } from './swagger.config.interface';

export interface IConfig {
  corsConfig: ICorsConfig;
  swaggerConfig: ISwaggerConfig;
}
