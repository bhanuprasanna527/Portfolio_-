import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillCompass } from 'react-icons/ai'
import { SiGooglescholar } from 'react-icons/si'

export default function Links() {
  return (
    <>
      <PageSEO title={`Links - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-6 divide-y divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Links
          </h1>
          <a
            key="https://twitter.com/bhanu527"
            href="https://twitter.com/bhanu527"
            target="__blank"
            className="mb-4 flex w-full flex-row items-center space-x-2 rounded-md border-2 border-gray-200 py-2 hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <span className="mr-2 inline-block"></span> <AiFillTwitterCircle className="h-5 w-5" />
            <span className="font-bold">Twitter</span>
          </a>

          <a
            key="https://kbpb.netlify.app/"
            href="https://kbpb.netlify.app/"
            target="__blank"
            className="mb-4 flex w-full flex-row items-center space-x-2 rounded-md border-2 border-gray-200 py-2 hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <span className="mr-2 inline-block"></span> <AiFillCompass className="h-5 w-5" />
            <span className="font-bold">Portfolio</span>
          </a>

          <a
            key="https://linkedin.com/in/bhanuprasanna527"
            href="https://linkedin.com/in/bhanuprasanna527"
            target="__blank"
            className="mb-4 flex w-full flex-row items-center space-x-2 rounded-md border-2 border-gray-200 py-2 hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <span className="mr-2 inline-block"></span> <AiFillLinkedin className="h-5 w-5" />
            <span className="font-bold">LinkedIn</span>
          </a>

          <a
            key="https://github.com/bhanuprasanna527"
            href="https://github.com/bhanuprasanna527"
            target="__blank"
            className="mb-4 flex w-full flex-row items-center space-x-2 rounded-md border-2 border-gray-200 py-2 hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <span className="mr-2 inline-block"></span> <AiFillGithub className="h-5 w-5" />
            <span className="font-bold">GitHub</span>
          </a>

          <a
            key="https://scholar.google.com/citations?user=Z9gKj9AAAAAJ&hl=en"
            href="https://scholar.google.com/citations?user=Z9gKj9AAAAAJ&hl=en"
            target="__blank"
            className="mb-4 flex w-full flex-row items-center space-x-2 rounded-md border-2 border-gray-200 py-2 hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
          >
            <span className="mr-2 inline-block"></span> <SiGooglescholar className="h-5 w-5" />
            <span className="font-bold">Google Scholar</span>
          </a>
        </div>
      </div>
    </>
  )
}
