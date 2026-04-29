const SOCIAL_ACCOUNTS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/tmtgaza',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full" fill="currentColor">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4.2v2.3H7.7V13h2.7v8h3.1z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/thousand.madleens.bangladesh',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.7" />
        <circle cx="16.8" cy="7.2" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const SocialLinks = ({ className = '', linkClassName = '', iconClassName = 'h-7 w-7' }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_ACCOUNTS.map((account) => (
        <a
          key={account.name}
          href={account.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow TMTG Bangladesh Delegation on ${account.name}`}
          className={`inline-flex ${iconClassName} items-center justify-center text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-4 ${linkClassName}`}
        >
          {account.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
