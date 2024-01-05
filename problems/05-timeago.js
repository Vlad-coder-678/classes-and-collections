/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
  const releaseInfo = {
    upToTenSeconds: { maxTime: 10, text: "just now" },
    upToMinute: { maxTime: 60, text: "seconds ago" },
    upToTwoMinutes: { maxTime: 2 * 60, text: "1 minute ago" },
    upToTenMinutes: { maxTime: 10 * 60, text: "minutes ago" },
    upToHalfHour: { maxTime: 30 * 60, text: "minutes ago" },
    upToHour: { maxTime: 60 * 60, text: "30 minutes ago" },
    upToTwoHours:  { maxTime: 2 * 60 * 60, text: "1 hour ago" },
    upToHalfDay: { maxTime: 12 * 60 * 60, text: "hours ago" },
    upToDay: { maxTime: 24 * 60 * 60, text: "12 hours ago" },
    upToTwoDays: { maxTime: 2 * 24 * 60 * 60, text: "1 day ago" },
    upToWeek: { maxTime: 7 * 24 * 60 * 60, text: "a few days ago" },
    upToTwoWeeks: { maxTime: 2 * 7 * 24 * 60 * 60, text: "1 week ago" },
    upToMonth: { maxTime: 4 * 7 * 24 * 60 * 60, text: "weeks ago" },
    other: "undefined",
  };

  switch (true) {
    case (seconds < releaseInfo.upToTenSeconds.maxTime): return releaseInfo.upToTenSeconds.text;
    case (seconds < releaseInfo.upToMinute.maxTime): return `${Math.floor(seconds / 10) * 10} ${releaseInfo.upToMinute.text}`;
    case (seconds < releaseInfo.upToTwoMinutes.maxTime): return releaseInfo.upToTwoMinutes.text;
    case (seconds < releaseInfo.upToTenMinutes.maxTime): return `${Math.floor(seconds / 60)} ${releaseInfo.upToTenMinutes.text}`;
    case (seconds < releaseInfo.upToHalfHour.maxTime): return `${Math.floor(seconds / (60 * 5)) * 5} ${releaseInfo.upToHalfHour.text}`;
    case (seconds < releaseInfo.upToHour.maxTime): return releaseInfo.upToHour.text;
    case (seconds < releaseInfo.upToTwoHours.maxTime): return releaseInfo.upToTwoHours.text;
    case (seconds < releaseInfo.upToHalfDay.maxTime): return `${Math.floor(seconds / (60 * 60))} ${releaseInfo.upToHalfDay.text}`;
    case (seconds < releaseInfo.upToDay.maxTime): return releaseInfo.upToDay.text;
    case (seconds < releaseInfo.upToTwoDays.maxTime): return releaseInfo.upToTwoDays.text;
    case (seconds < releaseInfo.upToWeek.maxTime): return releaseInfo.upToWeek.text;
    case (seconds < releaseInfo.upToTwoWeeks.maxTime): return releaseInfo.upToTwoWeeks.text;
    case (seconds < releaseInfo.upToMonth.maxTime): return `${Math.floor(seconds / (7 * 24 * 60 * 60))} ${releaseInfo.upToMonth.text}`;
    default: return releaseInfo.other;
  }
}

module.exports = timeago;
