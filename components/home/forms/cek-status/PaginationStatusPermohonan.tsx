import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import { Button } from "@/components/ui/button"
  
  interface PaginationStatusPermohonanProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
  }
  
  export function PaginationStatusPermohonan({
    currentPage,
    totalPages,
    onPageChange,
  }: PaginationStatusPermohonanProps) {
    const renderPageNumbers = () => {
      if (totalPages <= 1) return null
  
      const pages = []
      const maxVisiblePages = 5
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
  
      // Adjust if we're at the beginning or end
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
      }
  
      // Show ellipsis at start if needed
      if (startPage > 1) {
        pages.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        )
      }
  
      // Page numbers
      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onPageChange(i)
              }}
              isActive={i === currentPage}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        )
      }
  
      // Show ellipsis at end if needed
      if (endPage < totalPages) {
        pages.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        )
      }
  
      return pages
    }
  
    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="ghost"
              className="gap-1 pl-2.5"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              aria-label="Previous page"
            >
              <PaginationPrevious />
            </Button>
          </PaginationItem>
  
          {renderPageNumbers()}
  
          <PaginationItem>
            <Button
              variant="ghost"
              className="gap-1 pr-2.5"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              aria-label="Next page"
            >
              <PaginationNext />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  }