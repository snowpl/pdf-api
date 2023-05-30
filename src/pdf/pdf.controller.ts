import { Controller, Get, Post, Res, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProduces } from '@nestjs/swagger';
import { Response } from 'express';
import { PdfService } from './pdf.service';
import { LendingApplicationDto } from './dto/lending-application.dto';
import {
  TransactionsPDFDto,
  GenericPDFDto,
  ApplicationFormPDFDto,
  ManagementAccountPDFDto,
} from './dto/brokerPortal.dto';
import {
  transformApplicationFormRequest,
  transformTransactionRequest,
  transformManagementAccountsRequest,
} from './services/brokerProtal';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Get('ping')
  @ApiTags('Ping')
  @ApiOperation({
    summary: 'Health check',
  })
  @ApiProduces('application/json')
  async ping(@Res() res: Response) {
    try {
      res.end();
    } catch (e) {
      console.error(e);
    }
  }

  @Get('ulster/lendingApplication')
  @ApiTags('Ulster')
  @ApiOperation({
    summary: 'Generates Landing Application PDF from static HTML',
  })
  @ApiProduces('application/pdf')
  async createUlsterLandingApplicationStaticHtmlPDF(@Res() res: Response) {
    const pdf = await this.pdfService.createUlsterLandingApplicationStaticHtmlPDF();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=Lending Application.pdf',
    );
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

    res.end(pdf);
  }

  @Post('ulster/lendingApplication')
  @ApiTags('Ulster')
  @ApiOperation({ summary: 'Generates Landing Application PDF' })
  @ApiProduces('application/pdf')
  async createUlsterLandingApplicationPDF(
    @Body() lendingApplicationDto: LendingApplicationDto,
    @Res() res: Response,
  ) {
    const pdf = await this.pdfService.createUlsterLandingApplicationPDF(
      lendingApplicationDto,
    );
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=Lending Application.pdf',
    );
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
    res.end(pdf);
  }

  @Get('ulster/lendingApplication/client')
  @ApiTags('Ulster')
  @ApiOperation({
    summary: 'Generates Landing Application PDF from static HTML for client',
  })
  @ApiProduces('application/pdf')
  async createUlsterLandingApplicationStaticHtmlPDFForCLient(
    @Res() res: Response,
  ) {
    const pdf = await this.pdfService.createUlsterLandingApplicationStaticHtmlPDFForClient();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=Lending Application.pdf',
    );
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
    res.end(pdf);
  }

  @Post('ulster/lendingApplication/client')
  @ApiTags('Ulster')
  @ApiOperation({ summary: 'Generates Landing Application PDF for client' })
  @ApiProduces('application/pdf')
  async createUlsterLandingApplicationPDFForCLient(
    @Body() lendingApplicationDto: LendingApplicationDto,
    @Res() res: Response,
  ) {
    const pdf = await this.pdfService.createUlsterLandingApplicationPDFForClient(
      lendingApplicationDto,
    );
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=Lending Application.pdf',
    );
    res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');
    res.end(pdf);
  }

  @Post('generate-pdf')
  @ApiTags('Generic PDF')
  @ApiOperation({ summary: 'Generates PDF from given html string' })
  @ApiProduces('application/octet-stream')
  async createGenericPDF(
    @Body() htmlString: GenericPDFDto,
    @Res() res: Response,
  ) {
    const { htmlString: htmlToRender } = htmlString;
    const pdf = await this.pdfService.createGenericPDFFromHtmlString(
      htmlToRender,
    );
    res.setHeader('Content-Type', 'application/octet-stream; charset=utf-8');
    res.setHeader('Content-length', pdf.byteLength);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=Lending Application.pdf; size=${pdf.byteLength}`,
    );
    res.end(pdf);
  }

  @Post(':companyId/transactions')
  @ApiTags('Transactions PDF')
  @ApiOperation({ summary: 'Generates transactions PDF' })
  @ApiProduces('application/octet-stream')
  async createTransactionPDF(
    @Param('companyId') companyId: string,
    @Query('numberOfMonths') numberOfMonths: string,
    @Body() data: TransactionsPDFDto,
    @Res() res: Response,
  ) {
    const transformedRequest = transformTransactionRequest({
      ...data,
      numberOfMonths,
    });

    const pdf = await this.pdfService.createTransactionPdf(transformedRequest);
    res.setHeader('Content-Type', 'application/octet-stream; charset=utf-8');
    res.setHeader('Content-length', pdf.byteLength);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=Lending Application.pdf; size=${pdf.byteLength}`,
    );

    res.end(pdf);
  }

  @Post('company/:companyId/applicationForm/:applicationFormId')
  @ApiTags('Application Form PDF')
  @ApiOperation({ summary: 'Generates Application Form PDF' })
  @ApiProduces('application/octet-stream')
  async createApplicationFormPDF(
    @Param('companyId') companyId: string,
    @Param('applicationFormId') applicationFormId: string,
    @Body() data: ApplicationFormPDFDto,
    @Res() res: Response,
  ) {
    const transformedRequest = transformApplicationFormRequest({
      ...data,
    });

    const pdf = await this.pdfService.createApplicationFormPdf(
      transformedRequest,
    );
    res.setHeader('Content-Type', 'application/octet-stream; charset=utf-8');
    res.setHeader('Content-length', pdf.byteLength);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=Lending Application.pdf; size=${pdf.byteLength}`,
    );

    res.end(pdf);
  }

  @Post(':companyId/management-accounts')
  @ApiTags('Management Accounts PDF')
  @ApiOperation({summary: 'Generates Management Accounts PDF'})
  @ApiProduces('application/octet-stream')
  async createManagementAccountsPDF(
    @Param('companyId') companyId: string,
    @Body() data: ManagementAccountPDFDto,
    @Res() res: Response,
  ){
    console.log(data);
    const transformedRequest = transformManagementAccountsRequest({
      ...data,
    });
    console.log(transformedRequest);
    const pdf = await this.pdfService.createManagementAccountsPdf(
      transformedRequest,
    );
    res.setHeader('Content-Type', 'application/octet-stream; charset=utf-8');
    res.setHeader('Content-length', pdf.byteLength);

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=Lending Application.pdf; size=${pdf.byteLength}`,
    );

    res.end(pdf);
  }
}
