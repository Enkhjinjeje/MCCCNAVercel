import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function useNavigation() {
  const [navigation, setNavigation] = useState({ years: [], programs: [] })
  const router = useRouter()
  useEffect(() => {
    const controller = new AbortController()
    fetch("/api/navigation", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unavailable")
        return response.json()
      })
      .then(setNavigation)
      .catch(() => {})
    return () => controller.abort()
  }, [router.asPath])
  return navigation
}
