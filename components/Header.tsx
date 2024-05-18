import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import Image from './Image'
import ThemeSwitch from './ThemeSwitch'
const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 mt-0 w-full md:mt-4">
      <div className="mx-auto flex h-full max-w-[100rem] items-center space-x-1 p-4">
        {/* Left */}
        <div className="flex flex-auto justify-start md:justify-end">
          <Link href="/">
            <div className="justify-center rounded-full border-2 border-white border-opacity-10 p-1 align-middle backdrop-blur-md backdrop-brightness-75 backdrop-contrast-125 backdrop-saturate-150">
              <Image src="/static/logo-mark-red_500.svg" alt="logo" width={40} height={40} />
            </div>
          </Link>
        </div>
        {/* Center */}
        <div className="hidden items-center justify-center md:flex">
          <div className="rounded-full border-2 border-white border-opacity-10 px-5 py-3 backdrop-blur-md backdrop-brightness-75 backdrop-contrast-125 backdrop-saturate-150">
            <ul className="flex items-center justify-center space-x-10">
              {headerNavLinks.map((link) => (
                <li key={link.title} className="border-b-2 border-transparent hover:border-white">
                  <Link
                    href={link.href}
                    className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeSwitch />
              </li>
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-auto items-center justify-end md:justify-start">
          <div className="">
            <Link
              href="https://tanhiep.dev"
              className="hidden rounded-full border-2 border-white border-opacity-10 bg-red-500 px-5 py-2 hover:bg-red-400 md:flex"
            >
              Contact
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
