import "./global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 with Tailwind</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
