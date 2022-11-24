import type { IConfig } from '../interfaces/config.interface';
import corsConfig from './cors.config';
import swaggerConfig from './swagger.config';

const config: IConfig = {
  corsConfig: corsConfig(),
  swaggerConfig: swaggerConfig(),
};

export default (): IConfig => config;
