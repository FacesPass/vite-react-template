import dayjs from 'dayjs';

/** 时间转成时间戳 */
export function timeToTimestamp(time: string): string {
  return String(dayjs(time).valueOf());
}

/** 时间戳转成时间 */
export function timestampToTime(
  timestamp: number | string | Date,
  format = 'YYYY-MM-DD HH:mm:ss',
): string {
  return dayjs(timestamp).format(format);
}
