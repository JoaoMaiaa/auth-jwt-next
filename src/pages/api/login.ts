import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_TOKEN

let cachedDb: Db

async function connect(uri: string) {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri)
  const dbName = 'consumers'
  const db = client.db(dbName)
  cachedDb = db
  return db
}

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  const db = await connect(`${process.env.MONGODB_URL}`)
  const collection = db.collection('consumer')

  const consumer = await collection.find({ email }).toArray()
  try {
    if (!consumer.map((cons) => cons.email).toString()) {
      res.status(401).json({ message: 'Erro na senha ou no email' })
    } else {
      const hash = consumer.map((cons) => cons.hash).toString()
      bcrypt.compare(password, hash, function (err, same) {
        if (!same) {
          res.status(401).json({ message: 'Erro na senha ou no email' })
        } else {
          const token = jwt.sign({ email }, `${secret}`, { expiresIn: '2d' })
          res.json({ email, token })
        }
      })
    }
  } catch (error) {
    res.json(error)
  }
}
