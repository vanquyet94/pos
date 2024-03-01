import { Field, ObjectType, InputType, ID } from '@nestjs/graphql';

@ObjectType()
export class Employee {
    @Field(() => ID, { nullable: true })
    id: string;

    @Field(() => String, { nullable: true })
    avatar: string;
}