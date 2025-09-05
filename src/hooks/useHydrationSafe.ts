import { useState, useEffect } from 'react';

/**
 * Hook to safely handle hydration mismatches caused by browser extensions
 * Returns true when the component is mounted on the client side
 */
export function useHydrationSafe() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
