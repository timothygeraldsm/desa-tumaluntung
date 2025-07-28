import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Crown, Users, FileText, Building2, MapPin, Phone, Clock } from "lucide-react"

const officials = [
  { name: "Bpk. Andreas Lumban Gaol", position: "Hukum Tua", category: "Kepala Desa" },
  { name: "Ibu Maria Sari Dewi", position: "Sekretaris Desa", category: "Sekretariat" },
  { name: "Bpk. Jhon Rompis", position: "Bendahara Desa", category: "Sekretariat" },
  { name: "Bpk. Marthen Kalangi", position: "Kepala Urusan Pemerintahan", category: "Kaur" },
  { name: "Ibu Linda Manurung", position: "Kepala Urusan Pembangunan", category: "Kaur" },
  { name: "Bpk. David Sitorus", position: "Kepala Urusan Kesejahteraan Rakyat", category: "Kaur" },
  { name: "Bpk. Robert Hutabarat", position: "Kepala Urusan Keuangan", category: "Kaur" },
  { name: "Ibu Sari Simbolon", position: "Kepala Urusan Umum", category: "Kaur" },
  { name: "Bpk. Michael Panjaitan", position: "Kepala Jaga I", category: "Kepala Jaga" },
  { name: "Bpk. Daniel Siahaan", position: "Kepala Jaga II", category: "Kepala Jaga" },
  { name: "Bpk. Samuel Tampubolon", position: "Kepala Jaga III", category: "Kepala Jaga" },
  { name: "Bpk. Thomas Sinaga", position: "Kepala Jaga IV", category: "Kepala Jaga" },
  { name: "Bpk. Antonius Lumban Gaol", position: "Kepala Jaga V", category: "Kepala Jaga" },
  { name: "Bpk. Martinus Sitompul", position: "Kepala Jaga VI", category: "Kepala Jaga" },
  { name: "Bpk. Wilhelmus Rompis", position: "Kepala Jaga VII", category: "Kepala Jaga" },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Kepala Desa":
      return "bg-red-100 text-red-800 border-red-200"
    case "Sekretariat":
      return "bg-blue-100 text-blue-800 border-blue-200"
    case "Kaur":
      return "bg-green-100 text-green-800 border-green-200"
    case "Kepala Jaga":
      return "bg-purple-100 text-purple-800 border-purple-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Kepala Desa":
      return Crown
    case "Sekretariat":
      return FileText
    case "Kaur":
      return Building2
    case "Kepala Jaga":
      return MapPin
    default:
      return Users
  }
}

const groupedOfficials = {
  "Kepala Desa": officials.filter((o) => o.category === "Kepala Desa"),
  Sekretariat: officials.filter((o) => o.category === "Sekretariat"),
  Kaur: officials.filter((o) => o.category === "Kaur"),
  "Kepala Jaga": officials.filter((o) => o.category === "Kepala Jaga"),
}

export default function OfficialsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Perangkat Desa</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Struktur organisasi dan perangkat Desa Tumaluntung Satu yang bertugas melayani masyarakat dan menjalankan
          pemerintahan desa.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center border-red-200 bg-red-50">
          <CardContent className="p-6">
            <Crown className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-red-600 mb-2">1</div>
            <div className="text-sm text-red-700 font-medium">Kepala Desa</div>
          </CardContent>
        </Card>
        <Card className="text-center border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-sm text-blue-700 font-medium">Sekretariat</div>
          </CardContent>
        </Card>
        <Card className="text-center border-green-200 bg-green-50">
          <CardContent className="p-6">
            <Building2 className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">5</div>
            <div className="text-sm text-green-700 font-medium">Kepala Urusan</div>
          </CardContent>
        </Card>
        <Card className="text-center border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">7</div>
            <div className="text-sm text-purple-700 font-medium">Kepala Jaga</div>
          </CardContent>
        </Card>
      </div>

      {/* Organizational Structure */}
      <div className="space-y-12">
        {Object.entries(groupedOfficials).map(([categoryName, categoryOfficials]) => {
          const Icon = getCategoryIcon(categoryName)
          const isVillageHead = categoryName === "Kepala Desa"

          return (
            <div key={categoryName} className="space-y-6">
              {/* Category Header */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Icon
                    className={`h-8 w-8 ${
                      categoryName === "Kepala Desa"
                        ? "text-red-600"
                        : categoryName === "Sekretariat"
                          ? "text-blue-600"
                          : categoryName === "Kaur"
                            ? "text-green-600"
                            : "text-purple-600"
                    }`}
                  />
                  <h2
                    className={`text-3xl font-bold ${
                      categoryName === "Kepala Desa"
                        ? "text-red-800"
                        : categoryName === "Sekretariat"
                          ? "text-blue-800"
                          : categoryName === "Kaur"
                            ? "text-green-800"
                            : "text-purple-800"
                    }`}
                  >
                    {categoryName}
                  </h2>
                </div>
                <div
                  className={`w-24 h-1 mx-auto rounded-full ${
                    categoryName === "Kepala Desa"
                      ? "bg-red-600"
                      : categoryName === "Sekretariat"
                        ? "bg-blue-600"
                        : categoryName === "Kaur"
                          ? "bg-green-600"
                          : "bg-purple-600"
                  }`}
                ></div>
              </div>

              {/* Officials Grid */}
              <div
                className={`grid gap-6 ${
                  isVillageHead
                    ? "grid-cols-1 max-w-md mx-auto"
                    : categoryName === "Sekretariat"
                      ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {categoryOfficials.map((official, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-2 ${
                      isVillageHead
                        ? "border-red-200 bg-gradient-to-br from-red-50 to-red-100"
                        : categoryName === "Sekretariat"
                          ? "border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100"
                          : categoryName === "Kaur"
                            ? "border-green-200 bg-gradient-to-br from-green-50 to-green-100"
                            : "border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100"
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="relative">
                        <Avatar
                          className={`${
                            isVillageHead ? "w-32 h-32" : "w-24 h-24"
                          } mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <AvatarFallback
                            className={`text-xl font-bold shadow-inner ${
                              categoryName === "Kepala Desa"
                                ? "bg-red-200 text-red-800"
                                : categoryName === "Sekretariat"
                                  ? "bg-blue-200 text-blue-800"
                                  : categoryName === "Kaur"
                                    ? "bg-green-200 text-green-800"
                                    : "bg-purple-200 text-purple-800"
                            }`}
                          >
                            {official.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {isVillageHead && (
                          <div className="absolute -top-2 -right-2">
                            <Crown className="h-8 w-8 text-yellow-500 drop-shadow-lg" />
                          </div>
                        )}
                      </div>
                      <CardTitle
                        className={`${isVillageHead ? "text-xl" : "text-lg"} mb-3 group-hover:text-green-700 transition-colors`}
                      >
                        {official.name}
                      </CardTitle>
                      <Badge className={`${getCategoryColor(official.category)} border font-medium px-3 py-1`}>
                        <Icon className="h-3 w-3 mr-1" />
                        {official.category}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center pt-0">
                      <div
                        className={`p-3 rounded-lg ${
                          categoryName === "Kepala Desa"
                            ? "bg-red-100"
                            : categoryName === "Sekretariat"
                              ? "bg-blue-100"
                              : categoryName === "Kaur"
                                ? "bg-green-100"
                                : "bg-purple-100"
                        }`}
                      >
                        <p
                          className={`font-semibold ${
                            categoryName === "Kepala Desa"
                              ? "text-red-800"
                              : categoryName === "Sekretariat"
                                ? "text-blue-800"
                                : categoryName === "Kaur"
                                  ? "text-green-800"
                                  : "text-purple-800"
                          }`}
                        >
                          {official.position}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Contact Information */}
      <Card className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-green-800 flex items-center justify-center space-x-2">
            <Phone className="h-6 w-6" />
            <span>Informasi Kontak</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-green-800 mb-4 flex items-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Tugas dan Fungsi</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Crown className="h-4 w-4 text-red-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-red-800">Kepala Desa:</span>
                    <span className="text-gray-600 ml-1">Memimpin penyelenggaraan pemerintahan desa</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-blue-800">Sekretaris Desa:</span>
                    <span className="text-gray-600 ml-1">Membantu kepala desa dalam bidang administrasi</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <Building2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Kepala Urusan:</span>
                    <span className="text-gray-600 ml-1">Melaksanakan urusan pemerintahan tertentu</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-4 w-4 text-purple-600 mt-0.5" />
                  <div>
                    <span className="font-medium text-purple-800">Kepala Jaga:</span>
                    <span className="text-gray-600 ml-1">Membantu kepala desa di tingkat wilayah</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-4 flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Jam Pelayanan</span>
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Senin - Jumat</span>
                  <span className="text-green-600 font-semibold">08:00 - 16:00 WITA</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Sabtu</span>
                  <span className="text-green-600 font-semibold">08:00 - 12:00 WITA</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Minggu</span>
                  <span className="text-red-600 font-semibold">Tutup</span>
                </div>
                <div className="p-4 bg-green-100 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-2">
                    <Phone className="h-4 w-4 text-green-600 mt-0.5" />
                    <p className="text-green-700 text-sm">
                      <span className="font-medium">Untuk keperluan mendesak,</span> dapat menghubungi nomor telepon
                      desa:
                      <span className="font-semibold ml-1">+62 851-4137-9561</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
