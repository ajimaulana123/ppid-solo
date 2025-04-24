"use client"

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog'

import { TabsCekStatus } from "./Tabs"

export function DialogCekStatus() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="w-full px-4 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors shadow-sm hover:shadow-md transition-all p-6 text-center transform hover:-translate-y-1"
        >
          Cek Status
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <TabsCekStatus />
      </DialogContent>
    </Dialog>
  )
}