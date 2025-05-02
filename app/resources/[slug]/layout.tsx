'use client'

import { cn } from "@/lib/utils"
import { RESOURCE_NAV} from "@/lib/resources"
import { useParams } from "next/navigation";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {slug} = useParams()

  return (
<div className="flex min-h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside
          className={cn(
            "md:w-64 border-r bg-background transition-all duration-300 ease-in-out relative",
            "z-30 md:relative md:inset-y-0 md:translate-x-0",
          )}
        >
          <div className="flex h-full flex-col sticky top-0">
            <nav className="flex-1 overflow-auto p-2">
              <div className="space-y-4">
                {RESOURCE_NAV.map((category) => (
                  <div key={category.id} className="space-y-1">
                    <div className="px-3 py-1 text-sm font-semibold text-muted-foreground">{category.title}</div>
                    <ul className="space-y-1">
                      {category.content.map((section) => (
                        <li key={section.id}>
                          <Link href={`/resources/${section.id}`} className='cursor-pointer'><button
                            // onClick={() => scrollToSection(section.id)}
                            className={cn(
                              "w-full rounded-md px-3 cursor-pointer py-2 text-sm font-medium text-left transition-colors",
                              slug === section.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-accent hover:text-accent-foreground",
                            )}
                          >
                            {section.title}
                          </button></Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}
