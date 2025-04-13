import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model'

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

  
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe.' })
    }

 
    const hashedPassword = await bcrypt.hash(password, 10)

 
    const newUser = await User.create({ email, password: hashedPassword })
    return res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Erro interno do servidor.' })
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body


    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas.' })
    }


    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Credenciais inválidas.' })
    }


    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    )

    return res.status(200).json({ message: 'Login bem-sucedido!', token })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno do servidor.' })
  }
}
