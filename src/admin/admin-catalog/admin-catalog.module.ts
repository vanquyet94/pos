import { Module } from '@nestjs/common';
import { AdminCatalogResolver } from './admin-catalog.resolver';

@Module({
  providers: [AdminCatalogResolver]
})
export class AdminCatalogModule {}
