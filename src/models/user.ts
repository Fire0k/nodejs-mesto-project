import mongoose from 'mongoose';
import { isEmail, isURL } from 'validator';

interface IUser {
  name: string;
  about: string;
  avatar: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'Жак-Ив Кусто',
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    default: 'Исследователь',
    minlength: 2,
    maxlength: 200,
  },
  avatar: {
    type: String,
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    validate: {
      validator: (url: string) => isURL(url),
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email: string) => isEmail(email),
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
});

export default mongoose.model<IUser>('user', userSchema);
