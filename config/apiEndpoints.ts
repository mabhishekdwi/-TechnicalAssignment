/**
 * API Endpoints — Restful-Booker
 * https://restful-booker.herokuapp.com/apidoc/index.html
 *
 * @author abhishek.dwivedi
 */

export const RESTFUL_BOOKER_BASE_URL = 'https://restful-booker.herokuapp.com';

// ── Authentication ────────────────────────────────────────────────────────────
export const AUTH_ENDPOINTS = {
  CREATE_TOKEN: '/auth'
};

// ── Booking ───────────────────────────────────────────────────────────────────
export const BOOKING_ENDPOINTS = {
  GET_ALL:   '/booking',
  GET_BY_ID: '/booking/:id',
  CREATE:    '/booking',
  UPDATE:    '/booking/:id',
  PARTIAL:   '/booking/:id',
  DELETE:    '/booking/:id'
};

// ── SauceDemo Web UI ──────────────────────────────────────────────────────────
export const SAUCEDEMO_BASE_URL = 'https://www.saucedemo.com';

export const SAUCEDEMO_USERS = {
  STANDARD:      'standard_user',
  LOCKED:        'locked_out_user',
  PROBLEM:       'problem_user',
  PERF_GLITCH:   'performance_glitch_user',
  ERROR:         'error_user',
  VISUAL:        'visual_user'
} as const;

export const SAUCEDEMO_PASSWORD = 'secret_sauce';

/**
 * Replace path parameter placeholders in an endpoint string.
 * @example buildEndpoint(BOOKING_ENDPOINTS.GET_BY_ID, { id: 42 }) → '/booking/42'
 */
export function buildEndpoint(
  endpoint: string,
  params: Record<string, string | number>
): string {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, String(value)),
    endpoint
  );
}
