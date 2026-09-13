'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff } from 'lucide-react'
import { BlogPost } from '@/types/blog'

interface TogglePostButtonProps {
  post: BlogPost
}

export default function TogglePostButton({ post }: TogglePostButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)

    try {
      const response = await fetch('/api/posts/toggle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: post.id, 
          active: !post.active 
        }),
      })

      if (response.ok) {
        router.refresh()
      }
    } catch (error) {
      console.error('Toggle error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleToggle}
      disabled={loading}
      variant={post.active ? 'outline' : 'forest'}
      size="sm"
      className={post.active ? '' : 'bg-green-600 hover:bg-green-700 text-white'}
    >
      {post.active ? <EyeOff size={16} /> : <Eye size={16} />}
    </Button>
  )
}