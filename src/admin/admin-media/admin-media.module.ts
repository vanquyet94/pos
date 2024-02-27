import { Module } from '@nestjs/common';
import { AdminMediaResolver } from './admin-media.resolver';

@Module({
  providers: [AdminMediaResolver]
})
export class AdminMediaModule {}
