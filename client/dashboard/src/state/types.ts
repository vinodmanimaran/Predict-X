export interface ExpensesByCategory {
    salaries: number; // Represents the expenses for salaries
    supplies: number; // Represents the expenses for supplies
    services: number; // Represents the expenses for services
}

export interface Month {
    id: string; // Unique identifier for the month
    month: string; // The name or identifier of the month
    revenue: number; // The total revenue for the month
    expenses: number; // The total expenses for the month
    nonOperationalExpenses: number; // The non-operational expenses for the month
    operationalExpenses: number; // The operational expenses for the month
}

export interface Day {
    id: string; // Unique identifier for the day
    date: string; // The date of the day
    revenue: number; // The total revenue for the day
    expenses: number; // The total expenses for the day
}

export interface GetKpisResponse {
    id: string; // Unique identifier for the KPIs response
    _id: string; // Another identifier for the KPIs response
    __v: number; // Version number
    totalProfit: number; // The total profit
    totalRevenue: number; // The total revenue
    totalExpenses: number; // The total expenses
    expensesByCategory: ExpensesByCategory; // An object representing expenses categorized by type
    monthlyData: Array<Month>; // An array of monthly data objects
    dailyData: Array<Day>; // An array of daily data objects
    createdAt: string; // The creation timestamp
    updatedAt: string; // The update timestamp
}

export interface GetProductsResponse {
    id: string; // Unique identifier for the products response
    _id: string; // Another identifier for the products response
    __v: number; // Version number
    price: number; // The price of the product
    expense: number; // The expense associated with the product
    transactions: Array<string>; // An array of transaction IDs associated with the product
    createdAt: string; // The creation timestamp
    updatedAt: string; // The update timestamp
}

export interface GetTransactionsResponse {
    id: string; // Unique identifier for the transactions response
    _id: string; // Another identifier for the transactions response
    __v: number; // Version number
    buyer: string; // The buyer of the transaction
    amount: number; // The amount of the transaction
    productIds: Array<string>; // An array of product IDs associated with the transaction
    createdAt: string; // The creation timestamp
    updatedAt: string; // The update timestamp
}
