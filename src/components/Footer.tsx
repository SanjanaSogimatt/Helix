

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 p-10 font-SulphurPoint">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Information */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Helix</h2>
                    <p className="mb-2">23 Fake Street Nowhereville</p>
                    <p className="mb-4">10 Planet Earth</p>
                    <a href="mailto:example@example.com" className="block mb-2 hover:underline">
                        example@example.com
                    </a>
                    <p>+0 123 456 789</p>
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <a href="#" className="block hover:underline">Home</a>
                        <a href="#" className="block hover:underline">About</a>
                        <a href="#" className="block hover:underline">FAQ</a>
                        <a href="#" className="block hover:underline">Blog</a>
                        <a href="#" className="block hover:underline">Contact</a>
                    </div>
                    <div>
                        <a href="#" className="block hover:underline">All services</a>
                        <a href="#" className="block hover:underline">Service page</a>
                        <a href="#" className="block hover:underline">Style guide</a>
                        <a href="#" className="block hover:underline">Changelog</a>
                        <a href="#" className="block hover:underline">Licenses</a>
                    </div>
                </div>

                {/* Social Media Links */}
                <div>
                    <a href="#" className="block hover:underline">Facebook</a>
                    <a href="#" className="block hover:underline">Twitter/X</a>
                    <a href="#" className="block hover:underline">Instagram</a>
                    <a href="#" className="block hover:underline">LinkedIn</a>
                    <a href="#" className="block hover:underline">YouTube</a>
                </div>
            </div>
        </footer>
    );
}
