import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface IActiveLinkProps extends LinkProps {
  activeClassName: string;
  contentLink: string;
}

export default function ActiveLink({
  activeClassName,
  contentLink,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter();
  const { href } = rest;

  let className = href === asPath ? activeClassName : "";

  if (href !== "/") {
    className = asPath.includes(href.toString()) ? activeClassName : "";
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link className={className} {...rest}>
      {contentLink}
    </Link>
  );
}
