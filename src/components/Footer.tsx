import { useState } from "react"
import Newsletter from "@/features/Newsletter"
import { Button } from "@/components/ui/button"
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  const [showFeedback, setShowFeedback] = useState(false)

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore", href: "/explore" },
    { label: "Contact", href: "/contact" },
  ]

  const contactInfo = [
    { label: "Email", value: <MdOutlineMail className="text-green-400" />, href: "mailto:sarahnzeshi05@gmail.com" },
    { label: "GitHub", value: <FaGithub className="text-black"/>, href: "https://github.com/4ssh1" },
    { label: "LinkedIn", value: <FaLinkedin className="text-blue-500"/>, href: "https://www.linkedin.com/in/sarah-nzeshi-bb39a4268" },
    { label: "Medium", value: <FaMedium />, href: "https://medium.com/@sarahnzeshi05" },
  ]

  return (
    <footer className="bg-[#d8f3ea] py-16 text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-sm font-semibold mb-4 text-foreground">Stay Updated</h3>
          <Newsletter />
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4 text-foreground">Contact Us</h3>
          <ul className="space-y-5">
            {contactInfo.map((item) => (
              <li key={item.label} className="flex items-center gap-2 w-fit">
                {item.label}:{" "}
                <a href={item.href} className="underline" target="_blank" rel="noreferrer">
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4 text-foreground">Feedback</h3>
          <p>Have suggestions?</p>
          <Button onClick={() => setShowFeedback(true)} variant="outline" className="mt-2">
            Leave Feedback
          </Button>

          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="flex flex-wrap gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-foreground underline">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-15 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Portora</span> © 2025 — Built with ❤️ by Sarah
      </div>
      {showFeedback && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl">
            <h3 className="text-sm font-semibold mb-2">Send Feedback</h3>
            <p className="text-xs mb-4 text-muted-foreground">Let us know your thoughts.</p>
            <textarea className="w-full border rounded p-2 mb-4" rows={4} placeholder="Type your message here..." />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowFeedback(false)}>Cancel</Button>
              <Button onClick={() => setShowFeedback(false)}>Send</Button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
