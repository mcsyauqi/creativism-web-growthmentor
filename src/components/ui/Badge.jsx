const colorClasses = {
  purple: 'bg-growth-purple/10 text-growth-purple',
  green: 'bg-success-green/10 text-success-green',
  amber: 'bg-energy-amber/10 text-energy-amber',
  blue: 'bg-blue-100 text-blue-600',
  gray: 'bg-gray-100 text-gray-600',
};

export default function Badge({
  children,
  color = 'purple',
  size = 'md',
  className = '',
}) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        font-medium rounded-full
        ${colorClasses[color]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
