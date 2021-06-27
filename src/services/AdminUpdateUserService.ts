import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import { classToPlain } from 'class-transformer';
import UserRepository from '../repositories/UserRepository';

interface IUserRequest {
	id: string;
	name: string;
	email: string;
	password: string;
	admin?: boolean;
}

export default class AdminUpdateUserService {
	async execute({ id, name, email, password, admin = false }: IUserRequest) {
		const userRepository = getCustomRepository(UserRepository);
		const editingUserInstance = await userRepository.findOne(id);

		// Check if editing user exists
		if (!editingUserInstance) {
			throw new Error('Invalid user');
		}

		if (!password) {
			throw new Error('ok');
		}

		// If already exists a different user with the same email throw an error
		const userAlreadyExists = await userRepository.findOne({ email });
		if (userAlreadyExists && userAlreadyExists?.id !== id) {
			throw new Error('User already exists');
		}

		if (!password) {
			throw new Error('Invalid password');
		}

		userRepository.update(id, {
			name,
			email,
			admin,
			password: await hash(password, 8),
		});

		const editedUser = await userRepository.findOne(id);
		return classToPlain(editedUser);
	}
}
