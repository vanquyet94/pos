import { Module } from '@nestjs/common';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { AdminWorkspaceModule } from './admin-workspace/admin-workspace.module';
import { AdminEmployeeModule } from './admin-employee/admin-employee.module';
import { AdminUserModule } from './admin-user/admin-user.module';
import { AdminProductModule } from './admin-product/admin-product.module';
import { AdminOrderModule } from './admin-order/admin-order.module';
import { AdminMediaModule } from './admin-media/admin-media.module';
import { AdminCustomerModule } from './admin-customer/admin-customer.module';
import { AdminCatalogModule } from './admin-catalog/admin-catalog.module';
import { AdminMembershipModule } from './admin-membership/admin-membership.module';

@Module({
  imports: [AdminAuthModule, AdminWorkspaceModule, AdminEmployeeModule, AdminUserModule, AdminProductModule, AdminOrderModule, AdminMediaModule, AdminCustomerModule, AdminCatalogModule, AdminMembershipModule]
})
export class AdminModule {}
