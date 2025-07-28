"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/foto/foto 1.jpeg",
    alt: "Foto 1",
    title: "Foto 1",
    date: "2024-01-15",
    description: "Pemandangan indah sawah hijau yang membentang luas dengan latar belakang perbukitan",
  },
  {
    id: 2,
    src: "/foto/foto 2.jpeg",
    alt: "/foto/foto 2.jpeg",
    title: "Foto 2",
    date: "2024-01-10",
    description: "Kantor Hukum Tua Desa Tumaluntung Satu yang menjadi pusat pelayanan masyarakat",
  },
  {
    id: 3,
    src: "/foto/foto 3.jpeg",
    alt: "Foto 3",
    title: "Foto 3",
    date: "2024-01-08",
    description: "Kegiatan gotong royong masyarakat dalam membersihkan dan memperbaiki jalan desa",
  },
  {
    id: 4,
    src: "/foto/foto 4.jpeg",
    alt: "Foto 4",
    title: "Foto 4",
    date: "2024-01-05",
    description: "Petani desa sedang bekerja mengolah tanah di area persawahan",
  },
  {
    id: 5,
    src: "/foto/foto 5.jpeg",
    alt: "Foto 5",
    title: "Foto 5",
    date: "2024-08-17",
    description: "Perayaan Hari Kemerdekaan Indonesia ke-79 di lapangan desa",
  },
  {
    id: 6,
    src: "/foto/foto 6.jpeg",
    alt: "Foto 6",
    title: "Foto 6",
    date: "2024-01-12",
    description: "Jalan utama desa yang telah diaspal dengan pepohonan rindang di kiri kanan",
  },
  {
    id: 7,
    src: "/foto/foto 7.jpeg",
    alt: "Foto 7",
    title: "Foto 7",
    date: "2024-01-20",
    description: "Kegiatan musyawarah desa untuk membahas program pembangunan",
  },
  {
    id: 8,
    src: "/foto/foto 8.jpeg",
    alt: "Foto 8",
    title: "Foto 8",
    date: "2024-01-18",
    description: "Kebun sayuran milik warga yang ditanam dengan berbagai jenis tanaman",
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const handleImageClick = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
  }

  const handlePrevImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    setSelectedImage(galleryImages[prevIndex])
  }

  const handleNextImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage.id)
    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(galleryImages[nextIndex])
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Galeri Foto</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Dokumentasi visual kehidupan, kegiatan, dan keindahan Desa Tumaluntung Satu dalam berbagai momen berharga.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <Card
            key={image.id}
            className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                onClick={() => handleImageClick(image)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </Card>
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black">
          {selectedImage && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="relative aspect-[4/3]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <X className="h-4 w-4 mr-2" />
                  {new Date(selectedImage.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Empty State (if needed) */}
      {galleryImages.length === 0 && (
        <div className="text-center py-12">
          <Images className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada foto</h3>
          <p className="text-gray-500">Belum ada foto yang tersedia di galeri.</p>
        </div>
      )}
    </div>
  )
}
