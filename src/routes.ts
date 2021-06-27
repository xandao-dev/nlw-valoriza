import { Router } from 'express';
import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthenticated from './middlewares/ensureAuthenticated';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController';
import CreateComplimentController from './controllers/CreateComplimentController';
import AdminUpdateUserController from './controllers/AdminUpdateUserController';
import ListUserSendComplimentsController from './controllers/ListUserSendComplimentsController';
import ListUserReceiveComplimentsController from './controllers/ListUserReceiveComplimentsController';
import ListTagsController from './controllers/ListTagsController';
import ListUsersController from './controllers/ListUsersController';

const router = Router();
const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listTagsController = new ListTagsController();
const adminUpdateUserController = new AdminUpdateUserController();

router.post('/login', authenticateUserController.handle);
router.post('/users', createUserController.handle);
router.put('/users', ensureAuthenticated, ensureAdmin, adminUpdateUserController.handle);
router.get('/users', ensureAuthenticated, ensureAdmin, listUsersController.handle);
router.get('/user/compliments/sent', ensureAuthenticated, listUserSendComplimentsController.handle);
router.get('/user/compliments/received', ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

export default router;
