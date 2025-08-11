export interface Certificate {
  id: number
  name: string
  issuer: string
  date: string
  icon: string
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Certified API Security Analyst',
    issuer: 'APIsec University',
    date: 'September 2024',
    icon: '🔒'
  },
  {
    id: 2,
    name: 'CWL Purple Teaming Fundamentals',
    issuer: 'CyberWarFare Labs',
    date: 'November 2023',
    icon: '🟣'
  },
  {
    id: 3,
    name: 'OWASP API Security Top 10',
    issuer: 'APIsec University',
    date: 'November 2023',
    icon: '🔍'
  }
]
