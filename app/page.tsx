import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin, History, BarChart3, Phone, Building, Images } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { href: "/officials", label: "Perangkat Desa", icon: Users, color: "bg-green-500" },
  { href: "/former-heads", label: "Mantan Hukum Tua", icon: History, color: "bg-blue-500" },
  { href: "/demographics", label: "Demografis", icon: BarChart3, color: "bg-purple-500" },
  { href: "/economy", label: "Ekonomi", icon: Building, color: "bg-orange-500" },
  { href: "/history", label: "Sejarah", icon: History, color: "bg-red-500" },
  { href: "/location", label: "Lokasi", icon: MapPin, color: "bg-cyan-500" },
  { href: "/gallery", label: "Galeri", icon: Images, color: "bg-indigo-500" },
  { href: "/contact", label: "Kontak", icon: Phone, color: "bg-pink-500" },
]

const highlights = [
  { title: "Total Populasi", value: "1,046", subtitle: "Jiwa", color: "text-blue-600" },
  { title: "Perangkat Desa", value: "15+", subtitle: "Orang", color: "text-green-600" },
  { title: "Toko", value: "11", subtitle: "Unit", color: "text-orange-600" },
  { title: "Rumah Makan", value: "3", subtitle: "Unit", color: "text-purple-600" },
  { title: "BUMDes", value: "1", subtitle: "Unit", color: "text-red-600" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-600/90 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1400&text=Pemandangan+Desa+Tumaluntung+Satu+dengan+perbukitan+hijau+dan+sawah"
          alt="Pemandangan Desa Tumaluntung Satu dengan perbukitan hijau dan sawah"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">SELAMAT DATANG</h1>
          <h2 className="text-lg md:text-xl lg:text-2xl mb-8 font-medium">
            DI LAYANAN INFORMASI DESA TUMALUNTUNG SATU
          </h2>
          <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Kecamatan Tareran, Kabupaten Minahasa Selatan, Provinsi Sulawesi Utara
          </p>
          <Link href="/history">
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100 font-semibold px-8 py-3">
              Pelajari Lebih Lanjut
            </Button>
          </Link>
        </div>
      </section>

      <div className="container py-16">
        {/* Quick Access Links */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Akses Cepat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan informasi yang Anda butuhkan dengan mudah melalui menu akses cepat di bawah ini.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link key={link.href} href={link.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full group hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 group-hover:text-green-700 transition-colors">
                        {link.label}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Highlight Cards */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Profil Singkat</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Data dan statistik penting tentang Desa Tumaluntung Satu dalam angka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-gray-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
                  <div className="text-sm text-gray-500">{item.subtitle}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Tentang Desa Tumaluntung Satu</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Desa Tumaluntung Satu adalah sebuah desa yang terletak di Kecamatan Tareran, Kabupaten Minahasa Selatan,
                Provinsi Sulawesi Utara. Desa ini memiliki luas wilayah ±12,5 hektar dengan ketinggian dataran tinggi
                dan suhu rata-rata ±29°C.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Dengan populasi 1.046 jiwa, desa ini memiliki pertumbuhan penduduk 4% dalam 6 tahun terakhir dan
                kepadatan penduduk 700 jiwa/km². Mayoritas penduduk bekerja sebagai petani dan berkebun (81%).
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/history">
                  <Button className="bg-green-600 hover:bg-green-700 px-6 py-3">Pelajari Sejarah Desa</Button>
                </Link>
                <Link href="/demographics">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 bg-transparent"
                  >
                    Lihat Data Demografis
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Aktivitas+masyarakat+Desa+Tumaluntung+Satu"
                  alt="Aktivitas masyarakat Desa Tumaluntung Satu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2010</div>
                  <div className="text-sm text-gray-600">Desa Definitif</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
