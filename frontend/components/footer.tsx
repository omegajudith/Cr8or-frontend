// components/footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6 border-t border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo/Brand Section */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="text-purple-400 text-2xl font-bold">C</span>
              <span className="ml-2 font-semibold">Cr8or</span>
            </div>
            <p className="text-sm text-slate-400">
              Empowering creators through decentralized NFT monetization with built-in royalty splits.
            </p>
          </div>

          {/* Platform Section */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/marketplace" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/create-nft" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Create NFT
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.068 2.187 1.405 4.787 2.224 7.561 2.224 9.054 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.014-.637.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369c-2.268-2.267-5.988-2.267-8.255 0l-.164.162-.164-.162c-2.267-2.267-5.988-2.267-8.255 0-2.302 2.303-2.302 6.171 0 8.474l6.021 6.016c.226.226.527.353.845.353s.619-.127.845-.353l6.021-6.016c2.302-2.303 2.302-6.171 0-8.474zm-8.255 10.697c-1.595 0-2.898-.775-2.898-1.727 0-.476.228-1.105 1.067-1.105.839 0 1.129.629 1.129 1.105 0 .238-.118.528-.353.704.521.189.994.694 1.055 1.028h-1zm4.848-4.482c-.531.531-1.214.803-1.917.803s-1.386-.272-1.917-.803c-.517-.517-.789-1.2-.789-1.917s.272-1.4.789-1.917c1.031-1.031 2.717-1.031 3.748 0 1.031 1.031 1.031 2.717 0 3.748zm-2.424-2.238c.415 0 .752.337.752.752 0 .415-.337.752-.752.752s-.752-.337-.752-.752c0-.415.337-.752.752-.752z"/>
                </svg>
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.246 4.75v14.5h3.492V4.75H2.246zm6.984 0v14.5h3.492V4.75H9.23zm6.984 0v14.5h3.492V4.75h-3.492zm6.984 0v14.5H24V4.75h-3.492z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-slate-400 border-t border-slate-700/50 pt-4">
          <p>© 2025 Cr8or. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="mr-4 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}