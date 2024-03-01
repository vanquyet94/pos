import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
    collection: "users"
})
export class User {

    _id: string;

    @Prop({ type: SchemaTypes.String, required: false, default: null })
    nickname: string;

    @Prop({ type: SchemaTypes.String, required: false, default: null })
    avatar: string;

    @Prop({ type: SchemaTypes.String, required: false, default: null })
    email: string;

    @Prop({ type: SchemaTypes.String, required: false, default: null })
    password: string;

    @Prop({ type: SchemaTypes.Boolean, required: false, default: true })
    hasPassword: boolean;

    @Prop({ type: SchemaTypes.Date, required: false, default: null })
    verifiedAt: Date;

    @Prop({ type: SchemaTypes.Date, required: false, default: null })
    blockedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
