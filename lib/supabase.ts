// lib/supabaseStorage.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Using SERVICE ROLE KEY
const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET_NAME = 'public-news';

// Enhanced file upload function with validation
export async function uploadImage(file: File) {
  // Validate file type
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Only JPEG, PNG, and WebP images are allowed');
  }

  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error('File size exceeds 5MB limit');
  }

  // Generate secure filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
  const filePath = `${fileName}`;

  // Upload with error handling
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: '3600', // 1 hour cache
      upsert: false
    });

  if (error) {
    console.error('Supabase upload error:', error);
    throw new Error('Failed to upload image');
  }

  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(data.path);

  return {
    path: data.path,
    url: publicUrl
  };
}

export async function deleteImage(imageUrl: string | null): Promise<void> {
  if (!imageUrl) return;

  try {
    // Extract path from full URL (handle both stored path and full URL)
    let path = imageUrl;
    if (imageUrl.includes(process.env.NEXT_PUBLIC_SUPABASE_URL!)) {
      path = imageUrl.split(`${BUCKET_NAME}/`)[1];
    } else if (imageUrl.startsWith(`${BUCKET_NAME}/`)) {
      path = imageUrl.replace(`${BUCKET_NAME}/`, '');
    }

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([path]);

    if (error) throw error;
  } catch (error) {
    console.error('Delete image error:', error);
    throw new Error('Gagal menghapus gambar');
  }
}

export { supabase };