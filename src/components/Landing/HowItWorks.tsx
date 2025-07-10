import type { howInterface } from "@/interfaces/interface"

function HowItWorks() {
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
    <section className="py-13 px-6 text-center bg-slate-300">
      <h2 className="text-3xl md:text-4xl exo font-bold mb-4">How It Works</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-12">
        Creating your portfolio on Portora is simple. <br />Just follow these steps and start sharing your work with the world.
      </p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {howItWorksSteps.map((step, i) => (
          <div key={step.id} className="flex flex-col items-center text-center relative">
            <img src={step.image} className="w-20 h-20 my-4" alt={step.title} />
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
            {
                i < howItWorksSteps.length - 1 && (
                    <svg
                        className="absolute left-40 -top-5 z-0"
                        width="90%"
                        height="100"
                        viewBox="0 0 400 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M 40 80 C 140 0, 260 0, 360 80"
                        stroke="#006647"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="6 6"
                        strokeDashoffset="20"
                        />
                         <animate
                            attributeName="stroke-dashoffset"
                            values="120;0"
                            dur="1s"
                            repeatCount="1"
                            fill="freeze"
                          />
                    </svg>     
                )
            }
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
