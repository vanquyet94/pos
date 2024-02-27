import { Module } from '@nestjs/common';
import { AdminUserResolver } from './admin-user.resolver';

@Module({
  providers: [AdminUserResolver]
})
export class AdminUserModule {}
