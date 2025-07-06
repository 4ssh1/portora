export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  delay: number
): (...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}


// Debouncing ensures that a function is not called too often — it waits for a pause in rapid events (like typing or scrolling) before running the function.
// 	Wait until user stops doing something

// Throttling allow execution at regular intervals
// use cases: scroll events, resizing