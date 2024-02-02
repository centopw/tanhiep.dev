/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href?.startsWith('/')
  const isAnchorLink = href?.startsWith('#')

  const hrefWithRef = href && `${href}`
  if (isInternalLink) {
    return <Link href={hrefWithRef} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={hrefWithRef} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
