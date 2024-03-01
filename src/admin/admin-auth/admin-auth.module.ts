import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminAuthResolver } from './admin-auth.resolver';
import { JwtAuthStrategy } from './guards/jwt-auth-guard';
import { JwtWorkspaceStrategy } from './guards/jwt-workspace-guard';
import { UserModule } from 'src/modules/user/user.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { AdminAuthService } from './admin-auth.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN },
    }),
    UserModule,
    EmployeeModule
  ],
  providers: [AdminAuthResolver, JwtAuthStrategy, JwtWorkspaceStrategy, AdminAuthService]
})
export class AdminAuthModule { }
