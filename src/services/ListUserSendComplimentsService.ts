import { getCustomRepository } from 'typeorm';
import ComplimentRepository from '../repositories/ComplimentRepository';

export default class ListUserSendComplimentsService {
	async execute(userId: string) {
		const complimentRepository = getCustomRepository(ComplimentRepository);
		const compliments = await complimentRepository.find({
			where: {
				user_sender: userId,
			},
		});
		return compliments;
	}
}
