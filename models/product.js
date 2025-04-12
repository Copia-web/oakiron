import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ type: String }], // Array of image URLs
  stock: { type: Number, default: 0 },
  category: {
    type:String,
    enum: ['office setup','living room','bedroom','dining','outdoor'],
  },
  createdAt: { type: Date, default: Date.now },
});

ProductSchema.virtual('stocks').get(function(){
if(this.stock > 0){
  return {status: 'available'};
}else{
  return {status :'out of stock'}
}
})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
