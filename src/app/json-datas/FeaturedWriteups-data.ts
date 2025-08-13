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
    title: '[WWFCTF] - Silver Moon ',
    date: 'Jul 29, 2025',
    category: 'Forensics',
    description: 'Rumors whisper of a shadow moving beneath the Silver Moon. Investigate the strange occurrences and reveal the demons hidden technique before its too late.',
  },
  {
    id: 2,
    title: '[L3akCTF] - L3ak Advanced Defenders',
    date: 'Jul 14, 2025',
    category: 'Forensics',
    description: 'You have been trying to infiltrate the L3ak office for some time, and your friend just gave you this mysterious snapshot. What information can you glean from it?',
  },
]