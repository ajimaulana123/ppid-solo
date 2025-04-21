"use client"

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { SearchStatusPermohonan } from './SearchStatusPermohonan'
import { TableStatusPermohonan } from './TableStatusPermohonan'
import { PaginationStatusPermohonan } from './PaginationStatusPermohonan'
import { useToast } from '@/hooks/use-toast'
import type { StatusCheck } from '@/lib/status-check/schemaStatusCheck' // Sesuaikan dengan schema Anda

type ApiResponse = {
  data: StatusCheck[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export function DialogCekStatus() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    search: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const query = new URLSearchParams({
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
        search: pagination.search
      }).toString()

      const response = await fetch(`/api/status-check?${query}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: 'Gagal Memuat Data',
        description: 'Terjadi kesalahan saat memuat data permohonan.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }, [pagination.page, pagination.limit, pagination.search, toast])

  useEffect(() => {
    if (open) {
      fetchData()
    }
  }, [open, pagination.page, pagination.search, fetchData])

  const handleSearch = (searchTerm: string) => {
    setPagination(prev => ({ ...prev, search: searchTerm, page: 1 }))
  }

  const handlePageChange = (page: number) => {
    setPagination(prev => ({ ...prev, page }))
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="default"
          className="w-full px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1"
        >
          Cek Status
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Cek Status Permohonan</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <SearchStatusPermohonan 
            onSearch={handleSearch} 
            isLoading={isLoading}
          />
          
          <div className="rounded-lg border">
            <TableStatusPermohonan 
              data={data?.data || []} 
              isLoading={isLoading}
            />
          </div>
          
          {data && (
            <div className="flex justify-center">
              <PaginationStatusPermohonan
                currentPage={pagination.page}
                totalPages={data.meta.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}