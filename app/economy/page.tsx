"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Store, UtensilsCrossed, Wrench, Building, Pill, Heart, Briefcase, TrendingUp } from "lucide-react"

const occupationData = [
  { name: "Petani/Berkebun", value: 81, color: "#22c55e", count: 847 },
  { name: "Lainnya", value: 19, color: "#94a3b8", count: 199 },
]

const economicFacilities = [
  {
    name: "Toko",
    count: 11,
    icon: Store,
    color: "bg-blue-500",
    description: "Toko kelontong dan kebutuhan sehari-hari",
  },
  {
    name: "Rumah Makan",
    count: 3,
    icon: UtensilsCrossed,
    color: "bg-orange-500",
    description: "Warung makan dan restoran",
  },
  { name: "Bengkel", count: 1, icon: Wrench, color: "bg-gray-500", description: "Bengkel kendaraan bermotor" },
  { name: "BUMDes", count: 1, icon: Building, color: "bg-green-500", description: "Badan Usaha Milik Desa" },
  { name: "Apotek", count: 1, icon: Pill, color: "bg-red-500", description: "Apotek dan toko obat" },
]

const healthFacilities = [
  {
    name: "Bidan",
    count: 1,
    description: "Pelayanan kesehatan ibu dan anak",
    services: ["Persalinan", "KB", "Imunisasi"],
  },
  { name: "Posyandu", count: 1, description: "Pos pelayanan terpadu", services: ["Penimbangan", "Vaksinasi", "Gizi"] },
]

const economicIndicators = [
  { indicator: "Usaha Mikro", value: "45", trend: "meningkat", color: "text-purple-600" },
  { indicator: "Produktivitas Pertanian", value: "85%", trend: "meningkat", color: "text-orange-600" },
]

const chartConfig = {
  farmers: {
    label: "Petani/Berkebun",
    color: "#22c55e",
  },
  others: {
    label: "Lainnya",
    color: "#94a3b8",
  },
}

export default function EconomyPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Sarana Perekonomian & Profesi</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Gambaran kondisi perekonomian, mata pencaharian, dan fasilitas ekonomi yang tersedia di Desa Tumaluntung Satu.
        </p>
      </div>

      {/* Economic Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {economicIndicators.map((item, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className={`text-2xl font-bold ${item.color} mb-2`}>{item.value}</div>
              <div className="text-sm text-gray-600 mb-1">{item.indicator}</div>
              <div
                className={`text-xs px-2 py-1 rounded-full ${
                  item.trend === "meningkat"
                    ? "bg-green-100 text-green-700"
                    : item.trend === "menurun"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                }`}
              >
                {item.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Occupation Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5" />
              <span>Distribusi Mata Pencaharian</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={occupationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {occupationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Petani/Berkebun</span>
                </div>
                <span className="text-sm font-semibold">81%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium">Lainnya</span>
                </div>
                <span className="text-sm font-semibold">19%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Karakteristik Ekonomi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Sektor Utama</h3>
              <p className="text-green-700 text-sm">
                Pertanian dan perkebunan merupakan mata pencaharian utama dengan 81% penduduk bekerja di sektor ini,
                terutama tanaman pangan dan hortikultura.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Diversifikasi Ekonomi</h3>
              <p className="text-blue-700 text-sm">
                19% penduduk bekerja di sektor lain seperti perdagangan, jasa, industri rumah tangga, dan usaha kecil
                menengah yang mendukung perekonomian desa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Economic Facilities */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Building className="h-5 w-5" />
            <span>Fasilitas Ekonomi</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {economicFacilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div
                    className={`${facility.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{facility.count}</div>
                  <div className="text-sm font-medium text-gray-700 mb-2">{facility.name}</div>
                  <div className="text-xs text-gray-500">{facility.description}</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Health Facilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Fasilitas Kesehatan</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthFacilities.map((facility, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">{facility.name}</h3>
                  <span className="text-3xl font-bold text-red-500">{facility.count}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Layanan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {facility.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
