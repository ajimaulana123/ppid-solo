// app/error.tsx
'use client';

export default function Error({ error }: { error: Error }) {
  if (error.message.includes('429')) {
    return (
      <div>
        <h1>Website sedang ramai!</h1>
        <p>Coba refresh atau kunjungi lagi nanti.</p>
      </div>
    );
  }
  return <div>Error tidak terduga</div>;
}