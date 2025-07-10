import React, { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

function FeedbackBox() {
  const [message, setMessage] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message) return

    console.log("Feedback:", message)
    setSent(true)
    setMessage("")

  }

  return (
    <div className="bg-muted p-6 rounded-xl max-w-sm w-full h-fit text-left shadow-sm">
      <h3 className="text-[16px] font-semibold mb-1">Send Feedback</h3>
      <p className="text-[12px] text-muted-foreground mb-4">Got a suggestion or issue? Let us know.</p>

      {sent ? (
        <p className="text-green-600 font-medium">Feedback sent. Thanks!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <Textarea 
            rows={2}
            placeholder="Type your message..."
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" className="w-full bg-[#006647]">Send</Button>
        </form>
      )}
    </div>
  )
}

export default FeedbackBox
