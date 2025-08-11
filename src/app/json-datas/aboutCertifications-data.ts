export interface Certificate {
  id: number
  name: string
  issuer: string
  date: string
  icon: string
  link?: string
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
  },
  {
    id: 4,
    name: 'API Penetration Testing',
    issuer: 'APIsec University',
    date: 'August 2023',
    icon: '🛠️'
  },
  {
    id: 5,
    name: 'Practical Malware Analysis & Triage',
    issuer: 'TCM Security',
    date: 'August 2023',
    icon: '🦠'
  },
  {
    id: 6,
    name: 'Practical Ethical Hacking - The Complete Course',
    issuer: 'TCM Security',
    date: 'December 2022',
    icon: '💻'
  },
  {
    id: 7,
    name: 'Movement, Pivoting and Persistence',
    issuer: 'TCM Security',
    date: 'December 2022',
    icon: '🔄'
  },
  {
    id: 8,
    name: 'ISO/IEC 27001 Information Security Associate',
    issuer: 'SkillFront',
    date: 'November 2022',
    icon: '📜'
  }
]