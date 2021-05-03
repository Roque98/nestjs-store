import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dto/product.dto';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService){}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Param('productId', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }


  @Post()
  createProduct(@Body() payload:CreateProductDto){
    return this.productService.create(payload);
  }

  @Put(':id')
  updateProuduct(@Param('id') id: number, @Body() payload: UpdateProductDto){
    return this.productService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
