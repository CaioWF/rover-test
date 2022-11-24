export interface ISwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
  servers: {
    local: {
      url: string,
      description: string,
    }
  }
}
