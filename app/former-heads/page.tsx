import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Award } from "lucide-react"

const formerHeads = [
  { no: 1, name: "Bpk. Wilhelmus Rompis", term: "2010-2016", notes: "Definitif", years: 6 },
  { no: 2, name: "Bpk. Marthen Kalangi", term: "2016-2017", notes: "Plt", years: 1 },
  { no: 3, name: "Bpk. Jhon Rompis", term: "2017-2023", notes: "Definitif", years: 6 },
  { no: 4, name: "Bpk. Andreas Lumban Gaol", term: "2023-Sekarang", notes: "Definitif", years: 1 },
]

export default function FormerHeadsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Daftar Nama Hukum Tua</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Daftar kepala desa (Hukum Tua) yang pernah memimpin Desa Tumaluntung Satu sejak berdirinya sebagai desa
          definitif pada tahun 2010.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">14</div>
            <div className="text-sm text-gray-600">Tahun Kepemimpinan</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <User className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">4</div>
            <div className="text-sm text-gray-600">Total Hukum Tua</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-sm text-gray-600">Hukum Tua Definitif</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Riwayat Kepemimpinan Desa</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">No</TableHead>
                  <TableHead>Nama</TableHead>
                  <TableHead>Masa Jabatan</TableHead>
                  <TableHead>Lama Jabatan</TableHead>
                  <TableHead>Keterangan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formerHeads.map((head) => (
                  <TableRow key={head.no} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{head.no}</TableCell>
                    <TableCell className="font-medium">{head.name}</TableCell>
                    <TableCell>{head.term}</TableCell>
                    <TableCell>{head.years} tahun</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          head.notes === "Definitif"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                        }
                      >
                        {head.notes}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline Kepemimpinan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {formerHeads.map((head, index) => (
              <div key={head.no} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                      head.notes === "Definitif" ? "bg-green-600" : "bg-yellow-600"
                    }`}
                  >
                    {head.no}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-lg">{head.name}</h3>
                    <Badge
                      className={
                        head.notes === "Definitif" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {head.notes}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-1">Masa Jabatan: {head.term}</p>
                  <p className="text-sm text-gray-500">Lama menjabat: {head.years} tahun</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Keterangan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-800 mb-3">Status Kepemimpinan</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">Definitif</Badge>
                  <span className="text-gray-600">Kepala desa yang dipilih langsung oleh masyarakat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-yellow-100 text-yellow-800">Plt</Badge>
                  <span className="text-gray-600">Pelaksana Tugas sementara</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-green-800 mb-3">Periode Jabatan</h3>
              <p className="text-sm text-gray-600">
                Masa jabatan Kepala Desa adalah 6 tahun dan dapat dipilih kembali untuk satu kali masa jabatan
                berikutnya. Pemilihan dilakukan secara langsung oleh masyarakat desa.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
