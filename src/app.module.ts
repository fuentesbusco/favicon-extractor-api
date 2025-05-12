import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FaviconModule } from './favicon/favicon.module';

@Module({
  imports: [FaviconModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
