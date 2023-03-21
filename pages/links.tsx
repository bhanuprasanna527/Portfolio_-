import links from '@/data/links'
import clsx from 'clsx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Links() {
  return (
    <>
      <PageSEO title={`Links - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="mt-6 divide-y divide-gray-200 px-2 dark:divide-gray-700 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Links
          </h1>

          {links?.map((el) => (
            <a
              key={el?.href}
              href={el?.href}
              target="__blank"
              className="mb-4 flex w-full flex-row items-center space-x-2 rounded-md border-2 border-gray-200 py-2 hover:bg-gray-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
            >
              <span className="mr-2 inline-block">{el?.icon}</span>{' '}
              <el.icon className={clsx('h-5 w-5', el?.iconClass)} />
              <span className="font-bold">{el?.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
