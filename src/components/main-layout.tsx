"use client";

import React from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  type AppProviderProps,
  type UnstyledLinkProps,
} from "@shopify/polaris";
import NextLink from "next/link";

const IS_EXTERNAL_LINK_REGEX = /^(?:[a-z][a-z\d+.-]*:|\/\/)/;

function Link({
  children,
  url = "",
  external,
  ...rest
}: UnstyledLinkProps) {
  if (external || IS_EXTERNAL_LINK_REGEX.test(url)) {
    rest.target = "_blank";
    rest.rel = "noopener noreferrer";
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={url} {...rest}>
      {children}
    </NextLink>
  );
}

export default function PageLayout({
  children,
  appProviderProps,
}: Readonly<{
  children?: React.ReactNode;
  appProviderProps?: AppProviderProps;
}>) {
  return (
    <>
      <AppProvider
        i18n={enTranslations}
        linkComponent={Link}
        {...appProviderProps}
      >
        
          {children}
      </AppProvider>
    </>
  );
}
