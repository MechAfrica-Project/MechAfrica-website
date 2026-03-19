import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-background">
      <Container className="py-20">
        <div className="mx-auto max-w-xl rounded-3xl border bg-card p-8 text-center shadow-sm">
          <div className="text-xs font-semibold tracking-wide text-muted-foreground">404</div>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you’re looking for doesn’t exist. Use the navigation or return to the homepage.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="secondary" className="h-11 rounded-full px-5">
              <Link href="/">
                Go home <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

