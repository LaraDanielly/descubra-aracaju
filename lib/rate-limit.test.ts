import { describe, expect, it, beforeEach } from "vitest";
import { rateLimit, resetRateLimits } from "@/lib/rate-limit";

describe("rateLimit", () => {
  beforeEach(() => resetRateLimits());

  it("permite até o limite na janela", () => {
    for (let i = 0; i < 3; i++) {
      expect(rateLimit("test", 3, 60_000).ok).toBe(true);
    }
    const blocked = rateLimit("test", 3, 60_000);
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.retryAfter).toBeGreaterThan(0);
  });
});
