(async () => {
  const ORIGIN = "https://exe.w-haibara.com";

  try {
    await fetch(`${ORIGIN}/inc`, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
    });
  } catch (_) {}

  const el = document.getElementById("pageview-count");
  if (!el) return;

  try {
    const res = await fetch(`${ORIGIN}/count`, { cache: "no-store" });
    const { count } = await res.json();
    el.textContent = String(count);
  } catch (_) {
    el.textContent = "-";
  }
})();
