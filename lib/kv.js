import { kv } from "@vercel/kv";

/**
 * Retrieve a value from Vercel KV.
 * @template T
 * @param {string} key
 * @returns {Promise<T | null>}
 */
export async function kvGet(key) {
  return kv.get(key);
}

/**
 * Store a value in Vercel KV.
 * @param {string} key
 * @param {unknown} value
 * @returns {Promise<unknown>}
 */
export async function kvSet(key, value) {
  return kv.set(key, value);
}

export { kv };
