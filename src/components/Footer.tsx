import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Apply", href: "/apply" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white hover:text-gold-400 transition-colors"
            >
              ChosenX
            </Link>
            <p className="mt-4 text-white/70 max-w-md">
              Empowering businesses and individuals to reach their full potential through 
              innovative solutions and exceptional service.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-white/70">
                <MapPin className="h-4 w-4 mr-2 text-gold-400" />
                <span className="text-sm">123 Business Ave, Suite 100, City, State 12345</span>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="h-4 w-4 mr-2 text-gold-400" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/70">
                <Mail className="h-4 w-4 mr-2 text-gold-400" />
                <span className="text-sm">contact@chosenx.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-gold-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/70 hover:text-gold-400 transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ChosenX. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
