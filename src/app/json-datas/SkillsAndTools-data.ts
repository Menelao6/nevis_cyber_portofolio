export interface Tool {
  id: number
  name: string
  category: string
}

export const tools: Tool[] = [
  { id: 1, name: 'Wireshark', category: 'Network Analysis' },
  { id: 2, name: 'Metasploit Framework', category: 'Exploitation' },
  { id: 3, name: 'Burp Suite', category: 'Web App Testing' },
  { id: 4, name: 'Nmap', category: 'Network Scanning' },
  { id: 5, name: 'Splunk', category: 'SIEM' },
  { id: 6, name: 'Kali Linux', category: 'Penetration Testing' },
  { id: 7, name: 'ELK Stack', category: 'Log Analysis' },
  { id: 8, name: 'Autopsy', category: 'Digital Forensics' },
  { id: 9, name: 'Volatility', category: 'Memory Forensics' },
  { id: 10, name: 'FTK Imager', category: 'Disk Forensics' }
]
