// components/VisitorCounter.tsx
'use client';
import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Ambil dari localStorage
    const localCount = localStorage.getItem('visitorCount');
    const newCount = localCount ? parseInt(localCount) + 1 : 1;
    
    // 2. Simpan ke localStorage
    localStorage.setItem('visitorCount', newCount.toString());
    
    // 3. Kirim ke API (untuk akumulasi server-side)
    fetch('/api/visitors', { method: 'POST' });
    
    setCount(newCount);
  }, []);

  return <p className="text-2xl font-bold text-white">{count}</p>;
}
