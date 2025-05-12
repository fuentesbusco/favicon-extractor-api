import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';

@Injectable()
export class FaviconService {
  async extractFavicon(targetUrl: string, returnBase64 = false) {
    try {
      const { data: html } = await axios.get(targetUrl, {
        timeout: 7000,
        headers: { 'User-Agent': 'FaviconExtractorBot/1.0' },
      });

      const $ = cheerio.load(html);
      const href =
        $('link[rel="icon"]').attr('href') ||
        $('link[rel="shortcut icon"]').attr('href') ||
        $('link[rel="apple-touch-icon"]').attr('href');

      const faviconUrl = new URL(href || '/favicon.ico', targetUrl).href;
      const response: any = { faviconUrl };

      if (returnBase64) {
        const imageRes = await axios.get(faviconUrl, {
          responseType: 'arraybuffer',
        });
        const base64 = Buffer.from(imageRes.data).toString('base64');
        const contentType = imageRes.headers['content-type'];
        response.base64 = `data:${contentType};base64,${base64}`;
      }

      return response;
    } catch (error) {
      throw new HttpException(
        {
          message: 'Error fetching favicon',
          error: error.message || error.code,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
