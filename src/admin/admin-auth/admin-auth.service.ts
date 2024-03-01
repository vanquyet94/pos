import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminAuthService {
    async createAccessTokenUser() {
        return "1";
    }


    async createRefreshTokenUser() {
        return "2";
    }

    async createAccessTokenWorkspace() {
        return "3";
    }
}
