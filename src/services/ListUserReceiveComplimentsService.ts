import { getCustomRepository } from 'typeorm';
import ComplimentRepository from '../repositories/ComplimentRepository';

export default class ListUserReceiveComplimentsService {
	async execute(userId: string) {
		const complimentRepository = getCustomRepository(ComplimentRepository);
		const compliments = await complimentRepository.find({
			where: {
				user_receiver: userId,
			},
		});
		return compliments;
	}
}
