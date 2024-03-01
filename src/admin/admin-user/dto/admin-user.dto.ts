import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field(() => String, { nullable: true })
    avatar: string;

    @Field(() => String, { nullable: true })
    nickname: string;

    @Field(() => String, { nullable: true })
    email: string;
}