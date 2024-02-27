import { Module } from '@nestjs/common';
import { AdminWorkspaceResolver } from './admin-workspace.resolver';

@Module({
  providers: [AdminWorkspaceResolver]
})
export class AdminWorkspaceModule {}
