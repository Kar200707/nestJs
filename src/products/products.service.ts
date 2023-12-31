import { Injectable } from '@nestjs/common';
import { CreateProductDto } from "./dto/create-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }

  private products = []

  async getAll():Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async getById (id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async create(productDio: CreateProductDto) {
    const newProduct = await this.productModel.create(productDio)
    return newProduct.save()
  }
}
