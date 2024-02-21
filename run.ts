import { PrismaClient } from '@prisma/client'
import Decimal from 'decimal.js'

const prisma = new PrismaClient()

await prisma.secondModel.deleteMany()
await prisma.firstModel.deleteMany()

await prisma.firstModel.create({
  data: {
    secondModels: {
      create: [{ value: new Decimal('95993.57') }],
    },
  },
})

const queryResult = (await prisma.firstModel.findFirstOrThrow({
  relationLoadStrategy: 'query',
  include: { secondModels: true },
})).secondModels[0].value

const joinResult = (await prisma.firstModel.findFirstOrThrow({
  relationLoadStrategy: 'join',
  include: { secondModels: true },
})).secondModels[0].value


console.log(queryResult) // 95993.57
console.log(joinResult) // 95993.57000000001
