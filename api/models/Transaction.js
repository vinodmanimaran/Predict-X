import mongoose from 'mongoose';
import {loadType} from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType (mongoose);

// Define the schema for a transaction
const TransactionSchema = new Schema (
  {
    buyer: {
      type: String, // Buyer name
      required: true, // Buyer field is required
    },
    amount: {
      type: mongoose.Types.Currency, // Amount value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
        ref: 'Product',
      },
    ],
  },
  {timestamps: true, toJSON: {getters: true}} // Enable timestamps and getters to convert values when converted to JSON
);

// Create the Transaction model using the Transaction schema
const Transaction = mongoose.model ('Transaction', TransactionSchema);

export default Transaction;
