import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Navbar = () => {
  return (
    <header className="font-['Red Hat Display'] fixed left-0 right-0 top-0 z-50 h-14 w-full  bg-white px-20 md:block md:h-[4.1rem]">
      <div className="mx-auto flex h-full max-w-[100rem] items-center justify-between p-4">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3 h-6 font-serif text-xl font-bold sm:block">
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <ul className="flex items-center space-x-4">
            {headerNavLinks.map((link) => (
              <li
                key={link.title}
                className="border-b-2 border-transparent px-3 hover:border-black"
              >
                <a
                  href={link.href}
                  className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Navbar
