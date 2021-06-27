import { Response } from 'express';
import ListTagsService from '../services/ListTagsService';

export default class ListTagsController {
	async handle(res: Response) {
		const listTagsService = new ListTagsService();
		const tags = await listTagsService.execute();
		return res.json(tags);
	}
}
