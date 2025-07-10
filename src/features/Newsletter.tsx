import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Newsletter() {
  const [email, setEmail] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    console.log("Subscribed:", email)
    setSubmitted(true)

  }

  return (
    <div className="bg-muted p-6 rounded-xl max-w-md w-full text-left shadow-sm">
      <h3 className="text-lg font-semibold mb-1">Stay Updated</h3>
      <p className="text-sm text-muted-foreground mb-4">Get occasional updates and feature releases.</p>
      
      {submitted ? (
        <p className="text-green-600 font-medium">Thanks! You're subscribed.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      )}
    </div>
  )
}

export default Newsletter