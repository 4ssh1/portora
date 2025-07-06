export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

// Debouncing ensures that a function is not called too often — it waits for a pause in rapid events (like typing or scrolling) before running the function.
// 	Wait until user stops doing something

// Throttling allow execution at regular intervals
// use cases: scroll events, resizing