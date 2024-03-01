import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { User } from 'src/admin/admin-user/dto/admin-user.dto';
import { Employee } from 'src/admin/admin-employee/dto/admin-employee.dto';

@InputType()
export class LoginRequest {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;
}


@ObjectType()
export class LoginResponse {
  @Field(() => String, { nullable: true })
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken: string;

  @Field(() => User, { nullable: true })
  user: User;
}

@InputType()
export class LoginWorkspaceRequest {
  @Field(() => String, { nullable: false })
  workspace: string;
}


@ObjectType()
export class LoginWorkspaceResponse {
  @Field(() => String, { nullable: true })
  accessToken: string;

  @Field(() => Employee, { nullable: true })
  employee: Employee;
}