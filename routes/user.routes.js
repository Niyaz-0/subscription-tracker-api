import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({ title: 'GET all users' });
});

userRouter.get('/:id', (req, res) => {
    res.send({ title: 'GET specific user details' });
});

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