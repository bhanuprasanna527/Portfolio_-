import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

const NewsletterForm = ({ title = 'Upcoming Tasks:' }) => {
  return (
    <div className="group relative">
      <div className="animate-tilt absolute -inset-px animate-pulse rounded-2xl bg-gradient-to-r from-primary-500 via-[#3B82F6] to-[#9333EA] blur-md transition duration-1000 group-hover:-inset-1 group-hover:animate-none group-hover:opacity-100 group-hover:duration-1000"></div>
      <div className="relative h-full w-full rounded-2xl bg-white px-6 py-6 dark:bg-background-color sm:py-8 sm:px-12">
        <div className="pb-1 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</div>
        <li>
          Machine Learning Specialization by <b>24th March</b>.
        </li>
        <li>
          2023 Codeasthra Hackathon on <b>2nd April</b>.
        </li>
      </div>
      <div className="mb-3 flex content-center space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
        <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
        {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        <SocialIcon kind="scholar" href={siteMetadata.scholar} size={6} />
      </div>
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800">
      <NewsletterForm title={title} />
    </div>
  </div>
)
