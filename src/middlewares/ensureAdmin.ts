import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import User from '../entities/User';
import UserRepository from '../repositories/UserRepository';

export default async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
	const { userId } = req;

	const userRepository = getCustomRepository(UserRepository);
	const { admin } = (await userRepository.findOne(userId)) as User;
	if (admin) {
		return next();
	}
	return res.status(401).json({
		error: 'Unauthorized',
	});
}
