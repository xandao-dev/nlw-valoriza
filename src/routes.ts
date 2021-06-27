import { Router } from 'express';
import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthenticated from './middlewares/ensureAuthenticated';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController';
import CreateComplimentController from './controllers/CreateComplimentController';
import ListUserSendComplimentsController from './controllers/ListUserSendComplimentsController';
import ListUserReceiveComplimentsController from './controllers/ListUserReceiveComplimentsController';

const router = Router();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get('/user/compliments/sent', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/user/compliments/received', ensureAuthenticated, listUserReceiveComplimentsController.handle);

export default router;
