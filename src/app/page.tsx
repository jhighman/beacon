import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Welcome to Beacon Docs
        </h1>
        <p className="text-lg text-muted-foreground">
          Your guide to integrating with our platform.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            href: "/docs/getting-started",
            title: "Getting Started",
            description: "What is Beacon?"
          },
        ].map((section: {
          href: string;
          title: string;
          description: string;
        }) => (
          <Card key={section.href}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild variant="default" className="w-full">
                <Link href={section.href}>View Documentation</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
