import { Router } from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => {
    res.send({ title: 'CREATES user' });
});

userRouter.put('/:id', (req, res) => {
    res.send({ title: 'UPDATES a user' });
});
userRouter.delete('/:id', (req, res) => {
    res.send({ title: 'DELETES a user' });
});

export default userRouter;