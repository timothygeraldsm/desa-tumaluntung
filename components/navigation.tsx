"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Users, History, BarChart3, Building, MapPin, Phone, Images } from "lucide-react"

const navItems = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/officials", label: "Perangkat Desa", icon: Users },
  { href: "/former-heads", label: "Mantan Hukum Tua", icon: History },
  { href: "/demographics", label: "Demografis", icon: BarChart3 },
  { href: "/economy", label: "Ekonomi", icon: Building },
  { href: "/history", label: "Sejarah", icon: History },
  { href: "/location", label: "Lokasi", icon: MapPin },
  { href: "/gallery", label: "Galeri", icon: Images },
  { href: "/contact", label: "Kontak", icon: Phone },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-green-800 text-lg">Desa Tumaluntung Satu</span>
            <p className="text-xs text-gray-600">Kec. Tareran, Kab. Minahasa Selatan</p>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex ml-auto space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.href
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation - Hamburger Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden ml-auto">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-bold text-green-800">Menu</span>
              </div>
            </div>
            <nav className="flex flex-col p-6">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
