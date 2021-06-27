import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';

export default async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
	const { userId } = req;

	const userRepository = getCustomRepository(UserRepository);
	const user = await userRepository.findOne(userId);
	if (user?.admin) {
		return next();
	}
	return res.status(401).json({
		error: 'Unauthorized',
	});
}
