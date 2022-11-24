import type { ICorsConfig } from '../interfaces/cors.config.interface';

const corsConfig: ICorsConfig = {
  enabled: true,
};

export default (): ICorsConfig => corsConfig;
