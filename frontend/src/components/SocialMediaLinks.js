import React from 'react';
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail 
} from 'lucide-react';

// Replace these URLs with your actual social media profiles
const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/praveen-kumar-031473270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    color: 'hover:text-[#0A66C2]',
    ariaLabel: 'Connect with me on LinkedIn'
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/praveen-1101',
    color: 'hover:text-[#171515]',
    ariaLabel: 'View my projects on GitHub'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/001_praveen_kumar_?utm_source=qr&igsh=MXU3anJwcTQwMGlnZQ==',
    color: 'hover:text-[#E4405F]',
    ariaLabel: 'Follow me on Instagram'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:borapraveen1101@gmail.com',
    color: 'hover:text-[#EA4335]',
    ariaLabel: 'Send me an email'
  }
];

export function SocialMediaLinks({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-6 ${className}`}
  >
      {socialLinks.map(({ name, icon: Icon, url, color, ariaLabel }) => (
        <a
          key={name}
          href={url}
          target={url.startsWith('mailto:') ? '_self' : '_blank'}
          rel={url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className={`transition-all duration-300 text-gray-400 ${color} hover:scale-110`}
          aria-label={ariaLabel}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}