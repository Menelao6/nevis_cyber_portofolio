export interface Writeup {
      id: number
      title: string
      date: string
      category: string
      description: string
}

export const writeups: Writeup[] = [
  {
    id: 1,
    title: 'Cross-Site Scripting (XSS) Explained',
    date: '2023-09-15',
    category: 'Web Security',
    description: 'Deep dive into XSS vulnerabilities and prevention techniques.',
  },
  {
    id: 2,
    title: 'Practical Network Reconnaissance',
    date: '2023-09-10',
    category: 'Network Security',
    description: 'Effective methods for network scanning and reconnaissance.',
  },
  {
    id: 3,
    title: 'Introduction to Penetration Testing',
    date: '2023-09-05',
    category: 'Red Teaming',
    description: 'Fundamentals of ethical hacking and penetration testing.',
  },
  {
    id: 4,
    title: 'Practical Network Reconnaissance',
    date: '2023-09-10',
    category: 'Network Security',
    description: 'Effective methods for network scanning and reconnaissance.',
  },
  {
    id: 5,
    title: 'Introduction to Penetration Testing',
    date: '2023-09-05',
    category: 'Red Teaming',
    description: 'Fundamentals of ethical hacking and penetration testing.',
  },
  
]