import { timeToTimestamp, timestampToTime } from './index';

describe('Time referer function', () => {
  it('should return a right timestamp', () => {
    expect(timeToTimestamp('2021-12-18 23:17:31')).toBe('1639840651000');
  });

  it('should return a right time when miss the format param', () => {
    expect(timestampToTime(1639840660694)).toBe('2021-12-18 23:17:40');
  });
});
