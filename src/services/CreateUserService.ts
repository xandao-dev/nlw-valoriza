import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import UserRepository from '../repositories/UserRepository';

interface IUserRequest {
	name: string;
	email: string;
	admin?: boolean;
	password: string;
}

export default class CreateUserService {
	async execute({ name, email, admin = false, password }: IUserRequest) {
		const userRepository = getCustomRepository(UserRepository);

		if (!email) {
			throw new Error('Invalid email');
		}

		const userAlreadyExists = await userRepository.findOne({
			email,
		});

		if (userAlreadyExists) {
			throw new Error('User already exists');
		}

		if (!password) {
			throw new Error('Invalid password');
		}

		const passwordHash = await hash(password, 8);

		const user = userRepository.create({
			name,
			email,
			admin,
			password: passwordHash,
		});

		await userRepository.save(user);

		return user;
	}
}
