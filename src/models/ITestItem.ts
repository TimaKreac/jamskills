export interface ITestItem {
  id: number;
  status: string;
  quiz: 'hol' | 'usk' | 'gatb-5';
}

export interface IHolTestItem {
  index: number;
  question: string;
  answers: {
    left: {
      name: string;
      text: string;
    };
    right: {
      name: string;
      text: string;
    };
  };
}

export interface IUskTestItem {
  index: number;
  question: string;
}
