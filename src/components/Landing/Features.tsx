import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { features } from "@/consts/features"

function Features() {
  return (
     <section className="py-16 px-4 md:px-20 bg-muted/50">
      <div className="flex flex-col text-center pb-10">
          <h2 className="text-[10px] md:text-3xl font-bold exo text-center mb-3 justify-items-end">
           Showcase Your Work with Impact
          </h2>
          <p className="text-[14px]"
          >Create a dynamic space to present your projects, track engagement and stay in control. </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <Card key={idx} className="py-4 px-3 rounded-2xl shadow-sm border border-border">
            <CardContent className="flex flex-col items-start gap-3">
              {feature.icon}
              <CardTitle className="text-lg">{feature.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
