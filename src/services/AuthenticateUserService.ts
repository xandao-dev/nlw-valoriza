import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UserRepository from '../repositories/UserRepository';

interface IAuthenticateRequest {
	email: string;
	password: string;
}

export default class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const userRepository = getCustomRepository(UserRepository);

		// Check if email exists
		const user = await userRepository.findOne({ email });
		if (!user) {
			throw new Error('Email/Password incorrect');
		}

		// Compare password
		const passwordMatch = await compare(password, user.password);

		if (!passwordMatch) {
			throw new Error('Email/Password incorrect');
		}

		// Generate Token
		// Secret token created from: https://www.md5hashgenerator.com/
		// TODO: add secret token to .env
		// TODO: jwt refresh token
		const token = sign(
			{
				email: user.email,
			},
			'29cb3ae4fa1449e3c7deb3658b69d414',
			{
				subject: user.id,
				expiresIn: '1d',
			}
		);

		return token;
	}
}
