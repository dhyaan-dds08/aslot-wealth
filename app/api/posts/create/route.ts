import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { checkAuth } from '@/lib/checkAuth'

export async function POST(request: Request) {
  try {
    const admin = await checkAuth()
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { title, content, images, active } = await request.json()

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    const supabase = await createServerSupabaseClient(true)
    
    const { data, error } = await supabase
      .from('posts')
      .insert({
        title,
        content,
        images: images || [],
        active: active ?? true, // Default to active if not specified
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    return NextResponse.json({ success: true, post: data })
  } catch (error) {
    console.error('Create post error:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}