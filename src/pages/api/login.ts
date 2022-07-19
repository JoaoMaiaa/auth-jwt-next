import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

async function connect(uri: string) {
  const client = await MongoClient.connect(uri)
  const dbName = 'consumers'
  const db = client.db(dbName)
  return db
}

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body

  // const db = await connect(`${process.env.MONGODB_URL}`)
  // const collection = db.collection('consumer')

  try {
    bcrypt.hash(password, 10, function (err, hashedPassword) {
      if (err) {
        res.json(err)
      } else {
        // await collection.insertOne({
        //   email,
        //   hashedPassword
        // })
        res.json({ email, hashedPassword })
      }
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
