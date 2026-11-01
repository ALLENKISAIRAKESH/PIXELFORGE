/**
 * Developer runtime error logger for client and SSR boundaries.
 */
export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[Runtime Error Caught]", error, context);
}

