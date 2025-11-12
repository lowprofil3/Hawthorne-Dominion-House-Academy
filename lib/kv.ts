import { kv } from "@vercel/kv";

type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };

function serialize(key: string, value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  const serialized = JSON.stringify(value);

  if (serialized === undefined) {
    throw new Error(`Failed to serialize value for key "${key}"`);
  }

  return serialized;
}

function deserialize<T>(value: string | null): T | null {
  if (value === null) {
    return null;
  }

  if (value === "") {
    return "" as unknown as T;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return value as unknown as T;
  }
}

export async function kvGet<T>(key: string): Promise<T | null> {
  const value = await kv.get<string | null>(key);
  return deserialize<T>(value);
}

export async function kvSet(key: string, value: unknown): Promise<void> {
  const serialized = serialize(key, value);
  await kv.set(key, serialized);
}

export { kv };
