import {
  IsOptional,
  IsString,
  IsDecimal,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GenericPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly htmlString?: string;
}

export class AddressPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly RegisteredAddressLine?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly RegisteredAddressCity?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly RegisteredAddressPostcode?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly RegisteredAddressCountry?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly RegisteredAddressDistrict?: string;
}

export class BankTransactionsPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Timestamp?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly TransactionCategory?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly MerchantName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Description?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly TransactionType?: string;

  @IsOptional()
  @IsDecimal()
  @ApiPropertyOptional()
  readonly Amount?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Currency?: string;
}

export class AccountInformationDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly AccountName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly BankName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly swiftBic?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly SortCode?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Iban?: string;
}

export class AccountOverviewPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly AccountInformation?: AccountInformationDto;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Currency?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly TransactionsFrom?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly TransactionsTo?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly BalanceAvailable?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'bank transaction list',
    type: [BankTransactionsPDFDto],
  })
  readonly BankTransactions?: BankTransactionsPDFDto[];
}

export class TransactionsPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly CompanyName?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'address object',
    type: AddressPDFDto,
  })
  readonly Address?: AddressPDFDto;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'accounts list',
    type: [AccountOverviewPDFDto],
  })
  readonly Accounts?: AccountOverviewPDFDto[];
}

export class FieldValueDetailsPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Value?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly DataType?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly DisplayName?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly IsReadonly?: boolean;
}

export class ChildrenDetailsPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly SectionId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly DisplayName?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly DisplayOrder?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly TotalNumberOfSectionItems?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly ChildId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Field Value Details',
    type: [FieldValueDetailsPDFDto],
  })
  readonly FieldValueDetails?: FieldValueDetailsPDFDto[];
}

export class ApplicationSectionDetailsPDFDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly SectionId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly DisplayName?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly DisplayOrder?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly TotalNumberOfSectionItems?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly ChildId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly RootId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Field Value Details',
    type: [FieldValueDetailsPDFDto],
  })
  readonly FieldValueDetails?: FieldValueDetailsPDFDto[];

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({
    description: 'Field Value Details',
    type: [ChildrenDetailsPDFDto],
  })
  readonly ChildrenDetails?: ChildrenDetailsPDFDto[];
}

export class ApplicationFormPDFDto {
  @IsString()
  @IsOptional()
  readonly ProductId: string;
  @IsString()
  @IsOptional()
  readonly OpportunityId: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly ProductName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly CompanyName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly LogoUri?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly LoanType?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly SubCategory?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly DateModified?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly ModifiedBy?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly Completion?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Application Section Details',
    type: [ApplicationSectionDetailsPDFDto],
  })
  readonly ApplicationSectionDetails?: ApplicationSectionDetailsPDFDto[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Application Section Details',
    type: [ApplicationSectionDetailsPDFDto],
  })
  readonly ApplicationExtendedSectionDetails?: ApplicationSectionDetailsPDFDto[];
}

export class ReportLine
{
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly AccountId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Value?: number;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Report Lines',
    type: [ReportLine],
  })
  readonly Items?: ReportLine[];
}

export class ProfitAndLossReportDto
{
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Income?: ReportLine;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly CostOfSales?: ReportLine;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Expenses?: ReportLine;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly OtherExpenses?: ReportLine;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly OtherIncome?: ReportLine;

  @IsOptional()
  @IsDecimal()
  @ApiPropertyOptional()
  readonly GrossProfit?: number;

  @IsOptional()
  @IsDecimal()
  @ApiPropertyOptional()
  readonly NetOperatingProfit?: number;

  @IsOptional()
  @IsDecimal()
  @ApiPropertyOptional()
  readonly NetOtherIncome?: number;

  @IsOptional()
  @IsDecimal()
  @ApiPropertyOptional()
  readonly NetProfit?: number;
}

export class BalanceSheetDto
{
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Assets?: ReportLine;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Liabilities?: ReportLine;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Equity?: ReportLine;
  
  @IsOptional()
  @IsDecimal()
  @ApiPropertyOptional()
  readonly NetAssets?: number;
}

export class ManagementAccountPDFDto
{
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly CompanyName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly CreatedDate?: string;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly FinancialYearEnd?: string;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly MostRecentData?: string;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly PnLStartingData?: string;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Days?: string;
  
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly Currency?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Profit and Loss Raport',
    type: [ProfitAndLossReportDto],
  })
  readonly ProfitAndLossReport?: ProfitAndLossReportDto;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Balance Sheet Raport',
    type: [BalanceSheetDto],
  })
  readonly BalanceSheet?: BalanceSheetDto;
}
