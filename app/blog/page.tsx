import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog",
  description: "Pet care tips, health information, and clinic updates",
}

// In a real application, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding Pet Vaccinations: What Every Owner Should Know",
    excerpt:
      "Learn about core and non-core vaccines, vaccination schedules, and why they're essential for your pet's health.",
    date: "April 15, 2023",
    author: "Dr. James Wilson",
    category: "Pet Health",
    slug: "understanding-pet-vaccinations",
  },
  {
    id: 2,
    title: "Dental Care for Pets: More Than Just Fresh Breath",
    excerpt:
      "Discover why dental health is crucial for your pet's overall wellbeing and how to establish a good oral care routine.",
    date: "March 22, 2023",
    author: "Dr. Robert Kim",
    category: "Dental Care",
    slug: "dental-care-for-pets",
  },
  {
    id: 3,
    title: "Signs Your Pet May Be in Pain: What to Look For",
    excerpt:
      "Animals often hide their pain. Learn the subtle signs that might indicate your pet is suffering and when to seek veterinary care.",
    date: "February 10, 2023",
    author: "Dr. Sarah Chen",
    category: "Pet Health",
    slug: "signs-your-pet-may-be-in-pain",
  },
  {
    id: 4,
    title: "Nutrition Basics: Choosing the Right Food for Your Pet",
    excerpt:
      "Navigate the complex world of pet food with our guide to understanding labels, ingredients, and your pet's specific nutritional needs.",
    date: "January 28, 2023",
    author: "Dr. Emily Johnson",
    category: "Nutrition",
    slug: "nutrition-basics-choosing-right-food",
  },
  {
    id: 5,
    title: "Parasite Prevention: Protecting Your Pet Year-Round",
    excerpt:
      "Learn about common parasites that can affect your pet and the best prevention strategies for each season.",
    date: "December 15, 2022",
    author: "Dr. Michael Rodriguez",
    category: "Preventative Care",
    slug: "parasite-prevention",
  },
  {
    id: 6,
    title: "Adopting a New Pet: Preparation Tips for a Smooth Transition",
    excerpt:
      "Bringing a new pet home is exciting! Here's how to prepare your home and family for your new furry family member.",
    date: "November 5, 2022",
    author: "Jessica Martinez",
    category: "Pet Care",
    slug: "adopting-new-pet-preparation-tips",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">PetCare Blog</h1>
            <p className="mt-6 text-lg text-muted-foreground">Expert advice, pet care tips, and clinic updates</p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Featured blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-x-4 text-xs mb-2">
                  <time dateTime="2023-05-10" className="text-muted-foreground">
                    May 10, 2023
                  </time>
                  <span className="relative z-10 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                    Featured
                  </span>
                </div>
                <CardTitle className="text-2xl">Summer Safety Tips for Pets: Beating the Heat</CardTitle>
                <CardDescription>
                  As temperatures rise, keep your pets safe and comfortable with these essential summer care tips.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Summer brings unique challenges for pet owners. From heat stroke prevention to water safety, learn how
                  to keep your furry friends cool, comfortable, and safe during the hottest months of the year.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/blog/summer-safety-tips-for-pets">Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Recent Articles</h2>
            <p className="mt-4 text-muted-foreground">Helpful information to keep your pets healthy and happy</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={`/placeholder.svg?height=360&width=640&text=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-x-4 text-xs mb-2">
                    <time dateTime={post.date} className="text-muted-foreground">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-900/20 dark:text-gray-400">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>By {post.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-muted-foreground">
              Get the latest pet care tips, clinic updates, and special offers delivered to your inbox
            </p>
            <form className="mt-6">
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

