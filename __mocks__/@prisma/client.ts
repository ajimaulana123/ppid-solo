import { jest } from '@jest/globals'

const mockPrismaClient = () => {
  const mock = {
    requestPeople: {
      findFirst: jest.fn(),
      create: jest.fn(),
    },
    $disconnect: jest.fn(),
  }
  return mock
}

const prisma = mockPrismaClient()
export default prisma