import { Controller, Get, Query } from '@nestjs/common';
import { FaviconService } from './favicon.service';

@Controller('favicon')
export class FaviconController {
  constructor(private readonly faviconService: FaviconService) {}

  @Get()
  async getFavicon(@Query('url') url: string, @Query('base64') base64: string) {
    if (!url) {
      return {
        error: 'Missing required query parameter: url',
      };
    }

    const returnBase64 = base64 === 'true';

    return await this.faviconService.extractFavicon(url, returnBase64);
  }
}
