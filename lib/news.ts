import { supabase } from './supabase'; // Make sure you have this configured

export interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

const BUCKET_NAME = "public-news"

export async function getNewsById(id: number): Promise<News | null> {
  const { data, error } = await supabase
    .from('public-news')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching news:', error);
    return null;
  }

  return data;
}

export async function deleteImage(filePath: string) {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath]);
  
    if (error) {
      console.error('Supabase delete error:', error);
      throw new Error('Failed to delete image');
    }
  }