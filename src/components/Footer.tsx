import Newsletter from "@/features/Newsletter"

function Footer() {
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-name" },
]

  return (
    <footer className="bg-muted py-10 text-center text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <Newsletter />
        <div>
          <span className="font-semibold text-foreground">Portora</span>
          <span className="ml-2 text-xs">© 2025</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-4 text-xs text-muted-foreground">
        Built with ❤️ by Sarah
      </div>
    </footer>
  )
}

export default Footer
