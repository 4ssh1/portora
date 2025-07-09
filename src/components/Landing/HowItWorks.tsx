import type { howInterface } from "@/interfaces/interface"

export function HowItWorks() {
const howItWorksSteps: howInterface[] = [
  {
    id: 1,
    title: "Create an Account",
    description: "Sign up with your email and set up your profile in minutes.",
    image: "/illustrations/sign-in.svg",
  },
  {
    id: 2,
    title: "Upload Projects",
    description: "Showcase your work with descriptions, tags, and images.",
    image: "/illustrations/upload.svg",
  },
  {
    id: 3,
    title: "Share Your Link",
    description: "Get a unique URL to share your portfolio anywhere.",
    image: "/illustrations/share-link.svg",
  },
  {
    id: 4,
    title: "Track Engagement",
    description: "See who views your work and grow your presence.",
    image: "/illustrations/analytic.svg",
  },
]

  return (
    <section className="py-20 px-6 text-center bg-slate-300">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-12">
        Creating your portfolio on Portora is simple. <br />Just follow these steps and start sharing your work with the world.
      </p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {howItWorksSteps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <img src={step.image} className="w-20 h-20 mb-4" alt={step.title} />
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
