import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminAuthResolver } from './admin-auth.resolver';
import { JwtStrategy } from './guards/jwt-auth-guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AdminAuthResolver, JwtStrategy]
})
export class AdminAuthModule { }
