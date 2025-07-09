import type { badgeType } from "@/types/type";
import { Code, PenTool, Server, Bot, Smartphone, Cpu, Database, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

function Marquee() {
const badges: badgeType[] = [
  { label: "Frontend", icon: <Code size={14} /> },
  { label: "Backend", icon: <Server size={14} /> },
  { label: "Design", icon: <PenTool size={14} /> },
  { label: "AI/Automation", icon: <Bot size={14} /> },
  { label: "Mobile App", icon: <Smartphone size={14} /> },
  { label: "DevOps", icon: <Cpu size={14} /> },
  { label: "Database", icon: <Database size={14} /> },
  { label: "Web", icon: <Globe size={14} /> },
  { label: "JavaScript" },
  { label: "Python", icon: <span>🐍</span> },
  { label: "C++"},
  { label: "Java"},
  { label: "TypeScript"},
  { label: "Go"},
  { label: "PHP", icon: <span>🐘</span> },
  { label: "Rust", icon: <span>🦀</span> },
  { label: "Figma"},
  { label: "and so much more ..."},
]

 const repeatedBadges:badgeType[] = [...badges, ...badges]
 const scrollRef = useRef<HTMLDivElement>(null)  
 
 useEffect(()=>{
    const scrollContainer = scrollRef.current
    if(!scrollContainer) return

    let scrollAmount: number = 0
    let requestId: number

    const scrollStep: ()=>void = ()=>{
        scrollAmount += 1

        if(scrollAmount>= scrollContainer.scrollWidth / 2){
            scrollAmount = 0;
            scrollContainer.scrollLeft = 0
        }else{
            scrollContainer.scrollLeft = scrollAmount
        }

        requestId = requestAnimationFrame(scrollStep) 
    }

    scrollStep()

    scrollContainer.addEventListener("mouseenter", ()=>{
        cancelAnimationFrame(requestId)
    })

    scrollContainer.addEventListener("mouseleave", ()=>{
        requestId = requestAnimationFrame(scrollStep)
    })

    return ()=> cancelAnimationFrame(requestId)
 },[])

  return (
    <div ref={scrollRef} className=" bg-slate-300 flex overflow-x-auto items-center justify-center no-scrollbar py-3">
      {repeatedBadges.map(({ label, icon }, index) => (
    <span key={index} className="inline-flex items-center gap-1 transition-all hover:bg-[#00A991] whitespace-nowrap
    ease-in-out rounded-full bg-gray-100 border text-sm text-gray-800 shadow-sm py-2 px-5 justify-between max-w-50">
      {icon} {label}
    </span>
  ))}
    </div>
  )
}

export default Marquee


