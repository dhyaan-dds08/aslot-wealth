'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { LogOut, Plus, LayoutDashboard } from 'lucide-react'

interface AdminNavProps {
  admin: {
    id: string
    email: string
  }
}

export default function AdminNav({ admin }: AdminNavProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/admin/dashboard" className="text-xl font-bold">
              Aslot Admin
            </Link>
            <div className="flex gap-4">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <Link
                href="/admin/posts/new"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Plus size={18} />
                New Post
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">{admin.email}</span>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="text-black border-white/50 hover:bg-white hover:text-primary hover:border-white"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}