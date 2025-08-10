import { redirect } from "next/navigation";

// Simple redirect to docs - the fancy landing page is on typeweaver.com
export default function HomePage() {
  redirect("/docs");
}
