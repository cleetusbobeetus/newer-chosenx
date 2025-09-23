export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ApplyFormData {
  name: string
  email: string
  resume: File | null
  message: string
}

export interface CompanyInfo {
  name: string
  address: string
  phone: string
  email: string
  coordinates: {
    lat: number
    lng: number
  }
}
