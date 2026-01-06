import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-growth-purple hover:bg-growth-purple-dark text-white',
  secondary: 'bg-white border-2 border-growth-purple text-growth-purple hover:bg-growth-purple hover:text-white',
  outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-growth-purple',
  success: 'bg-success-green hover:bg-success-green-dark text-white',
  ghost: 'bg-transparent text-growth-purple hover:bg-growth-purple/10',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        inline-flex items-center justify-center gap-2
        font-semibold rounded-xl
        transition-all duration-300
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
}
