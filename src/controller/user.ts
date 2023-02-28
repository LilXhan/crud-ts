import { Request, Response } from 'express'

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const users: User[]= [
  {
    id: 1,
    name: 'John Doe',
    email: 'mail@gmail.com',
    password: '123456'
  },  
  {
    id: 2,
    name: 'Jane Doe',
    email: 'mail2@gmail.com',
    password: '123456'  
  }
]

export const findAll = (req: Request, res: Response) => {
  res.json(users);
};

export const findById = (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | undefined = users.find((user) => user.id === Number(id));
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({message: ' user not found'})
  }
};

export const create = (req: Request, res: Response) => {
  const data = req.body;
  console.log(data)
  // we want add the id
  data.id = users.length + 1;
  users.push(data);
  res.status(201).json({
    ok: true,
    message: 'user created'
  });
};

export const update = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  users.forEach(user => {
    if (user.id === Number(id)){
      user.name = data.name;
      user.email = data.email;
      user.password = data.password;
    };
  });
  res.status(200).json({
    ok: true,
    message: 'user updated'
  });
};