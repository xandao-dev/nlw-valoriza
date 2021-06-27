import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';

export default class ListUserReceiveComplimentsService {
	async execute() {
		const userRepository = getCustomRepository(UserRepository);
		const users = await userRepository.find();
		const usersWithoutPassword = users.map((user) => {
			const { password, ...userInfo } = user;
			return userInfo;
		});

		return usersWithoutPassword;
	}
}
