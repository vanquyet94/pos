import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Workspace, WorkspaceSchema } from './schemas/workspace.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Workspace.name, schema: WorkspaceSchema }])],
  providers: [WorkspaceService],
  exports: [WorkspaceService]
})
export class WorkspaceModule { }
