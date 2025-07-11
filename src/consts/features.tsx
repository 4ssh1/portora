import type { FeatureBtn } from "@/types/type"
import { ShieldCheck, UploadCloud, BarChart2, Mail } from "lucide-react"

export const features: FeatureBtn[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Secure Authentication",
    description: "Secure sign up and login to keep your account safe and private.",
  },
  {
    icon: <UploadCloud className="w-6 h-6 text-green-500" />,
    title: "Project Uploads",
    description: "Bring your projects to life with quick uploads and custom details.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-purple-500" />,
    title: "Profile Analytics",
    description: "Track profile views in real time and monitor growth.",
  },
  {
    icon: <Mail className="w-6 h-6 text-red-500" />,
    title: "Newsletter Updates",
    description: "Subscribe to updates and keep your followers informed.",
  },
]