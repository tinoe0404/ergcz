import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", centered && "text-center", className)}>
      {badge && (
        <span className="inline-block text-accent font-body text-sm font-semibold uppercase tracking-widest mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
        {title}
      </h2>
      <div
        className={cn(
          "w-16 h-1 bg-primary rounded-full mb-6",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
