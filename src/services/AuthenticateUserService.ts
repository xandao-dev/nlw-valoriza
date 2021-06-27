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

		const secretKey = process.env.JWT_SECRET_KEY;
		if (!secretKey) {
			throw new Error(`Internal Error: Missing JWT SECRET KEY`);
		}
		// Generate Token
		// TODO: jwt refresh token
		const token = sign(
			{
				email: user.email,
			},
			secretKey,
			{
				subject: user.id,
				expiresIn: '1d',
			}
		);

		return token;
	}
}
