import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <h1 className="font-display text-6xl">Page not found</h1>
      <p className="mt-4 text-mauve">This page doesn’t exist. Head back to the home page.</p>
      <div className="mt-8"><Button to="/">Go to Home</Button></div>
    </PageTransition>
  );
}
