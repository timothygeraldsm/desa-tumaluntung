"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts"
import { Users, TrendingUp, MapPin, Home } from "lucide-react"

const populationData = [
  { name: "Laki-laki", value: 567, color: "#3b82f6" },
  { name: "Perempuan", value: 479, color: "#ec4899" },
]

const jagaData = [
  { jaga: "Jaga I", households: 80, male: 151, female: 116, total: 267 },
  { jaga: "Jaga II", households: 48, male: 83, female: 77, total: 160 },
  { jaga: "Jaga III", households: 55, male: 95, female: 85, total: 180 },
  { jaga: "Jaga IV", households: 56, male: 103, female: 81, total: 184 },
  { jaga: "Jaga V", households: 74, male: 135, female: 120},

const growthData = [
  { year: 2019, population: 823 },
  { year: 2020, population: 856 },
  { year: 2021, population: 890 },
  { year: 2022, population: 926 },
  { year: 2023, population: 963 },
  { year: 2024, population: 1001 },
  { year: 2025, population: 1046 },
]


const chartConfig = {
  male: {
    label: "Laki-laki",
    color: "#3b82f6",
  },
  female: {
    label: "Perempuan",
    color: "#ec4899",
  },
  population: {
    label: "Populasi",
    color: "#22c55e",
  },
}

export default function DemographicsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Aspek Demografis</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Data kependudukan dan demografis Desa Tumaluntung Satu berdasarkan pembagian wilayah Jaga dan karakteristik
          penduduk.
        </p>
      </div>

      {/* Population Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">1,046</div>
            <div className="text-sm text-gray-600">Total Populasi</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">4%</div>
            <div className="text-sm text-gray-600">Pertumbuhan 6 Tahun</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-orange-600 mb-2">700</div>
            <div className="text-sm text-gray-600">Jiwa/km²</div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Home className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">182</div>
            <div className="text-sm text-gray-600">Total KK</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Gender Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Distribusi Berdasarkan Jenis Kelamin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="h-64 w-full max-w-sm mx-auto">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={populationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {populationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Laki-laki: 523 (50%)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-sm">Perempuan: 523 (50%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Population Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Pertumbuhan Populasi (2018-2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <ChartContainer config={chartConfig} className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} interval={0} />
                    <YAxis tick={{ fontSize: 12 }} width={50} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="population"
                      stroke="#22c55e"
                      strokeWidth={3}
                      dot={{ fill: "#22c55e", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Population by Jaga */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-center">Populasi Berdasarkan Jaga</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <ChartContainer config={chartConfig} className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={jagaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="jaga" tick={{ fontSize: 12 }} interval={0} angle={-45} textAnchor="end" height={60} />
                  <YAxis tick={{ fontSize: 12 }} width={50} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="male" fill="#3b82f6" name="Laki-laki" />
                  <Bar dataKey="female" fill="#ec4899" name="Perempuan" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Data Demografis Per Jaga</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-green-200">
                  <th className="text-left p-4 font-semibold text-green-800">Jaga</th>
                  <th className="text-left p-4 font-semibold text-green-800">Jumlah KK</th>
                  <th className="text-left p-4 font-semibold text-green-800">Laki-laki</th>
                  <th className="text-left p-4 font-semibold text-green-800">Perempuan</th>
                  <th className="text-left p-4 font-semibold text-green-800">Total</th>
                  <th className="text-left p-4 font-semibold text-green-800">Persentase</th>
                </tr>
              </thead>
              <tbody>
                {jagaData.map((jaga, index) => (
                  <tr key={index} className="border-b hover:bg-green-50 transition-colors">
                    <td className="p-4 font-medium">{jaga.jaga}</td>
                    <td className="p-4">{jaga.households}</td>
                    <td className="p-4 text-blue-600">{jaga.male}</td>
                    <td className="p-4 text-pink-600">{jaga.female}</td>
                    <td className="p-4 font-semibold">{jaga.total}</td>
                    <td className="p-4 text-gray-600">{((jaga.total / 1046) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
                <tr className="border-b-2 border-green-600 bg-green-100 font-bold">
                  <td className="p-4 text-green-800">Total</td>
                  <td className="p-4 text-green-800">{jagaData.reduce((sum, jaga) => sum + jaga.households, 0)}</td>
                  <td className="p-4 text-blue-700">{jagaData.reduce((sum, jaga) => sum + jaga.male, 0)}</td>
                  <td className="p-4 text-pink-700">{jagaData.reduce((sum, jaga) => sum + jaga.female, 0)}</td>
                  <td className="p-4 text-green-800">1,046</td>
                  <td className="p-4 text-green-800">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Additional Demographics Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Karakteristik Demografis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Kepadatan Penduduk</h3>
              <p className="text-blue-700 text-sm">
                Dengan luas wilayah ±12,5 hektar, kepadatan penduduk mencapai 700 jiwa/km², menunjukkan wilayah yang
                cukup padat.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Pertumbuhan Penduduk</h3>
              <p className="text-green-700 text-sm">
                Tingkat pertumbuhan penduduk 4% dalam 6 tahun terakhir menunjukkan perkembangan yang stabil dan
                terkendali.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
