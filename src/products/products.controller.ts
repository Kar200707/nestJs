import {
  Body,
  Controller,
  Delete,
  Get, Header,
  HttpCode, HttpStatus,
  Param,
  Post,
  Put,
  Redirect
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDio } from "./dto/update-product.dio";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

  constructor(private readonly priductsServ: ProductsService) { }

  @Get()
  // @Redirect('https://google.com', 301)
  getAll() {
    return this.priductsServ.getAll()
  }

  @Get(':id')
  getOne(@Param('id') param){
    console.log(param);
    return this.priductsServ.getById(param)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() creadeProduct: CreateProductDto){
    console.log(creadeProduct);
    return this.priductsServ.create(creadeProduct)
  }

  @Delete(':id')
  remove(@Param('id') id: number):string {
    return `remove ${id}`
  }

  @Put(':id')
  update(@Body() updateProduct: UpdateProductDio, @Param('id') id: string){
    return 'Update ' + id;
  }
}
