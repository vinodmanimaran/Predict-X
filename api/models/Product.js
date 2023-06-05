import mongoose from 'mongoose';
import { loadType } from 'mongoose-currency';

const Schema = mongoose.Schema;
loadType(mongoose);

// Define the schema for a product
const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency, // Price value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    expense: {
      type: mongoose.Types.Currency, // Expense value of type Currency
      currency: 'USD', // Currency type is USD
      get: v => v / 100, // Convert stored value (cents) to dollars when retrieved
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Transaction model
        ref: 'Transaction',
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } } // Enable timestamps and getters to convert values when converted to JSON
);

// Create the Product model using the Product schema
const Product = mongoose.model('Product', ProductSchema);

export default Product;
