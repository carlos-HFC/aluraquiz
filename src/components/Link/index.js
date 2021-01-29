import NextLink from 'next/link'

export function Link(props) {
  return (
    <NextLink href={props.href} passHref>
      <a {...props}>{props.children}</a>
    </NextLink>
  )
}