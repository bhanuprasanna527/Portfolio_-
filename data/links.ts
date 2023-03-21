import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillCompass } from 'react-icons/ai'
import { SiGooglescholar } from 'react-icons/si'
// import { MdComputer } from 'react-icons/md'

const links = [
  {
    id: 3,
    name: 'Twitter',
    href: 'https://twitter.com/bhanu527',
    icon: AiFillTwitterCircle,
    iconClass: 'text-blue-500',
  },
  {
    id: 6,
    name: 'Website',
    href: 'https://kbpb.netlify.app/',
    icon: AiFillCompass,
  },
  {
    id: 9,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/bhanuprasanna527',
    icon: AiFillLinkedin,
  },
  {
    id: 12,
    name: 'GitHub',
    href: 'https://github.com/bhanuprasanna527',
    icon: AiFillGithub,
  },
  {
    id: 15,
    name: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=Z9gKj9AAAAAJ&hl=en',
    icon: SiGooglescholar,
  },
]

export default links
