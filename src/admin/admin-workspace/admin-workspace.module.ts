import { Module } from '@nestjs/common';
import { AdminWorkspaceResolver } from './admin-workspace.resolver';
import { WorkspaceModule } from 'src/modules/workspace/workspace.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';

@Module({
  imports: [WorkspaceModule, EmployeeModule],
  providers: [AdminWorkspaceResolver]
})
export class AdminWorkspaceModule {}
