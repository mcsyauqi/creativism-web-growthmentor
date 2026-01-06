import { motion } from 'framer-motion';

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`
        ${centered ? 'text-center' : 'text-left'}
        mb-12
        ${className}
      `}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-growth-purple/10 text-growth-purple text-sm font-semibold rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
