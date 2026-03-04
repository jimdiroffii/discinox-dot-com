document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('discinox');
  if (!el) return;

  function updateCountdown() {
    const now = new Date(); // local timezone
    const year = now.getFullYear();

    // June is month 5 (0-based index)
    const thisYearStart = new Date(year, 5, 21, 0, 0, 0, 0);
    const thisYearEnd = new Date(year, 5, 22, 0, 0, 0, 0);

    let target;
    if (now >= thisYearStart && now < thisYearEnd) {
      el.textContent = 'Discinox is today!';
      return;
    }

    if (now < thisYearStart) {
      target = thisYearStart;
    } else {
      // past this year's Discinox, look to next year
      target = new Date(year + 1, 5, 21, 0, 0, 0, 0);
    }

    // Calculate full days until target (round up so partial days count as a day)
    const msPerDay = 1000 * 60 * 60 * 24;
    const days = Math.ceil((target - now) / msPerDay);
    el.textContent = `${days} day${days === 1 ? '' : 's'} until the next Discinox!`;
  }

  // initial update and then update every minute
  updateCountdown();
  setInterval(updateCountdown, 60 * 1000);
});