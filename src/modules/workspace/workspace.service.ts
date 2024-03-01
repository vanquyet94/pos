import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Workspace } from './schemas/workspace.schema';

@Injectable()
export class WorkspaceService {

    constructor(@InjectModel(Workspace.name) private workspaceModel: Model<Workspace>) {}

}
