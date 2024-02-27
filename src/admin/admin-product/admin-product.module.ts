import { Module } from '@nestjs/common';
import { AdminProductResolver } from './admin-product.resolver';

@Module({
  providers: [AdminProductResolver]
})
export class AdminProductModule {}
