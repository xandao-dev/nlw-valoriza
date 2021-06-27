import { Request, Response } from 'express';
import ListUsersService from '../services/ListUsersService';

export default class ListTagsController {
	async handle(req: Request, res: Response) {
		const listUsersService = new ListUsersService();
		const users = await listUsersService.execute();
		return res.json(users);
	}
}
