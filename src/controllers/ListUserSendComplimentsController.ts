import { Request, Response } from 'express';
import ListUserSendComplimentsService from '../services/ListUserReceiveComplimentsService';

export default class ListUserReceiveComplimentsController {
	async handle(request: Request, response: Response) {
		const { userId } = request;
		const listUserSendComplimentsController = new ListUserSendComplimentsService();
		const compliments = await listUserSendComplimentsController.execute(userId);
		return response.json(compliments);
	}
}
