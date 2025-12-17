import { cookies } from 'next/headers'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function checkAuth(): Promise<{ id: string; email: string } | null> {
  try {
    const cookieStore = await cookies()
    const adminId = cookieStore.get('admin-session')?.value

    if (!adminId) {
      return null
    }

    const supabase = await createServerSupabaseClient()
    const { data: admin, error } = await supabase
      .from('admins')
      .select('id, email')
      .eq('id', adminId)
      .single()

    if (error || !admin) {
      return null
    }

    return admin
  } catch {
    return null
  }
}