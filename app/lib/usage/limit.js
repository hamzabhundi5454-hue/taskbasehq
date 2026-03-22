export function checkLimit(key, limit = 3) {
  let usage = localStorage.getItem(key) || 0;

  if (usage >= limit) {
    alert("Free limit reached. Upgrade to Pro 🚀");
    return false;
  }

  localStorage.setItem(key, Number(usage) + 1);
  return true;
}