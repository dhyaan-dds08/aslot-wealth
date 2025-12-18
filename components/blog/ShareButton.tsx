'use client'

import { Button } from '@/components/ui/button'
import { Share2, Check } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonProps {
  title: string
  variant?: 'icon' | 'button'
}

export default function ShareButton({ title, variant = 'icon' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href

    // Try native share first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        })
        return
      } catch (err) {
        // User cancelled or share failed, fall through to copy
      }
    }

    // Fallback to copying URL
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (variant === 'button') {
    return (
      <Button
        onClick={handleShare}
        variant="outline"
        size="lg"
        className="font-semibold"
      >
        {copied ? (
          <>
            <Check className="mr-2" size={18} />
            Link Copied!
          </>
        ) : (
          <>
            <Share2 className="mr-2" size={18} />
            Share
          </>
        )}
      </Button>
    )
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
    >
      {copied ? (
        <>
          <Check size={16} />
          <span>Link copied!</span>
        </>
      ) : (
        <>
          <Share2 size={16} />
          <span>Share this article</span>
        </>
      )}
    </button>
  )
}