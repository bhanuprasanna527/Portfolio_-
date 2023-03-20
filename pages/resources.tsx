import ResourcesCard from '@/layouts/ResourceCard'

export default function Snippets() {
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-background-color dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Resources
      </h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Helpful{' '}
        <span className="rounded-md border bg-gray-100 px-1 py-0.5 tracking-tight dark:bg-gray-700 dark:text-gray-300">
          websites
        </span>{' '}
        that I've been using for years that have helped me in developing applications and much more.
        🔥
      </p>

      <h2 className="mt-8 border-b-4 border-orange-300 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
        Utilities
      </h2>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        <ResourcesCard
          title="Colors and Fonts"
          link=" https://www.colorsandfonts.com/"
          websiteLink="colorsandfonts.com"
          description="Great fonts and color palette inspirations"
        />
        <ResourcesCard
          title="Checkboxes Inspiration"
          link="https://getcssscan.com/css-checkboxes-examples"
          websiteLink="getcssscan.com/css-checkboxes-examples"
          description="Click to copy checkbox styles"
        />
        <ResourcesCard
          title="Buttons Inspiration"
          link="https://getcssscan.com/css-buttons-examples"
          websiteLink="getcssscan.com/css-buttons-examples"
          description="Click to copy button styles"
        />
        <ResourcesCard
          title="React Icons"
          link=" https://react-icons.github.io/react-icons/"
          websiteLink="react-icons.github.ion"
          description="Great icon packs from many websites."
        />
        <ResourcesCard
          title="Lookup.design"
          link="https://lookup.design/"
          websiteLink="lookup.design"
          description="Website components inspirations"
        />
        <ResourcesCard
          title="Microcopy"
          link="https://www.microcopy.me/"
          websiteLink="microcopy.me"
          description="Website copy instead of lorem ipsum."
        />
        <ResourcesCard
          title="1000+ Website Inspirations"
          link="https://www.supercreative.design/weblist/1000-inspiring-websites"
          websiteLink="supercreative.design"
          description="Beautiful and Modern Website Inspirations"
        />

        <ResourcesCard
          title="Beautiful Mockups"
          link="https://shots.so"
          websiteLink="shots.so"
          description="Beautiful Mobile and Web Mockups"
        />

        <ResourcesCard
          title="Email Templates with Tailwind"
          link="https://maizzle.com/"
          websiteLink="maizzle.com"
          description="Email Templates with Tailwind and HTML"
        />
        <ResourcesCard
          title="Tailwind Snippets"
          link=" https://snippets.alexandru.so/"
          websiteLink="Alexandru.so"
          description="Beautiful Utility Tailwind Components"
        />
        <ResourcesCard
          title="Mantine"
          link="https://mantine.dev/"
          websiteLink="mantine.dev"
          description="Beautiful Components with Hooks and functions"
        />
        <ResourcesCard
          title="Tailwind Box Shadows"
          link="https://manuarora.in/boxshadows"
          websiteLink="manuarora.in/boxshadows"
          description="Beautiful box shadows for TailwindCSS"
        />
        <ResourcesCard
          title="Get Avaataars"
          link="https://getavataaars.com/"
          websiteLink="getavataaars.com"
          description="Generate free avatars for multipurpose use."
        />
        <ResourcesCard
          title="Remove Backgrounds"
          link="https://www.experte.com/background-remover"
          websiteLink="experte.com"
          description="Remove backgrounds - in HD"
        />

        <ResourcesCard
          title="Hypercolor"
          link="https://hypercolor.dev"
          websiteLink="hypercolor.dev"
          description="Tailwind gradients"
        />
        <ResourcesCard
          title="Undesign - Free Resoureces"
          link="https://undesign.learn.uno/"
          websiteLink="undesign.learn.uno"
          description="Generate free Icons, illustrations and more"
        />
        <ResourcesCard
          title="Haikei app"
          link="https://app.haikei.app/"
          websiteLink="app.haikei.app"
          description="Generate SVG bogs, waves (single, multiple)."
        />
        <ResourcesCard
          title="Ray"
          link="https://ray.so/"
          websiteLink="ray.so"
          description="Convert code to beautiful images"
        />
        <ResourcesCard
          title="Neumorphism design"
          link="https://neumorphism.io/"
          websiteLink="neumorphism.io"
          description="Get neuphormism theme layouts for your cards and websites"
        />
      </div>

      <h2 className="mt-8 border-b-4 border-orange-300 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
        User Interface
      </h2>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {/* https://storyset.com/ */}
        <ResourcesCard
          title="Story Set"
          link="https://storyset.com/"
          websiteLink="storyset.com"
          description="Beautiful illustrations and icons"
        />
        <ResourcesCard
          title="Tailwind UI Kit"
          link="https://www.tailwind-kit.com/"
          websiteLink="tailwind-kit.com"
          description="Free tailwind UI Components"
        />
        <ResourcesCard
          title="UI Gradients"
          link="https://uigradients.com"
          websiteLink="uigradients.com"
          description="Get different gradient range"
        />

        <ResourcesCard
          title="Minimal Icons Pack"
          link="https://www.heroicons.com"
          websiteLink="heroicons.com"
          description="Get free icons"
        />
        <ResourcesCard
          title="Waves & SVG blobs"
          link="https://getwaves.io/"
          websiteLink="getwaves.io"
          description="Generate waves for your website."
        />

        <ResourcesCard
          title="Color schemes"
          link="https://www.happyhues.co/"
          websiteLink="happyhues.co"
          description="Color schemes for a page"
        />
        <ResourcesCard
          title="Free Illustrations"
          link="https://lukaszadam.com/illustrations"
          websiteLink="lukaszadam.com"
          description="Free illustrations and icons"
        />
        <ResourcesCard
          title="Paper Illustrations"
          link="https://iconscout.com/paper-illustrations"
          websiteLink="iconscout.com"
          description="Free paper illustrations"
        />
        <ResourcesCard
          title="Background generator"
          link="https://bgjar.com/"
          websiteLink="bgjar.com"
          description="Generate beautfiful backgrounds"
        />
        <ResourcesCard
          title="Avatar Library"
          link="https://limitlessdesigns.io/avatar-illustrations/"
          websiteLink="limitlessdesigns.io"
          description="Free and unique Avatars"
        />

        {/* https://bgjar.com/ */}
      </div>
      <h2 className="mt-8 border-b-4 border-orange-300 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
        Everyday use
      </h2>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {/* https://css.gg/ */}
        <ResourcesCard
          title="Free Icons (700+)"
          link="https://css.gg/"
          websiteLink="css.gg"
          description="Collection of 700+ free icons"
        />
        <ResourcesCard
          title="Lorem Ipsum"
          link="https://loripsum.net/"
          websiteLink="loripsum.net"
          description="Advanced lorem text"
        />
        <ResourcesCard
          title="Browser Lite"
          link="https://marketplace.visualstudio.com/items?itemName=antfu.browse-lite"
          websiteLink="marketplace.visualstudio.com"
          description="Browser inside VSCode"
        />

        <ResourcesCard
          title="Site Inspector"
          link="https://www.getsiteinspector.com/"
          websiteLink="getsiteinspector.com"
          description="Inspect your site for errors"
        />
        <ResourcesCard
          title="Public APIs"
          link="https://public-apis.xyz/"
          websiteLink="public-apis.xyz"
          description="Collection of public apis"
        />
        <ResourcesCard
          title="EasyDB"
          link="https://easydb.io/"
          websiteLink="easydb.io"
          description="One click DB deploy - no server"
        />

        <ResourcesCard
          title="Background Remover"
          link="https://www.remove.bg/"
          websiteLink="remove.bg"
          description="Remove bg in one click"
        />
        <ResourcesCard
          title="Meta tag generator"
          link="https://metatags.io/"
          websiteLink="metatags.io"
          description="Generate meta tags for any site"
        />
        <ResourcesCard
          title="Picsum photos"
          link="https://picsum.photos/"
          websiteLink="picsum.photos"
          description="Placeholder randon images"
        />
        <ResourcesCard
          title="Code image"
          link="https://codeimg.io/"
          websiteLink="codeimg.io"
          description="Convert code into beautiful snippets"
        />
        <ResourcesCard
          title="Responsively"
          link="https://responsively.app/"
          websiteLink="responsively.app"
          description="Tool to check responsiveness"
        />
        <ResourcesCard
          title="Dev Fonts"
          link="https://devfonts.gafi.dev/"
          websiteLink="devfonts.gafi.dev"
          description="Dev fonts for developers"
        />
        <ResourcesCard
          title="Peek Links"
          link="https://peek.link/index.html"
          websiteLink="peek.link"
          description="Custom thumbnails for social media"
        />
        <ResourcesCard
          title="100 Day UI"
          link="https://100dailyui.webflow.io/ "
          websiteLink="100dailyui.webflow.io"
          description="Free Figma mockups and elements"
        />
        {/* https://100dailyui.webflow.io/ */}

        {/* https://resumeworded.com/ */}
      </div>
      <h2 className="mt-8 border-b-4 border-orange-300 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
        Free Themes
      </h2>
      {/* https://themesberg.com/product/ui-kit/pixel-free-bootstrap-5-ui-kit */}
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <ResourcesCard
          title="Free Pixel Theme"
          link="https://themesberg.com/product/ui-kit/pixel-free-bootstrap-5-ui-kit"
          websiteLink="themesberg.com"
          description="Free modern, clean Bootstrap 4+ Theme"
        />
        <ResourcesCard
          title="Free Templates"
          link="http://www.mashup-template.com/templates.html"
          websiteLink="mashup-template.com"
          description="Modern HTML templates"
        />
        <ResourcesCard
          title="Landing Stock"
          link="https://landingstock.com/"
          websiteLink="landingstock.com"
          description="Free landing page designs"
        />
        <ResourcesCard
          title="Free Themes & Templates"
          link="https://www.creative-tim.com/templates/free"
          websiteLink="creative-tim.com"
          description="Get free themes, templates & UI Kits"
        />
      </div>

      <h2 className="mt-8 border-b-4 border-orange-300 text-xl font-bold tracking-tight text-black dark:text-white md:text-2xl">
        Productivity
      </h2>
      <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <ResourcesCard
          title="LinkedIn analysis"
          link="https://resumeworded.com"
          websiteLink="resumeworded.com/"
          description="Analyse your LinkedIn profile"
        />
      </div>
    </div>
  )
}
