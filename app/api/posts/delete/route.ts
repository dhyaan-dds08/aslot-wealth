import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/client'
import { checkAuth } from '@/lib/checkAuth'

export async function POST(request: Request) {
  try {
    const admin = await checkAuth()
    if (!admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id, active } = await request.json()

    const supabase = createClient()
    const { error } = await supabase
      .from('posts')
      .update({ active })
      .eq('id', id)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Toggle error:', error)
    return NextResponse.json(
      { error: 'Failed to toggle post' },
      { status: 500 }
    )
  }
}