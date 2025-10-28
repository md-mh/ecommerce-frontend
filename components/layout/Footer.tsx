// The Footer component that displays the footer.
export default function Footer() {
  return (
    <footer className="w-full border-t border-border mt-10 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center py-6 px-4 gap-2">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Saimon Store. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
