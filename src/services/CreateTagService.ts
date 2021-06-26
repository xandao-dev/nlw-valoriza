import { getCustomRepository } from 'typeorm';
import TagRepository from '../repositories/TagRepository';

interface ITagRequest {
	name: string;
}

export default class CreateTagService {
	async execute({ name }: ITagRequest) {
		const tagRepository = getCustomRepository(TagRepository);

		if (!name) {
			throw new Error('Invalid name');
		}

		const tagAlreadyExists = await tagRepository.findOne({
			name,
		});

		if (tagAlreadyExists) {
			throw new Error('Tag already exists');
		}

		const tag = tagRepository.create({
			name,
		});

		await tagRepository.save(tag);

		return tag;
	}
}
