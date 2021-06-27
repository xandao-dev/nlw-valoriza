import { Request, Response } from 'express';
import ListUserReceiveComplimentsService from '../services/ListUserReceiveComplimentsService';

export default class ListUserReceiveComplimentsController {
	async handle(request: Request, response: Response) {
		const { userId } = request;
		const listUserReceiveComplimentsController = new ListUserReceiveComplimentsService();
		const compliments = await listUserReceiveComplimentsController.execute(userId);
		return response.json(compliments);
	}
}
