import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="supports-[backdrop-filter]:bg-background/60 bg-background/95 fixed left-0 right-0 top-0 z-50 h-14 w-full backdrop-blur md:block md:h-[4.1rem]">
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
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <li key={link.title} className="bg-opacity-1 rounded-md p-3 hover:bg-gray-800">
                  <a
                    href={link.href}
                    className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            <li>
              <SearchButton />
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
