import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Thermometer, CloudRain, Mountain, Navigation, Car } from "lucide-react"

const boundaries = [
  { direction: "Utara", area: "Desa Rumoong Atas", color: "bg-blue-100 text-blue-800" },
  { direction: "Selatan", area: "Kota Menara", color: "bg-green-100 text-green-800" },
  { direction: "Timur", area: "Desa Ranolambot", color: "bg-orange-100 text-orange-800" },
  { direction: "Barat", area: "Desa Tumaluntung", color: "bg-purple-100 text-purple-800" },
]

const travelDistances = [
  "Ibukota Kecamatan Tareran: 5 km (15 menit)",
  "Ibukota Kabupaten Minahasa Selatan: 25 km (45 menit)",
  "Ibukota Provinsi Sulawesi Utara (Manado): 45 km (1,5 jam)",
  "Bandara Sam Ratulangi: 50 km (1,5 jam)",
]

const geographicFeatures = [
  { feature: "Luas Wilayah", value: "±12,5 hektar", icon: MapPin, color: "text-green-600" },
  { feature: "Ketinggian", value: "Dataran Tinggi", icon: Mountain, color: "text-blue-600" },
  { feature: "Suhu Rata-rata", value: "±29°C", icon: Thermometer, color: "text-orange-600" },
  { feature: "Curah Hujan", value: "4-8 mm/tahun", icon: CloudRain, color: "text-cyan-600" },
]

export default function LocationPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Peta & Geografis</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Informasi geografis, batas wilayah, dan kondisi alam Desa Tumaluntung Satu serta aksesibilitas ke berbagai
          lokasi penting.
        </p>
      </div>

      {/* Geographic Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {geographicFeatures.map((item, index) => {
          const Icon = item.icon
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Icon className={`h-8 w-8 ${item.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-800 mb-2">{item.value}</div>
                <div className="text-sm text-gray-600">{item.feature}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Boundaries */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Navigation className="h-5 w-5" />
              <span>Batas Wilayah</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {boundaries.map((boundary, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${boundary.color}`}>
                      {boundary.direction}
                    </div>
                    <span className="font-medium text-gray-700">Sebelah {boundary.direction}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{boundary.area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Posisi Strategis</h4>
              <p className="text-blue-700 text-sm">
                Desa Tumaluntung Satu terletak di posisi strategis yang memudahkan akses ke berbagai wilayah penting di
                Kabupaten Minahasa Selatan dan sekitarnya.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Travel Distances */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Car className="h-5 w-5" />
              <span>Jarak Tempuh</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {travelDistances.map((distance, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{distance}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Aksesibilitas</h4>
              <p className="text-green-700 text-sm">
                Semua jarak tempuh menggunakan kendaraan bermotor melalui jalan raya yang dapat dilalui kendaraan roda
                empat dan roda dua.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Climate and Environment */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Kondisi Iklim dan Lingkungan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-800 mb-4">Karakteristik Iklim</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium">Suhu</span>
                  </div>
                  <span className="text-orange-600 font-semibold">±29°C</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CloudRain className="h-4 w-4 text-cyan-600" />
                    <span className="text-sm font-medium">Curah Hujan</span>
                  </div>
                  <span className="text-cyan-600 font-semibold">4-8 mm/tahun</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Mountain className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">Topografi</span>
                  </div>
                  <span className="text-blue-600 font-semibold">Dataran Tinggi</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-4">Kondisi Lingkungan</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Topografi:</strong> Desa Tumaluntung Satu terletak di dataran tinggi dengan kontur tanah yang
                  berbukit-bukit, memberikan pemandangan alam yang indah dan udara yang sejuk.
                </p>
                <p>
                  <strong>Vegetasi:</strong> Wilayah desa didominasi oleh tanaman pertanian, perkebunan, dan vegetasi
                  alami yang masih terjaga dengan baik.
                </p>
                <p>
                  <strong>Sumber Air:</strong> Tersedia sumber air bersih yang cukup untuk kebutuhan masyarakat dan
                  pertanian dari mata air alami dan sumur.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Peta Lokasi</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-hidden rounded-lg">
  <div className="w-full aspect-video">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.9790056176!2d124.65006442021303!3d1.2048583219924984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3287430c7a4451af%3A0xaad2a85e864091de!2sTumaluntung%2C%20Tareran%2C%20South%20Minahasa%20Regency%2C%20North%20Sulawesi!5e0!3m2!1sen!2sid!4v1753741562082!5m2!1sen!2sid"
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</CardContent>

      </Card>
    </div>
  )
}
