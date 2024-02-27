import { Module } from '@nestjs/common';
import { AdminOrderResolver } from './admin-order.resolver';

@Module({
  providers: [AdminOrderResolver]
})
export class AdminOrderModule {}
