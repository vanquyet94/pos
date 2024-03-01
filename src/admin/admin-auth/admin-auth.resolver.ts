import { UnauthorizedException } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { LoginRequest, LoginResponse, LoginWorkspaceRequest, LoginWorkspaceResponse } from './dto/admin-auth.dto';
import { UserService } from 'src/modules/user/user.service';
import { AdminAuthService } from './admin-auth.service';

@Resolver()
export class AdminAuthResolver {

    constructor(
        private readonly _userService: UserService,
        private readonly _adminAuthService: AdminAuthService
    ) { }

    @Query(() => LoginResponse)
    async login(@Args('payload') payload: LoginRequest) {
        const { email, password } = payload;
        const user = await this._userService.findUserByEmail(email);
        if (!user) {
            throw new UnauthorizedException("a");
        }
        const [accessToken, refreshToken] = await Promise.all([
            this._adminAuthService.createAccessTokenUser(),
            this._adminAuthService.createRefreshTokenUser()
        ]);
        return {
            accessToken,
            refreshToken,
            user
        };
    }

    @Query(() => LoginWorkspaceResponse)
    async loginWorkspace(@Args('payload') payload: LoginWorkspaceRequest) {
        const { workspace } = payload;
        return {
            accessToken: "",
            employee: {}
        };
    }
}
