import { POST } from '@/app/api/request/route'
import { NextResponse } from 'next/server'

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn(() => ({
      requestPeople: {
        findFirst: jest.fn(),
        create: jest.fn(),
      },
      $disconnect: jest.fn(),
    })),
  }
})

const { PrismaClient } = require('@prisma/client')
const mockPrisma = new PrismaClient()

describe('POST /api/request', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const createMockRequest = (body: any) => {
    return new Request('https://3000-idx-ppid-solo-1744806238901.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev/api/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  }

  it('should return 201 and create new request', async () => {
    const mockData = {
      fullName: 'John Doe',
      nik: '1234567890123456',
      phone: '12345678',
      email: 'john@example.com',
      detailInformation: 'Some detailed information here',
    }

    mockPrisma.requestPeople.findFirst.mockResolvedValue(null)
    mockPrisma.requestPeople.create.mockResolvedValue({
      id: 1,
      ...mockData,
      createdAt: new Date(),
    })

    const req = createMockRequest(mockData)
    const response = await POST(req)
    const data = await response.json()

    expect(response.status).toBe(201)
    expect(data).toMatchObject(mockData)
  })

  it('should return 400 when NIK or Email already exists', async () => {
    const mockData = {
      fullName: 'John Doe',
      nik: '1234567890123456',
      phone: '12345678',
      email: 'john@example.com',
      detailInformation: 'Some detailed information here',
    }

    mockPrisma.requestPeople.findFirst.mockResolvedValue({
      id: 1,
      ...mockData,
      createdAt: new Date(),
    })

    const req = {
      json: jest.fn().mockResolvedValue(mockData),
    } as any

    const response = await POST(req)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('NIK atau Email sudah terdaftar')
    expect(mockPrisma.requestPeople.create).not.toHaveBeenCalled()
  })

  it('should return 400 when validation fails', async () => {
    const invalidData = {
      fullName: 'J', // Too short
      nik: '123', // Not 16 chars
      phone: '123', // Too short
      email: 'invalid-email', // Invalid email
      detailInformation: 'Short', // Too short
    }

    const req = {
      json: jest.fn().mockResolvedValue(invalidData),
    } as any

    const response = await POST(req)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.error).toBe('Validasi gagal')
    expect(data.details).toBeDefined()
    expect(mockPrisma.requestPeople.findFirst).not.toHaveBeenCalled()
    expect(mockPrisma.requestPeople.create).not.toHaveBeenCalled()
  })

  it('should return 500 when unexpected error occurs', async () => {
    const mockData = {
      fullName: 'John Doe',
      nik: '1234567890123456',
      phone: '12345678',
      email: 'john@example.com',
      detailInformation: 'Some detailed information here',
    }

    mockPrisma.requestPeople.findFirst.mockRejectedValue(new Error('Database error'))

    const req = {
      json: jest.fn().mockResolvedValue(mockData),
    } as any

    const response = await POST(req)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.error).toBe('Internal server error')
  })
})