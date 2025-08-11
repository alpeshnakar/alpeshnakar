import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Alpesh Nakar | IAM & Data Protection SME',
  description: 'Securing Digital Futures: Expert Insights in Identity, Access & Data Protection.',
};

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Insights', path: '/insights' },
  { name: 'Connect', path: '/connect' },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav-container">
            <Link href="/" className="logo">
              alpeshnakar
            </Link>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="nav-item">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} alpeshnakar.com</p>
        </footer>
      </body>
    </html>
  );
}