import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-orange-100 to-background dark:from-orange-950 dark:to-background">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <Logo />
        <ThemeToggle />
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-orange-600 dark:text-orange-400">Welcome to MealShare</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Join our college mess QR donation system and make a difference in your community. Share meals, reduce waste,
            and spread smiles!
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild size="lg" className="px-8">
              <Link href="/staff-login">Staff Login</Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="px-8">
              <Link href="/admin-login">Admin Login</Link>
            </Button>
          </div>
        </div>
      </main>
      <footer className="container mx-auto py-6 text-center text-gray-600 dark:text-gray-400">
        © 2025 MealShare. All rights reserved.
      </footer>
    </div>
  )
}

