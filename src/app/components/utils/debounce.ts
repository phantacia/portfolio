type DebouncedFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

export default function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number = 300
): DebouncedFunction<T> {
  let timeoutId: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(null, args), ms);
  };
}
