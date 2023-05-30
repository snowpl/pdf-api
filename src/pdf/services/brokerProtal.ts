export const roundTwoDecimal = (num: number) => {
  if (!Number(num)) return num;
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

export const transformTransactionRequest = data => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return {
    Accounts: data.Accounts.map((account: any) => {
      const moneyIn = roundTwoDecimal(
        account.BankTransactions.reduce((total, transaction) => {
          return transaction.TransactionType === 'CREDIT'
            ? total + transaction.Amount
            : total;
        }, 0),
      );

      const moneyOut = roundTwoDecimal(
        account.BankTransactions.reduce((total, transaction) => {
          return transaction.TransactionType === 'DEBIT'
            ? total + transaction.Amount
            : total;
        }, 0),
      );

      const openingBalance = roundTwoDecimal(
        account.BalanceAvailable - moneyOut - moneyIn,
      );

      const bankTransactions = account.BankTransactions.reduce(
        (total, transaction, index) => {
          const previousTransaction = (index !== 0 && total[index - 1]) || {};

          return [
            ...total,
            {
              Timestamp: transaction.Timestamp,
              Type: transaction.TransactionCategory,
              TransactionType: transaction.TransactionType,
              Vendor: transaction.MerchantName,
              Description: transaction.Description,
              Amount: transaction.Amount,
              In:
                (transaction.TransactionType === 'CREDIT' &&
                  transaction.Amount) ||
                '',
              Out:
                (transaction.TransactionType === 'DEBIT' &&
                  transaction.Amount) ||
                '',
              Balance:
                (previousTransaction.TransactionType === 'CREDIT' &&
                  roundTwoDecimal(
                    previousTransaction.Balance - previousTransaction.Amount,
                  )) ||
                (previousTransaction.TransactionType === 'DEBIT' &&
                  roundTwoDecimal(previousTransaction.Balance) -
                    previousTransaction.Amount) ||
                account.BalanceAvailable,
            },
          ];
        },
        [],
      );

      return {
        ...account,
        MoneyIn: moneyIn,
        MoneyOut: moneyOut,
        OpeningBalance: openingBalance,
        Address: Object.values(data.Address).map(addressValue => addressValue),
        CompanyName: data.CompanyName,
        CreatedDate: today.toISOString(),
        NumberOfMonths: data.numberOfMonths,
        BankTransactions: bankTransactions,
      };
    }),
  };
};

export const transformApplicationFormRequest = data => {
  const numberOfSections =
    data.ApplicationSectionDetails?.length ||
    0 + data.ApplicationExtendedSectionDetails?.length ||
    0;

  const tableOfContents = [
    ...data.ApplicationSectionDetails,
    ...data.ApplicationExtendedSectionDetails,
  ]
    .sort((a, b) => (a.DisplayOrder < b.DisplayOrder ? -1 : 1))
    .map((section, index) => {
      return { name: section.DisplayName, index: index + 2 };
    });

  const combinedSections = [
    ...data.ApplicationSectionDetails,
    ...data.ApplicationExtendedSectionDetails,
  ].sort((a, b) => (a.DisplayOrder < b.DisplayOrder ? -1 : 1));

  const fields = combinedSections.map(section => {
    return {
      displayName: section.DisplayName,
      values: (section?.FieldValueDetails || [])
        .filter(section => !section.DisplayName.includes('ID'))
        .map(valueDetails => {
          return {
            name: valueDetails.DisplayName,
            value: parseArrayValue(valueDetails.Value),
          };
        }),
      childSections: [...(section.ChildrenDetails || [])].map(childSection => {
        return {
          displayName: childSection.DisplayName,
          values: childSection.FieldValueDetails.map(childValueDetails => {
            return {
              name: childValueDetails.DisplayName,
              value: childValueDetails.Value,
            };
          }),
        };
      }),
    };
  });

  return {
    meta: {
      companyName: data.CompanyName || '',
      applicationDate: 'test',
      numberOfSections: numberOfSections || 0,
      tableOfContents,
    },
    fields: fields,
  };
};

export const transformManagementAccountsRequest = data => {
  
  return {
    ...data
  }
}

const parseArrayValue = (value: any) => {
  try {
    return JSON.parse(value).join(', ');
  } catch (e) {
    return value;
  }
};
