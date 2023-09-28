import Link from "next/link";
import Heading from "./components/heading";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export const metadata = {
    title: "Page Not Found | La Sonrisa Photo Booth",
    description: "That page could not be found.",
};

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <div className="bg-primary">
                    <Navigation />
                    <main>
                        <Heading text="Page not found" />
                        <Link href="/">Return Home</Link>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
