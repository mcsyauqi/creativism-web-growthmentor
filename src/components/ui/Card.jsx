import { motion } from 'framer-motion';

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'p-6',
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.1)' } : {}}
      transition={{ duration: 0.3 }}
      className={`
        bg-white rounded-2xl shadow-lg
        border border-border-light
        ${padding}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
