import { Module } from '@nestjs/common';
import { AdminCustomerResolver } from './admin-customer.resolver';

@Module({
  providers: [AdminCustomerResolver]
})
export class AdminCustomerModule {}
