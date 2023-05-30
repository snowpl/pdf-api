import * as Handlebars from 'handlebars';
import { parseISO, format, isValid } from 'date-fns';
import { ReportLine } from './dto/brokerPortal.dto';

function numberWithCommas(x) {
  const rounded = Math.round((x + Number.EPSILON) * 100) / 100;

  return rounded.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

function link(text: string, url: string, type = '') {
  text = Handlebars.Utils.escapeExpression(text);
  url = Handlebars.Utils.escapeExpression(url);
  const result = `<a href="${type}${url}">${text}</a>`;
  return new Handlebars.SafeString(result);
}

function handleMainReportLine(reportLine: ReportLine, initialPadding: number, isFirst: boolean): string {
  if(reportLine == undefined || reportLine == null || reportLine.Name === null || reportLine.Name === undefined){
    return "";
  }
  let className = isFirst ? 'total' : 'total-summary';
  var start = `<div class=\"content-row ${className}\" style=\"padding-left: ${initialPadding}px\"><span>${reportLine.Name}</span><span></span></div>`;
  var middleLines = reportLine.Items?.map(report => {
    return handleSubLine(report, initialPadding);
  });
  var end = `<div class=\"content-row total-summary\" style=\"padding-left: ${initialPadding}px\"><span>Total ${reportLine.Name}</span><span>${reportLine.Value}</span></div>`;
  return `${start}${middleLines?.join('')}${end}`;
}

function handleSubLine(reportLine: ReportLine, initialPadding: number): string {
  initialPadding += 12;
  if(reportLine.Items?.length != 0){
    return handleMainReportLine(reportLine, initialPadding, false);
  }else if (reportLine.Value != 0){
    return `<div class=\"content-row\" style=\"padding-left: ${initialPadding}px\"><span>${reportLine.Name}</span><span>${reportLine.Value}</span></div>`;
  }
}

function dateFormat(date: string, formatValue = 'dd/MM/yy'): string {
  if (!isValid(parseISO(date))) return date;
  if (String(date) === date && date.slice(-1).toLowerCase() !== 'z') {
    date = `${date}Z`;
  }
  return format(parseISO(date), formatValue);
}

Handlebars.registerHelper(
  'handleMainReportLine',
  (reportLine: ReportLine) =>{
    return new Handlebars.SafeString(handleMainReportLine(reportLine, 40, true));
});

Handlebars.registerHelper(
  'currencyFormat',
  (number: string, symbol = '£'): string => {
    return (number && `${symbol}${numberWithCommas(number)}`) || '';
  },
);

Handlebars.registerHelper('link', (text: string, url: string = text) =>
  link(text, url, ''),
);

Handlebars.registerHelper('link:mailto', (text: string, url: string = text) =>
  link(text, url, 'mailto:'),
);

Handlebars.registerHelper('dateFormat', dateFormat);

Handlebars.registerHelper('checkbox:ulster', (isChecked: boolean) => {
  const iconFileName = isChecked ? 'checkbox.svg' : 'checkbox-unchecked.svg';
  const alt = isChecked === true ? 'yes' : 'no';
  const result = `<img src="./assets/img/icons/${iconFileName}" width="12" height="12" alt="${alt}">`;
  return new Handlebars.SafeString(result);
});

Handlebars.registerHelper(
  'yesNo',
  (isYes: boolean) => new Handlebars.SafeString(isYes ? 'YES' : 'NO'),
);

Handlebars.registerHelper('math', (lValue, operator, rValue) => {
  switch (operator) {
    case '+':
      return lValue + rValue;
    case '-':
      return lValue - rValue;
    case '*':
      return lValue * rValue;
    case '/':
      return lValue / rValue;
    case '%':
      return lValue % rValue;
    case '==':
      return lValue == rValue;
    case '!=':
      return lValue != rValue;
    case '===':
      return lValue === rValue;
    case '<':
      return lValue < rValue;
    case '<=':
      return lValue <= rValue;
    case '>':
      return lValue > rValue;
    case '>=':
      return lValue >= rValue;
    case '&&':
      return !!(lValue && rValue);
    case '||':
      return !!(lValue || rValue);
    default:
      return;
  }
});

export default Handlebars;
