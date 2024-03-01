import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }])],
  providers: [EmployeeService],
  exports: [EmployeeService]
})
export class EmployeeModule {}
