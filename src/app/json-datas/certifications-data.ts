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
      name: 'ACTIVOR Cyber Drill',
      issuer: 'Security Academy',
      date: '2025',
      icon: '🔐'
    },
    {
      id: 2,
      name: 'Certified API Security Analyst',
      issuer: 'API Security Council',
      date: '2024',
      icon: '📡'
    },
    {
      id: 3,
      name: 'Data Loss Prevention Specialist',
      issuer: 'Infosec Institute',
      date: '2024',
      icon: '🛡️'
    },
    {
      id: 4,
      name: 'Purple Teaming Fundamentals',
      issuer: 'Cyber Range',
      date: '2023',
      icon: '🟣'
    },
    {
      id: 5,
      name: 'OWASP API Security Top 10',
      issuer: 'OWASP Foundation',
      date: '2023',
      icon: '🔍'
    }
]