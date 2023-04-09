import { CounterButton } from "#root/features/layout/ui";
import Link from "next/link";
import { EffectorAppNext } from "./effector-provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>App dir</div>
        <EffectorAppNext>
          <nav>
            <ul>
              <li>
                <Link href="/pages-root">Main page of `pages` dir</Link>
              </li>
              <li>
                <Link href="/">Main page of `app` dir</Link>
              </li>
              <li>
                <Link href="/app-companies">Companies list (app dir)</Link>
              </li>
              <li>
                <Link href="/app-cats">Cats list (app dir)</Link>
              </li>
            </ul>
            <CounterButton />
          </nav>
          {children}
        </EffectorAppNext>
      </body>
    </html>
  );
}
