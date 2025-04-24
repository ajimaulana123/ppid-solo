// hooks/useTableState.ts
import { useState } from 'react';

export const useTableState = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPage(1); // Reset ke halaman 1 saat pencarian baru
    setIsSearching(true);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return {
    searchTerm,
    page,
    isSearching,
    handleSearch,
    handlePageChange,
  };
};