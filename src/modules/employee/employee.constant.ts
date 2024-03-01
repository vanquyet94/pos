import { registerEnumType } from '@nestjs/graphql';

export enum AccessLevel {
    OWNER = 'OWNER',
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}
registerEnumType(AccessLevel, {
    name: 'AccessLevel',
});
