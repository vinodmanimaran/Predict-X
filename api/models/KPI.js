import mongoose from 'mongoose';
import {loadType} from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType (mongoose);

// Define the schema for a daily record
const daySchema = new Schema (
  {
    date: String, // Date of the record
    revenue: {
      type: mongoose.Types.Currency, // Revenue value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    expenses: {
      type: mongoose.Types.Currency, // Expenses value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
  },
  {toJSON: {getters: true}} // Enable getters to convert values when converted to JSON
);

// Define the schema for a monthly record
const monthSchema = new Schema (
  {
    month: String, // Month of the record
    revenue: {
      type: mongoose.Types.Currency, // Revenue value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    expenses: {
      type: mongoose.Types.Currency, // Expenses value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    operationalExpenses: {
      type: mongoose.Types.Currency, // Operational expenses value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency, // Non-operational expenses value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
  },
  {toJSON: {getters: true}} // Enable getters to convert values when converted to JSON
);

// Define the schema for category expenses
const categoryExpensesSchema = new Schema (
  {
    category: String, // Category name
    expenses: {
      type: mongoose.Types.Currency, // Expenses value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
  },
  {toJSON: {getters: true}} // Enable getters to convert values when converted to JSON
);

// Define the schema for the KPI object
const KPISchema = new Schema (
  {
    totalProfit: {
      type: mongoose.Types.Currency, // Total profit value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    totalRevenue: {
      type: mongoose.Types.Currency, // Total revenue value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    totalExpenses: {
      type: mongoose.Types.Currency, // Total expenses value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    expensesByCategory: [categoryExpensesSchema], // Array of category expenses
    monthlyData: [monthSchema], // Array of monthly records
    dailyData: [daySchema], // Array of daily records
  },
  {timestamps: true, toJSON: {getters: true}} // Enable timestamps and getters to convert values when converted to JSON
);

// Create the KPI model using the KPI schema
const KPI = mongoose.model ('KPI', KPISchema);

export default KPI;
