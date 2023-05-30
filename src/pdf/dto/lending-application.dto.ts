import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PrincipalBusinessOwnerDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly fullName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly address?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Irish' })
  readonly nationality?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Ireland' })
  readonly residenceCountry?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 12345678 })
  readonly bankAccountNumber?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '11-77-44' })
  readonly bankAccountSortCode?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'email' })
  readonly email?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '+353 (11) 111 1111' })
  readonly phone?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '+353 (11) 111 1111' })
  readonly mobile?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '12:50' })
  readonly bestTimeToCall?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly birthDate?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly dependantsNumber?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly dependantsAprAgeFrom?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly dependantsAprAgeTill?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Living with parents' })
  readonly residentialStatus?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly yearsNumberAtAddress?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly homeEstimatedValue?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly annualSalary?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly salaryPaymentFrequency?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly previousAddress?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly timeWithBank?: string;
}
export class OtherBusinessOwnerDto extends PrincipalBusinessOwnerDto {
  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isDirector?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isIrishResident?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly occupation?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly shareholdingPercentage?: string;
}

export class OwnerCompanyDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly name?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly registrationNumber?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly sharesPercent?: number;
}

export class OtherFinancialCommitmentsDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly otherFinancialCommitmentsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherFinancialCommitmentsAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherFinancialCommitmentsMonthlyRepayments?: number;
}

export class SignatureDeclarationDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly date?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly fileId?: string;
}

export class LendingApplicationDto {
  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'uuid' })
  readonly companyId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'uuid' })
  readonly lendingApplicationId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly createdDate?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'uuid' })
  readonly opportunityId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'uuid' })
  readonly opportunityApplicationId?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Kimpton Wood Limited' })
  readonly tradingName?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly tradingAddress?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly contactPerson?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'email' })
  readonly email?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '+353 (11) 111 1111' })
  readonly phone?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '+353 (11) 111 1111' })
  readonly mobile?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '12:50' })
  readonly bestTimeToCall?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '12345678' })
  readonly bankAccountNumber?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: '11-77-44' })
  readonly bankAccountSortCode?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Sole Trader' })
  readonly typeOfBusiness?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly otherTypeOfBusiness?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly companyRegistrationNumber?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Ireland' })
  readonly incorporatedCountry?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly numberOfOutlets?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly primaryBusinessActivity?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly setupBusinessDate?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Leased' })
  readonly typeOfPremisesOfTradingAddress?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly numberOfEmployees?: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly asAt?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly taxRegistrationNumber?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Legal Entity identifier (LEI)' })
  readonly specifyType?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly overdraftFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly overdraftAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly overdraftMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly businessCardsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly businessCardsAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly businessCardsMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly loansFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly loansAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly loansMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly leasingFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly leasingAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly leasingMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly commercialMortgageFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly commercialMortgageAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly commercialMortgageMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly savingsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly savingsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly depositsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly depositsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly otherSavingsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherSavingsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly investmentsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly investmentsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly investmentAccountsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly investmentAccountsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly sharesFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly sharesAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly propertyFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly propertyAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly currentPropertyValueFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly currentPropertyValueAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly otherInvestmentsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherInvestmentsAmountHeld?: number;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly periodEnding?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly fullYearAccounts?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Certified' })
  readonly accountsType?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly turnover?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly grossProfit?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly netProfit?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly drawings?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly interest?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly depreciation?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly tax?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly landAndBuildings?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly creditors?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly machineryAndEquipment?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly vatOrPayeOrPrsi?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly furnitureAndFittings?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly furnitureAndFittingsOther?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly stock?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly totalLiabilities?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly debtors?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly debtorsOther?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly cash?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly taxStatus?: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly depositsCurrentValue?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly revenueAgreementInPlace?: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherCurrentValues?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly monthlyAmountOfRevenueAgreement?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly totalAssets?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly mortgageFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly mortgageAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly mortgageMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalLoanFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalLoanAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalLoanMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly motorLoanFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly motorLoanAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly motorLoanMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalOverdraftFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalOverdraftAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalOverdraftMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly creditCardsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly creditCardsAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly creditCardsMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly taxLiabilityFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly taxLiabilityAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly taxLiabilityMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalOtherFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalOtherAmountOutstanding?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalOtherMonthlyRepayments?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalSavingsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalSavingsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalDepositsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalDepositsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly otherPersonalSavingsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherPersonalSavingsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalInvestmentsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalInvestmentsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalInvestmentAccountsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalInvestmentAccountsAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalLifeAssuranceFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalLifeAssuranceAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalSharesFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalSharesAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalPensionFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalPensionAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly personalPropertyFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly personalPropertyAmountHeld?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly currentPersonalValueAmountHeld?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly otherPersonalInvestmentsFinancialInstitution?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly otherPersonalInvestmentsAmountHeld?: number;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasManagementAccount?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly managementAccountReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasCertifiedOrAuditedAccount?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly certifiedOrAuditedAccountReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasFlowStatementOrProjection?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly flowStatementOrProjectionReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasBusinessPlan?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly businessPlanReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasAgedDebtorsListing?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly agedDebtorsListingReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasAgedCreditorsListing?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly agedCreditorsListingReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasTaxAffairsConfirmation?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly taxAffairsConfirmationReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasBankStatements?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly bankStatementsReceivedDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasOtherStatements?: boolean;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly otherStatementsReceivedDate?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly collateralProposed?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Overdraft' })
  readonly residentialStatus?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly residentialStatusOtherField?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly requiredAmount?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: '33/11' })
  readonly repaymentPeriod?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly purposeOfFacility?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly frequencyLoanRepayment?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly loanFirstRepaymentDate?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isForeseeAdditionalRequirement?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly foreseeAdditionalRequirement?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly additionalInformation?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly foreseeAdditionalRequirementFreeText?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasResidentialStatus2?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ example: 'Overdraft' })
  readonly residentialStatus2?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly residentialStatusOtherField2?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly requiredAmount2?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: '33/11' })
  readonly repaymentPeriod2?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly purposeOfFacility2?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly frequencyLoanRepayment2?: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly loanFirstRepaymentDate2?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isNoticeMeByLetter?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isNoticeMeByPhone?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isNoticeMeByEmail?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly isNoticeMeByText?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasSoleTrader?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasNonSoleTrader?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasPrivateCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasDesignatedCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasDesignatedCompanyGuarantee?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasCompanyLimitedGuarantee?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasPublicLimitedCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasSingleMemberCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasUnlimitedCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasSpecialFund?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasTransferableSecurities?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasEconomicInterestGroupings?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasSocietasEuropaea?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasIndustrialProvidentSociety?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasFriendlySociety?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasTradeUnion?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasLimitedLiabilityPartnership?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasLegalFormRoi?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasLegalFormNonRoi?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasPartnership?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasClub?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasAssociation?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasUninCorporatedCharity?: boolean;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional()
  readonly hasNonLegalForm?: boolean;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 3 })
  readonly vatRegistered?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly vatRegisteredDetails?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly taxReturns?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: false })
  readonly isTaxCompliant?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly taxCompliantDetails?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: false })
  readonly isNotPreviouslyEvadedTax?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly notPreviouslyEvadedTaxDetails?: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ example: false })
  readonly isNotParticipatingInAnyTaxAvoidanceArrangements?: boolean;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly notParticipatingInAnyTaxAvoidanceArrangementsDetails?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly companyIncorporatedCountry?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly businessActivity?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly inBusinessSince?: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional()
  readonly numberOfEmployeesInCompany?: number;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional({ format: 'date-time' })
  readonly asAtDate?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly sourceOfIncome?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly countriesPayments?: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  readonly anyTransactions?: string;

  @IsNotEmpty()
  @ApiProperty({ type: [OtherFinancialCommitmentsDto] })
  readonly otherFinancialCommitments: OtherFinancialCommitmentsDto[];

  @IsNotEmpty()
  @ApiProperty({ type: [SignatureDeclarationDto] })
  readonly signatures: SignatureDeclarationDto[];

  @IsNotEmpty()
  @ApiProperty({ type: [OtherBusinessOwnerDto] })
  readonly otherBusinessOwners: OtherBusinessOwnerDto[];

  @IsNotEmpty()
  @ApiProperty({ type: [OwnerCompanyDto] })
  readonly ownerCompanies: OwnerCompanyDto[];

  @IsNotEmpty()
  @ApiProperty({ type: PrincipalBusinessOwnerDto })
  readonly principalBusinessOwner: PrincipalBusinessOwnerDto;
}
