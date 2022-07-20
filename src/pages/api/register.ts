import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

async function connect(uri: string) {
  const client = await MongoClient.connect(uri)
  const dbName = 'consumers'
  const db = client.db(dbName)
  return db
}

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body

  const db = await connect(`${process.env.MONGODB_URL}`)
  const collection = db.collection('consumer')

  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        res.json(err)
      } else {
        await collection.insertOne({
          email,
          hash
        })
        res.json({ email, hash })
      }
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
