import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";
import globalLargeStylesUrl from "~/styles/global-large.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";
 
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesUrl },
  { rel: "stylesheet", href: globalLargeStylesUrl, media: "screen and (min-width: 1024px)", },
  { rel: "stylesheet", href: globalMediumStylesUrl, media: "print, (min-width: 640px)", }
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Links />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}
