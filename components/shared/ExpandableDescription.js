import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function ExpandableDescription({ description, details }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div className="text-gray-600 mb-4">
        {isExpanded ? (
          <>
            <p className="whitespace-pre-wrap">{description}</p>
            {details && <p className="mt-2 whitespace-pre-wrap">{details}</p>}
          </>
        ) : (
          <p className="whitespace-pre-wrap">
            {description.length > 300 ? `${description.slice(0, 300)}...` : description}
          </p>
        )}
      </div>
      {(description.length > 300 || details) && (
        <button
          className="text-brand-blue hover:text-blue-700 font-semibold flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
          {isExpanded ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
        </button>
      )}
    </>
  )
}
