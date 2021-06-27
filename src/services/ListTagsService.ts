import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';
import TagRepository from '../repositories/TagRepository';

export default class ListTagsService {
	async execute() {
		const tagRepository = getCustomRepository(TagRepository);
		const tags = await tagRepository.find();
		return classToPlain(tags);
	}
}
