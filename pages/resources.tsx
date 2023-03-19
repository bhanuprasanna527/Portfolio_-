import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { ComponentProps } from 'react'

export const POSTS_PER_PAGE = 25

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ListLayout>['posts']
  initialDisplayPosts: ComponentProps<typeof ListLayout>['initialDisplayPosts']
  pagination: ComponentProps<typeof ListLayout>['pagination']
}> = async () => {
  const posts = await getAllFilesFrontMatter('snippets')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export default function Blog({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Snippets - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Resources
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Helpful{' '}
          <span className="rounded-md border bg-gray-100 px-1 py-0.5 tracking-tight dark:bg-gray-700 dark:text-gray-300">
            websites
          </span>{' '}
          that I've been using which have helped me in developing applications and much more. 🔥
        </p>
      </div>

      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Utilities
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <a
              href="https://www.colorsandfonts.com/"
              className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-background-color dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Colors and Fonts
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Great fonts and color palette inspirations
              </p>
            </a>
          </div>
          <div>
            <a
              href="https://getcssscan.com/css-checkboxes-examples"
              className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-background-color dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Checkboxes Inspiration
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Click to copy checkbox styles
              </p>
            </a>
          </div>
          <div>
            <a
              href="https://getcssscan.com/css-buttons-examples"
              className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-background-color dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Buttons Inspiration
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Click to copy button styles
              </p>
            </a>
          </div>
        </div>
        <div>
          <a
            href="https://react-icons.github.io/react-icons/"
            className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-background-color dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              React Icons
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Great icon packs from many websites
            </p>
          </a>
        </div>
      </div>
    </>
  )
}
