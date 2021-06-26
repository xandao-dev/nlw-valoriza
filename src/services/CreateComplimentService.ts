import { getCustomRepository } from 'typeorm';
import ComplimentRepository from '../repositories/ComplimentRepository';
import UserRepository from '../repositories/UserRepository';

interface IComplimentRequest {
	tagId: string;
	userSender: string;
	userReceiver: string;
	message: string;
}
export default class CreateComplimentService {
	async execute({ tagId, userSender, userReceiver, message }: IComplimentRequest) {
		const complimentRepository = getCustomRepository(ComplimentRepository);
		const userRepository = getCustomRepository(UserRepository);

		// Check if user receiver is different from user sender
		if (userSender === userReceiver) {
			throw new Error('Incorrect User Receiver');
		}

		// Check if user receiver exists in db
		const userReceiverExists = await userRepository.findOne(userReceiver);
		if (!userReceiverExists) {
			throw new Error('User Receiver does not exists!');
		}

		const compliment = complimentRepository.create({
			tag_id: tagId,
			user_sender: userSender,
			user_receiver: userReceiver,
			message,
		});

		await complimentRepository.save(compliment);

		return compliment;
	}
}
