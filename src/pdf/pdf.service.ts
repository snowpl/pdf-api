import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as path from 'path';
import { promises as fs } from 'fs';

import Handlebars from './handlebars';

@Injectable()
export class PdfService {
  private getHtmlPath(file: string): string {
    return path.join(process.cwd(), 'templates', file);
  }
  private async getPdfFromStatic(fileName: string): Promise<Buffer> {
    const filePath = this.getHtmlPath(fileName);
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(`file:${filePath}`);
    const pdf = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();
    return pdf;
  }

  private async getPdfFromString(htmlString: string): Promise<Buffer> {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setContent(htmlString);
    const pdf = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();
    return pdf;
  }

  private async getPdfFromTemplate(fileName: string, data): Promise<Buffer> {
    const filePathDummy = this.getHtmlPath('dummy.html');
    const filePathHbs = this.getHtmlPath(fileName);
    const source = await fs.readFile(filePathHbs, { encoding: 'utf-8' });
    const template = Handlebars.compile(source);
    const html = template(data);
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(`file:${filePathDummy}`);
    await page.setContent(html);
    await page.setDefaultNavigationTimeout(0);
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
    });
    await browser.close();
    return pdf;
  }

  async createUlsterLandingApplicationStaticHtmlPDF(): Promise<Buffer> {
    return await this.getPdfFromStatic('ulster-lending-application.html');
  }

  async createUlsterLandingApplicationPDF(data): Promise<Buffer> {
    return await this.getPdfFromTemplate(
      'ulster-lending-application.hbs',
      data,
    );
  }
  async createUlsterLandingApplicationStaticHtmlPDFForClient(): Promise<
    Buffer
  > {
    return await this.getPdfFromStatic(
      'ulster-lending-application-client.html',
    );
  }
  async createUlsterLandingApplicationPDFForClient(data): Promise<Buffer> {
    return await this.getPdfFromTemplate(
      'ulster-lending-application-client.hbs',
      data,
    );
  }
  async createGenericPDFFromHtmlString(data): Promise<Buffer> {
    return await this.getPdfFromString(data);
  }

  async createTransactionPdf(data): Promise<Buffer> {
    return await this.getPdfFromTemplate('bank-transactions.hbs', data);
  }

  async createApplicationFormPdf(data): Promise<Buffer> {
    return await this.getPdfFromTemplate('application-form1.hbs', data);
  }

  async createManagementAccountsPdf(data): Promise<Buffer>{
    return await this.getPdfFromTemplate('management-accounts.hbs', data);
  }
}
