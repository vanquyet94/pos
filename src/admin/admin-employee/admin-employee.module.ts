import { Module } from '@nestjs/common';
import { AdminEmployeeResolver } from './admin-employee.resolver';

@Module({
  providers: [AdminEmployeeResolver]
})
export class AdminEmployeeModule {}
