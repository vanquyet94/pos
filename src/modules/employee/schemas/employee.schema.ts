import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { AccessLevel } from '../employee.constant';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({
    timestamps: true,
    collection: "employees"
})
export class Employee {

    _id: string;

    @Prop({ type: SchemaTypes.String, required: true })
    nickname: string;

    @Prop({ type: SchemaTypes.String, required: false, default: null })
    avatar: string;

    @Prop({ type: SchemaTypes.String, required: false, default: AccessLevel.MEMBER, enum: AccessLevel })
    accessLevel: string;

    @Prop({ type: SchemaTypes.ObjectId, required: true, index: -1 })
    user: string;

    @Prop({ type: SchemaTypes.ObjectId, required: true, index: -1 })
    workspace: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
EmployeeSchema.index({
    workspace: -1,
    _id: -1,
});

EmployeeSchema.index({
    user: -1,
    workspace: -1
});
