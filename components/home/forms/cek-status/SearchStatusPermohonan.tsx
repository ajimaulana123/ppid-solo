import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Loader2 } from "lucide-react";

interface SearchStatusPermohonanProps {
    onSearch: (term: string) => void;
    isLoading: boolean;
}

export function SearchStatusPermohonan({ onSearch, isLoading }: SearchStatusPermohonanProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
                placeholder="Cari berdasarkan Nama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Cari'}
            </Button>
        </form>
    );
}