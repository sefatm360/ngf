export interface Ilib {
  parseDate?: any;
}

export interface Imonths {
  Jan: string;
  Feb: string;
  Mar: string;
  Apr: string;
  May: string;
  Jun: string;
  Jul: string;
  Aug: string;
  Sep: string;
  Oct: string;
  Nov: string;
  Dec: string;
}

const lib: Ilib = {};

lib.parseDate = (str: any) => {
  const months: any = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  const [, month, day, year] = str.split(' ');

  return `${year}-${months[month]}-${day}`;
};

export default lib;
