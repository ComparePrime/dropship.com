"use client";

import NextLink from "next/link";
import { ComponentProps } from "react";
import { localizePath } from "./config";
import { useLocale } from "./provider";

/** Lien interne qui garde la langue du visiteur (ajoute /en, /de... au besoin). */
export default function Link({ href, ...props }: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  let target = href;
  if (typeof href === "string") target = localizePath(href, locale);
  else if (href.pathname) target = { ...href, pathname: localizePath(href.pathname, locale) };
  return <NextLink href={target} {...props} />;
}
