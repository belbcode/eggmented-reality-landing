import { PageProps } from "gatsby"
import React, { ReactNode } from "react"
import "../styles/layout.css"
import "@fontsource/dm-sans"; // Defaults to weight 400.


export default function Layout({ children } : {children : ReactNode}) {
  return <div>{children}</div>
}