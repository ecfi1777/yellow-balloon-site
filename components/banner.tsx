interface BannerProps {
  title: string
  subtitle?: string
  variant?: "blue" | "yellow"
  className?: string
}

export default function Banner({ title, subtitle, variant = "blue", className = "" }: BannerProps) {
  const bgClass = variant === "yellow" ? "bg-yellow-balloon" : "bg-blue-balloon"

  return (
    <section className={`${bgClass} py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-balloon-dark mb-4 text-balance">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-balloon-dark max-w-2xl mx-auto text-pretty">{subtitle}</p>}
      </div>
    </section>
  )
}
