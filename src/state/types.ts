export interface ExpensesByCategory {
  salaries: number;
  suppies: number;
  services: number;
}

export interface Month {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

export interface Day {
  _id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface KPIs {
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}
