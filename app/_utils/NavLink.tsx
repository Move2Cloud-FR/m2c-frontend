import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps extends LinkProps {
  children: any;
  customClassName?: IclassName;
  className?: string;
  target?: string;
}
type IclassName = (props: any) => string;
type IClassNameFunction = (arg: any) => string | null;

export default function NavLink({
  children,
  customClassName,
  className,
  target,
  ...props
}: NavLinkProps) {
  const asPath = usePathname();
  const isActive: boolean = asPath === props.href || asPath === props.as;

  const isPending: boolean = false;

  const classNameFunction: IClassNameFunction = (arg) => {
    if (arg) return arg({ isActive, isPending });
    return null;
  };

  return (
    <Link
      {...props}
      target={target}
      className={
        className +
          " " +
          (customClassName && classNameFunction(customClassName)) || ""
      }
    >
      {children}
    </Link>
  );
}
