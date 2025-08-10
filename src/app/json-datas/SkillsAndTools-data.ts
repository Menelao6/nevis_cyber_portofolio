export interface Capability {
  id: number
  category: string
  icon: string
  skills: string[]
}

export interface Tool {
  id: number
  name: string
  category: string
}

export const capabilities: Capability[] = [
  {
    id: 1,
    category: 'Threat Analysis',
    icon: '🔍',
    skills: [
      'Vulnerability Assessment',
      'Malware Analysis',
      'Threat Intelligence',
      'Risk Analysis'
    ]
  },
  {
    id: 2,
    category: 'Defensive Operations',
    icon: '🛡️',
    skills: [
      'SIEM Implementation',
      'Firewall Configuration',
      'IDS/IPS Tuning',
      'Security Hardening'
    ]
  },
  {
    id: 3,
    category: 'Offensive Security',
    icon: '⚔️',
    skills: [
      'Penetration Testing',
      'Red Teaming',
      'Social Engineering',
      'Exploit Development'
    ]
  }
]

export const tools: Tool[] = [
  { id: 1, name: 'Wireshark', category: 'Network Analysis' },
  { id: 2, name: 'Metasploit Framework', category: 'Exploitation' },
  { id: 3, name: 'Burp Suite', category: 'Web App Testing' },
  { id: 4, name: 'Nmap', category: 'Network Scanning' },
  { id: 5, name: 'Splunk', category: 'SIEM' },
  { id: 6, name: 'OSQuery', category: 'Endpoint Security' },
  { id: 7, name: 'Kali Linux', category: 'Penetration Testing' },
  { id: 8, name: 'Python', category: 'Automation' },
  { id: 9, name: 'Docker', category: 'Container Security' },
  { id: 10, name: 'ELK Stack', category: 'Log Analysis' }
]
