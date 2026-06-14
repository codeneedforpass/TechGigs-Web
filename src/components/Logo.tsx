type LogoProps = {
  className?: string;
  size?: 'sm' | 'md';
};

const sizeClasses = {
  sm: 'h-6 w-6',
  md: 'h-9 w-9',
} as const;

export default function Logo({ className = '', size = 'sm' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Techgigs Zambo logo"
      className={`${sizeClasses[size]} shrink-0 rounded-[4px] object-contain shadow-sm shadow-[#22d3ee]/20 ${className}`}
    />
  );
}
