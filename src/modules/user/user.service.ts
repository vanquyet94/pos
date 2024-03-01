import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserById(id: string):Promise<User> {
    return this.userModel.findOne({ _id: id });
  }

  async findUserByEmail(email: string):Promise<User> {
    return this.userModel.findOne({ email });
  }
}
