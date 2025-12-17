import { redirect } from 'next/navigation'
import { checkAuth } from '@/lib/checkAuth'
import AdminNav from '@/components/admin/adminNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const admin = await checkAuth()

  if (!admin) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav admin={admin} />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
