import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/modules/user/user.service';
import { TypeOfAccessToken } from '../admin-auth.constant';

@Injectable()
export class JwtWorkspaceStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly _userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    if (TypeOfAccessToken.WORKSPACE != payload?.t) {
      throw new UnauthorizedException();
    }
    const user = await this._userService.findUserById(payload?.u);
    if (!user || !payload) {
      throw new UnauthorizedException();
    }
    return user;
  }
}