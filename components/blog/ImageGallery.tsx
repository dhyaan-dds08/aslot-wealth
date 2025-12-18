'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageGalleryProps {
  images: string[]
  title: string
  thumbnailStartIndex?: number
}

export default function ImageGallery({ images, title, thumbnailStartIndex = 0 }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openGallery = (thumbnailIndex: number) => {
    // Adjust the actual index based on thumbnailStartIndex
    setCurrentIndex(thumbnailIndex + thumbnailStartIndex)
    setIsOpen(true)
  }

  const closeGallery = () => {
    setIsOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Add keyboard event listener with useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') closeGallery()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, images.length])

  // Get thumbnails to display (starting from thumbnailStartIndex)
  const thumbnails = images.slice(thumbnailStartIndex)

  return (
    <>
      {/* Thumbnail Grid */}
      <div className={`grid gap-6 ${
        thumbnails.length === 1 ? 'md:grid-cols-1' :
        thumbnails.length === 2 ? 'md:grid-cols-2' : 
        thumbnails.length === 3 ? 'md:grid-cols-3' : 
        'md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {thumbnails.map((image: string, index: number) => (
          <button
            key={index}
            onClick={() => openGallery(index)}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 aspect-[4/3] group cursor-pointer"
          >
            <img
              src={image}
              alt={`${title} - Image ${index + thumbnailStartIndex + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                View Full Size
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <Button
            onClick={closeGallery}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
          >
            <X size={32} />
          </Button>

          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              onClick={goToPrevious}
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20 h-16 w-16"
            >
              <ChevronLeft size={48} />
            </Button>
          )}

          {/* Current Image */}
          <div className="relative max-w-7xl max-h-[90vh] mx-auto px-4">
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              onClick={goToNext}
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20 h-16 w-16"
            >
              <ChevronRight size={48} />
            </Button>
          )}
        </div>
      )}
    </>
  )
}