import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Award } from "lucide-react"
import Image from "next/image"

export default function HistoryPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Sejarah Desa</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Perjalanan sejarah pembentukan dan perkembangan Desa Tumaluntung Satu dari masa ke masa hingga menjadi desa
          definitif.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl mb-8">
          <Image
            src="/foto/foto 4.jpeg"
            alt="Sejarah Desa Tumaluntung Satu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Warisan Sejarah</h2>
            <p className="text-lg opacity-90">Desa Tumaluntung Satu</p>
          </div>
        </div>

        {/* Timeline Cards */}
        <Card className="border-l-4 border-l-green-600">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <span>Asal Usul Nama Tumaluntung</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              Nama "Tumaluntung" memiliki akar sejarah yang mendalam dalam budaya lokal. Nama ini berasal dari kata
              "Maletup" yang dalam bahasa daerah memiliki makna khusus yang berkaitan dengan karakteristik geografis dan
              budaya masyarakat setempat.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Seiring berjalannya waktu dan perkembangan bahasa, kata "Maletup" mengalami evolusi pengucapan dan
              penulisan yang alami dalam masyarakat. Perubahan ini terjadi secara bertahap melalui tradisi lisan yang
              diwariskan dari generasi ke generasi, hingga akhirnya menjadi "Tumaluntung" sebagaimana yang kita kenal
              sekarang.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-green-800 mb-2">Makna Filosofis:</h4>
              <p className="text-green-700 text-sm">
                Perubahan nama dari "Maletup" menjadi "Tumaluntung" tidak hanya mencerminkan evolusi bahasa, tetapi juga
                mempertahankan nilai-nilai budaya dan sejarah yang terkandung di dalamnya, menjadi identitas yang kuat
                bagi masyarakat desa.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-600">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Pembentukan dan Pemekaran Desa (2010)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Tahun 2010 menjadi tonggak sejarah penting bagi Desa Tumaluntung Satu. Pada tahun ini, terjadi pemekaran
              wilayah yang strategis yang mengakibatkan pembagian desa menjadi dua bagian terpisah. Keputusan pemekaran
              ini diambil berdasarkan pertimbangan matang untuk meningkatkan efektivitas pelayanan pemerintahan dan
              pembangunan kepada masyarakat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Proses pemekaran dilakukan melalui prosedur yang sesuai dengan peraturan perundang-undangan yang berlaku.
              Hal ini melibatkan partisipasi aktif masyarakat melalui musyawarah desa, survei wilayah, dan koordinasi
              intensif dengan pemerintah daerah untuk memastikan semua aspek administratif dan teknis terpenuhi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Alasan Pemekaran:</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Meningkatkan kualitas pelayanan publik</li>
                  <li>• Mempercepat pembangunan infrastruktur</li>
                  <li>• Mendekatkan pemerintahan dengan masyarakat</li>
                  <li>• Mengoptimalkan pengelolaan sumber daya</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Dampak Positif:</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Pelayanan administrasi lebih efisien</li>
                  <li>• Pembangunan lebih merata</li>
                  <li>• Partisipasi masyarakat meningkat</li>
                  <li>• Identitas desa lebih kuat</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-600">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-purple-600" />
              <span>Penetapan Sebagai Desa Definitif (2010)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Setelah melalui proses evaluasi yang komprehensif dan pemenuhan berbagai persyaratan administratif yang
              ketat, pada tahun 2010 Desa Tumaluntung Satu secara resmi ditetapkan sebagai desa definitif. Penetapan ini
              merupakan pengakuan formal dari pemerintah daerah terhadap kelayakan dan kesiapan desa untuk menjalankan
              fungsi pemerintahan secara mandiri.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Status desa definitif memberikan kewenangan penuh kepada pemerintah desa untuk menyelenggarakan urusan
              pemerintahan, pembangunan, dan kemasyarakatan sesuai dengan ketentuan yang berlaku. Hal ini juga
              memberikan legitimasi yang kuat dalam mengelola anggaran desa dan melaksanakan program-program
              pembangunan.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-purple-800 mb-4">Pencapaian Penting Sejak 2010:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-700 mb-2">Kelembagaan:</h5>
                  <ul className="list-disc list-inside text-purple-600 text-sm space-y-1">
                    <li>Pembentukan struktur pemerintahan desa yang lengkap</li>
                    <li>Penetapan batas wilayah administratif yang jelas</li>
                    <li>Pembentukan BPD (Badan Permusyawaratan Desa)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-700 mb-2">Pembangunan:</h5>
                  <ul className="list-disc list-inside text-purple-600 text-sm space-y-1">
                    <li>Pengembangan sarana dan prasarana dasar</li>
                    <li>Peningkatan pelayanan kepada masyarakat</li>
                    <li>Pembangunan kantor desa dan fasilitas publik</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-600">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-orange-600" />
              <span>Perkembangan Modern (2010-Sekarang)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Sejak ditetapkan sebagai desa definitif, Desa Tumaluntung Satu terus mengalami perkembangan yang
              signifikan dalam berbagai aspek kehidupan masyarakat. Pembangunan infrastruktur, peningkatan kualitas
              sumber daya manusia, dan pengembangan ekonomi masyarakat menjadi fokus utama dalam setiap periode
              kepemimpinan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Dengan populasi yang terus berkembang mencapai 1.046 jiwa dan dukungan dari berbagai pihak, Desa
              Tumaluntung Satu berkomitmen untuk terus maju dan memberikan pelayanan terbaik kepada seluruh
              masyarakatnya. Visi pembangunan berkelanjutan menjadi panduan dalam setiap langkah pembangunan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">14</div>
                <div className="text-sm text-orange-700">Tahun Sebagai Desa Definitif</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">4</div>
                <div className="text-sm text-green-700">Periode Kepemimpinan</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">1,046</div>
                <div className="text-sm text-blue-700">Jiwa Penduduk Saat Ini</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legacy and Future */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-green-800">Warisan dan Masa Depan</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Sejarah Desa Tumaluntung Satu adalah cerminan dari semangat gotong royong, kearifan lokal, dan komitmen
              untuk terus berkembang. Dari asal usul nama yang penuh makna hingga menjadi desa definitif yang mandiri,
              perjalanan ini menjadi fondasi kuat untuk membangun masa depan yang lebih baik.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-green-800 mb-3">Visi Ke Depan</h4>
              <p className="text-gray-600 text-sm">
                "Menjadi desa yang maju, mandiri, dan sejahtera dengan tetap melestarikan nilai-nilai budaya dan
                kearifan lokal untuk kesejahteraan masyarakat yang berkelanjutan."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
