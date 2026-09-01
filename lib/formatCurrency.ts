export function formatCurrency(n: number): string {
  // Format as Nigerian Naira with thousands separator
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(n);
}
