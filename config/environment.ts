/**
 * Environment configuration — loads .env and exports typed constants
 * for SauceDemo and Restful-Booker.
 *
 * @author abhishek.dwivedi
 */
import * as dotenv from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env') });

// ── SauceDemo ─────────────────────────────────────────────────────────────────
export const SAUCEDEMO_URL      = process.env.SAUCEDEMO_BASE_URL ?? 'https://www.saucedemo.com';
export const SAUCEDEMO_PASSWORD = 'secret_sauce';

export const SAUCEDEMO_USERS = {
  STANDARD:    process.env.SAUCEDEMO_STANDARD_USER    ?? 'standard_user',
  LOCKED:      process.env.SAUCEDEMO_LOCKED_USER      ?? 'locked_out_user',
  PROBLEM:     process.env.SAUCEDEMO_PROBLEM_USER     ?? 'problem_user',
  PERF_GLITCH: process.env.SAUCEDEMO_PERF_GLITCH_USER ?? 'performance_glitch_user'
} as const;

// ── Restful-Booker ────────────────────────────────────────────────────────────
export const RESTFUL_BOOKER_URL      = process.env.RESTFUL_BOOKER_BASE_URL ?? 'https://restful-booker.herokuapp.com';
export const RESTFUL_BOOKER_USERNAME = process.env.RESTFUL_BOOKER_USERNAME  ?? 'admin';
export const RESTFUL_BOOKER_PASSWORD = process.env.RESTFUL_BOOKER_PASSWORD  ?? 'password123';

// ── CI helpers ────────────────────────────────────────────────────────────────
export const isCI      = (): boolean => process.env.CI === 'true';
export const getTimeout = (): number => isCI() ? 60000 : 30000;
export const getRetries = (): number => isCI() ? 2 : 0;
