import connectDB from "@/lib/mongoose";
import Product from "@/models/product";
import multer from "multer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true }); // Create directory if it doesn't exist
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disabling default bodyParser to use Multer
  },
};

// API Handler
export async function POST(req) {
  return new Promise((resolve, reject) => {
    upload.single("image")(req, {}, async (err) => {
      if (err) {
        return resolve(
          new NextResponse(
            JSON.stringify({ message: "File upload failed", error: err.message }),
            { status: 500 }
          )
        );
      }

      await connectDB();
        console.log(req.body.name,' ',req.body.category,' ',req.body.price)
      try {
        const { name, description, price, stock, category } = req.body;

        if (!name || !price || !category) {
          return resolve(
            new NextResponse(
              JSON.stringify({ message: "Name, price, and category are required" }),
              { status: 400 }
            )
          );
        }

        const imageUrl = req.file
          ? `/uploads/${req.file.filename}`
          : null;
          console.log(imageUrl)
        const newProduct = new Product({
          name,
          description,
          price,
          images: imageUrl ? [imageUrl] : [],
          stock,
          category,
        });

        await newProduct.save();

        return resolve(
          new NextResponse(
            JSON.stringify({ success: true, data: newProduct }),
            { status: 201 }
          )
        );
      } catch (error) {
        return resolve(
          new NextResponse(
            JSON.stringify({ message: "Something went wrong", error: error.message }),
            { status: 500 }
          )
        );
      }
    });
  });
}
