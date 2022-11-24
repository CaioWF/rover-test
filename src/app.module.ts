import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './common/config/config';
import { RoverModule } from './rover/rover.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    RoverModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
