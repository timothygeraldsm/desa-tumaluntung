import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Desa Tumaluntung Satu</h3>
                <p className="text-green-100 text-sm">Kec. Tareran, Kab. Minahasa Selatan</p>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Website resmi Desa Tumaluntung Satu, Kecamatan Tareran, Kabupaten Minahasa Selatan, Provinsi Sulawesi
              Utara.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-green-100">
                  Jalan Kampus, Kantor Hukum Tua Desa Tumaluntung Satu, Kec. Tareran, Kab. Minahasa Selatan
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-green-100">+62 851-4137-9561</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-green-100">tumaluntungsatudesa@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Media Sosial</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-green-100">
                <Facebook className="h-4 w-4" />
                <span>Facebook - Tidak tersedia</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-100">
                <Instagram className="h-4 w-4" />
                <span>Instagram - Tidak tersedia</span>
              </div>
            </div>
            <p className="text-green-100 text-xs mt-4">Media sosial resmi sedang dalam tahap pengembangan.</p>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-100">
          <p>&copy; {new Date().getFullYear()} Desa Tumaluntung Satu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
