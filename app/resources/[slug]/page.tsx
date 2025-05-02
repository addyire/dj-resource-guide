import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLinkIcon} from "lucide-react"
import {  RESOURCES } from "@/lib/resources"
import { notFound } from "next/navigation"
import Link from "next/link"

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params
  const resource = RESOURCES.find(r => r.id === slug)

  if(!resource) notFound()

  const index = RESOURCES.findIndex(r => r.id === slug)
  const nextIndex = index === RESOURCES.length - 1 ? 0 : index + 1
  const prevIndex = index === 0 ? RESOURCES.length - 1 : index - 1

  const [ nextPath, prevPath ] = [nextIndex, prevIndex].map(i => `/resources/${ RESOURCES[i]!.id }`)

  return (
      <main className="flex-1 overflow-auto">
        <div className="container max-w-4xl mx-auto py-6 px-4 md:py-8 md:px-6">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{resource.title}</h1>
              <div className="mt-2 space-x-2 flex items-center text-sm text-muted-foreground">
                <a href={resource.url} className="text-blue-500 cursor-pointer flex items-center gap-1">Visit Website
                <ExternalLinkIcon className="size-3"/>
              </a>
                <div className="size-1 rounded-full bg-muted-foreground"/>
                <span>Last updated: {resource.updated}</span>
              </div>
            </div>

          {resource.content()}

            <div className="flex justify-between pt-4 border-t">
              <Link href={prevPath}><Button variant="ghost" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                Previous Resource
              </Button></Link>
              <Link href={nextPath}><Button variant="ghost" className="flex items-center gap-1">
                Next Resource
                <ChevronRight className="h-4 w-4" />
              </Button></Link>
            </div>
          </div>
        </div>
          </main>


  )
}

// Hook to get window size
// function useWindowSize() {
//   const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)
//
//   useEffect(() => {
//     if (typeof window === "undefined") return
//
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth)
//     }
//
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])
//
//   return windowWidth
// }
//
