import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type WorkspaceDocument = HydratedDocument<Workspace>;

@Schema({
    timestamps: true,
    collection: "workspaces"
})
export class Workspace {

    _id: string;

    @Prop({ type: SchemaTypes.String, required: true })
    name: string;

    @Prop({ type: SchemaTypes.String, required: false, default: null })
    logo: string;
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
