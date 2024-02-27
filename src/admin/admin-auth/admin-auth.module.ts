import { Module } from '@nestjs/common';
import { AdminAuthResolver } from './admin-auth.resolver';

@Module({
  providers: [AdminAuthResolver]
})
export class AdminAuthModule {}
