import Link from 'next/link'

const Header = () => (
  <header className="header">
    <h1>HEXA</h1>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
    <style jsx>{`
      .header {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </header>
)

export default Header
