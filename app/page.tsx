import Image from "next/image";
import DeckPicture from "@/public/deck.png"
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {  ArrowRightIcon} from "lucide-react"
import { LearningResources } from "@/lib/resources";
import { MusicResources } from "@/lib/resources";
import Link from "next/link";


export default function Home() {
  return <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start DJing in hours,<br/> not days
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Learning how to DJ isn{"'"}t easy. From learning how to use your deck to where to find music, this guide will show you the most vital resources you need to get started.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild><Link href="/resources/youtube">Start Reading</Link></Button>
                <Button size="lg" asChild variant="outline"><Link href="#resources" >
                  Resources
                </Link></Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={DeckPicture}
                width={400}
                height={400}
                alt="Resource Guide Hero Image"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section id="resources" className="w-full py-12 md:pt-24 lg:pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learning to DJ</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Whether you’re just getting started or leveling up your skills, here are some resources to help you grow as a DJ. 
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {LearningResources.map((i) => (
              <Card key={i.id} className="flex flex-col h-full gap-4">
                <CardHeader className="flex items-center gap-2 ">
                  {i.icon}
                  <CardTitle>{i.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>{i.desc}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">
                  <Button asChild variant="outline" className="flex-1">
                  <Link href={`/resources/${i.id}`}>
                    Learn More
                    <ArrowRightIcon className="ml-2 size-4"/>
                  </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
          </section>

<section className="w-full py-12 md:pb-24 lg:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Finding Music</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Your sets are only as strong as your music library. This section covers the best places to discover, download, and organize tracks—from exclusive edits to underground gems—so you’re always ready to crush your next mix.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {MusicResources.map((i) => (
              <Card key={i.id} className="flex flex-col h-full gap-4">
                <CardHeader className="flex items-center gap-2 ">
                  {i.icon}
                  <CardTitle>{i.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>{i.desc}</p>
                </CardContent>
                <CardFooter className="flex items-center gap-2">

                  <Button asChild variant="outline" className="flex-1">
                  <Link href={`/resources/${i.id}`}>
                    Learn More
                    <ArrowRightIcon className="ml-2 size-4"/>
                  </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
          </section>

    </main>
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
