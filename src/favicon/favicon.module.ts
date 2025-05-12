import { Module } from '@nestjs/common';
import { FaviconService } from './favicon.service';
import { FaviconController } from './favicon.controller';

@Module({
  providers: [FaviconService],
  controllers: [FaviconController]
})
export class FaviconModule {}
