import { Module } from '@nestjs/common';
import { WorkspaceModule } from './workspace/workspace.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CatalogModule } from './catalog/catalog.module';
import { CustomerModule } from './customer/customer.module';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [WorkspaceModule, ProductModule, OrderModule, CatalogModule, CustomerModule, EmployeeModule, UserModule, MediaModule],
})
export class ModulesModule {}
