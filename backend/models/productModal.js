import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    product: { type: ObjectId, ref: "Product", required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    numReviews: { type: Number, default: 0 },
    quantity: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true, default: 0 },
    category: { type: ObjectId, ref: "Category", required: true },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
