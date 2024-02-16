// import { cssBundleHref } from "@remix-run/css-bundle";
// import type { LinksFunction } from "@remix-run/node";
// import {
//   Links,
//   LiveReload,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
// } from "@remix-run/react";

// export const links: LinksFunction = () => [
//   ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
// ];

import globalStylesUrl from '~/styles/global.css';
import { Outlet, LiveReload, Link, Links, Meta } from '@remix-run/react';

// create a links function & meta function
export const links = () => [{rel: 'stylesheet', href: globalStylesUrl}]

export const meta = () => {
  const description = 'A cool blog built with Remix'
  const keywords = 'remix, react, javascript'

  return {
    description,
    keywords,
  }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}


function Document({ children, title }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {/* <Meta /> */}
        <Links />
        <title>{ title ? title : 'Remix Blog'}</title>
      </head>
      <body>
        <p>Hello</p>
        <Outlet />
        {/* this is so that it will auto reload, gotta import */}
        {process.env.NODE_ENV === 'development' ?
        <LiveReload /> : null}
      </body>

    </html>
  );
}

function Layout({children}) {
  return (
    <>
      <nav className='navbar'>
        <Link  to='/' className='logo'>
          Remix
        </Link>

        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}