export function getTimeLeft(dateString, showMinutes) {
  const dateNow = new Date();
  const endDate = new Date(dateString);
  const diff = endDate - dateNow;

  if (diff <= 0) {
    return "Ended";
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  const timeLeft = [];
  if (days > 0) timeLeft.push(`${days}d`);
  if (hours > 0) timeLeft.push(`${hours}h`);
  if (showMinutes && mins > 0) timeLeft.push(`${mins}m`);

  return timeLeft.join(" ");
}
