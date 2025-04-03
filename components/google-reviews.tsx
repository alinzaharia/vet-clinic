"use client"

import { useEffect } from "react"
import Script from "next/script"

interface GoogleReviewsProps {
  widgetId: string
}

export default function GoogleReviews({ widgetId }: GoogleReviewsProps) {
  useEffect(() => {
    // This will reinitialize the widget if needed
    if (window.elfsight) {
      window.elfsight.reinit()
    }
  }, [widgetId])

  return (
    <div className="elfsight-app-reviews" data-elfsight-app-widget-id={widgetId}>
      {/* The widget will be rendered here */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.elfsight) {
            window.elfsight.reinit()
          }
        }}
      />
    </div>
  )
}

// Add this to make TypeScript happy
declare global {
  interface Window {
    elfsight: {
      reinit: () => void
    }
  }
}

