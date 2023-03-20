import * as React from 'react'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Snippets() {
  return (
    <>
      <PageSEO
        title={`Resources - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Timeline Log 🕰️
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Timeline{' '}
          <span className="rounded-md border bg-gray-100 px-1 py-0.5 tracking-tight dark:bg-gray-700 dark:text-gray-300">
            log
          </span>{' '}
          that I've accomplished over the years.
        </p>
      </div>
    </>
  )
}
