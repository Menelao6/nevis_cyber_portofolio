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
    name: 'Certified API Security Analyst (CASA)',
    issuer: 'APIsec University',
    date: 'September 2024',
    icon: '🔒'
  },
  {
    id: 2,
    name: 'OWASP API Security Top 10',
    issuer: 'APIsec University',
    date: 'November 2023',
    icon: '🔍'
  },
  {
    id: 3,
    name: 'Purple Teaming Fundamentals',
    issuer: 'CyberWarFare Labs',
    date: 'November 2023',
    icon: '🟣'
  },
  {
    id: 4,
    name: 'ISO/IEC 27001 Information Security Associate',
    issuer: 'SkillFront',
    date: 'November 2022',
    icon: '📜'
  }
]
