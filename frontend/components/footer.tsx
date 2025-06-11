"use client"; // Mark as client component to avoid server-client mismatch

import Link from "next/link";
import { X, MessageSquare, Book } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-white py-6 border-t border-slate-700/50">
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
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="text-slate-400 hover:text-purple-400 transition-colors"
              >
                <Book className="w-5 h-5" />
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