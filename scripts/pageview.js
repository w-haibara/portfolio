(async () => {
  const ORIGIN = "https://exe.w-haibara.com";

  try {
    await fetch(`${ORIGIN}/inc`, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
    });
  } catch (_) {}

  try {
    const res = await fetch(`${ORIGIN}/count`, { cache: "no-store" });
    const { count } = await res.json();
    Alpine.store("pageview", String(count))
  } catch (_) {
    Alpine.store("pageview", "-")
  }
})();
