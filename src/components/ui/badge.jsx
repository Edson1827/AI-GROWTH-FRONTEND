import { Badge } from "./badge"

const BadgeComponent = ({ children, className, ...props }) => {
  return (
    <span 
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export { BadgeComponent as Badge }

