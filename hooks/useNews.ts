import useSWR from 'swr';

interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  data: News[];
  pagination?: {
    total: number | string;
    page?: number;
    limit?: number;
  };
}

interface NormalizedPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  searchQuery: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Gagal memuat data');
  return res.json();
};

export function useNews(page: number, searchQuery: string) {
  const { data, error, mutate } = useSWR<ApiResponse>(
    `/api/news?page=${page}&search=${encodeURIComponent(searchQuery)}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const normalizePagination = (): NormalizedPagination => {
    // Default values
    const defaultPagination = {
      currentPage: page,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 10,
      searchQuery
    };

    if (!data?.pagination) {
      return defaultPagination;
    }

    // Convert total to number if it's a string
    const total = typeof data.pagination.total === 'string' 
      ? parseInt(data.pagination.total, 10) 
      : data.pagination.total || 0;

    const limit = data.pagination.limit || 10;
    const currentPage = data.pagination.page || page;
    const totalPages = Math.ceil(total / limit);

    return {
      currentPage,
      totalPages: isNaN(totalPages) ? 1 : totalPages,
      totalItems: total,
      itemsPerPage: limit,
      searchQuery
    };
  };

  const deleteNews = async (id: number): Promise<void> => {
    try {
      await mutate(
        async (current: ApiResponse | undefined) => {
          if (!current) return undefined;

          // Optimistic update
          const newData = current.data.filter(item => item.id !== id);
          const newPagination = current.pagination
            ? { 
                ...current.pagination, 
                total: typeof current.pagination.total === 'number' 
                  ? current.pagination.total - 1 
                  : current.pagination.total
              }
            : undefined;

          // Actual API call
          const response = await fetch(`/api/news/${id}`, { method: 'DELETE' });
          if (!response.ok) throw new Error('Gagal menghapus berita');

          return {
            data: newData,
            pagination: newPagination
          };
        },
        {
          revalidate: true,
          rollbackOnError: true
        }
      );
    } catch (error) {
      console.error('Delete error:', error);
      throw error;
    }
  };

  const pagination = normalizePagination();

  return {
    newsData: data?.data || [],
    pagination,
    isLoading: !error && !data,
    error,
    mutateNews: mutate,
    deleteNews
  };
}