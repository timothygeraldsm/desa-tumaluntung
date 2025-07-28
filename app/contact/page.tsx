import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Informasi kontak dan cara menghubungi Pemerintah Desa Tumaluntung Satu untuk berbagai keperluan pelayanan
          masyarakat.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Informasi Kontak</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
              <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Alamat Kantor</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  Jalan Kampus, Kantor Hukum Tua Desa Tumaluntung Satu
                  <br />
                  Kec. Tareran, Kab. Minahasa Selatan
                  <br />
                  Provinsi Sulawesi Utara
                  <br />
                  <span className="font-medium">Kode Pos: 95914</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Nomor Telepon</h3>
                <p className="text-blue-700 font-medium">+62 851-4137-9561</p>
                <p className="text-blue-600 text-sm mt-1">Tersedia 24 jam untuk keperluan mendesak</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
              <Mail className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Email</h3>
                <p className="text-red-700 font-medium">tumaluntungsatudesa@gmail.com</p>
                <p className="text-red-600 text-sm mt-1">Respon dalam 1-2 hari kerja</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-orange-800 mb-2">Jam Pelayanan</h3>
                <div className="text-orange-700 text-sm space-y-1">
                  <p>
                    <span className="font-medium">Senin - Jumat:</span> 08:00 - 16:00 WITA
                  </p>
                  <p>
                    <span className="font-medium">Sabtu:</span> 08:00 - 12:00 WITA
                  </p>
                  <p>
                    <span className="font-medium">Minggu:</span> Tutup
                  </p>
                  <p className="text-orange-600 font-medium mt-2">Istirahat: 12:00 - 13:00 WITA</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Media Sosial</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3">
                  <Facebook className="h-6 w-6 text-blue-600" />
                  <div>
                    <span className="font-medium text-blue-800">Facebook</span>
                    <p className="text-xs text-blue-600">Media sosial resmi desa</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Tidak tersedia</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg border border-pink-200">
                <div className="flex items-center space-x-3">
                  <Instagram className="h-6 w-6 text-pink-600" />
                  <div>
                    <span className="font-medium text-pink-800">Instagram</span>
                    <p className="text-xs text-pink-600">Dokumentasi kegiatan desa</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Tidak tersedia</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Informasi Media Sosial</h4>
              <p className="text-yellow-700 text-sm">
                Media sosial resmi sedang dalam tahap pengembangan. Untuk informasi terkini, silakan hubungi kontak yang
                tersedia atau kunjungi kantor desa langsung.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        <Card className="bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800">Kontak Darurat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-red-800">Desa</div>
                <div className="text-red-600">+62 851-4137-9561</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-red-800">Polsek Tareran</div>
                <div className="text-red-600">110</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Phone className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <div className="font-semibold text-red-800">Puskesmas</div>
                <div className="text-red-600">119</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
