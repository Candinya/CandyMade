export const roughAgo = (time: Date): string => {
  const precisionAgo = new Date().getTime() - time.getTime(); // 精确到毫秒

  let ago = precisionAgo / 1000; // 秒
  if (ago < 60) {
    return `${ago.toFixed(0)}秒`;
  }

  ago /= 60; // 分钟
  if (ago < 60) {
    return `${ago.toFixed(0)}分钟`;
  }

  ago /= 60; // 小时
  if (ago < 24) {
    return `${ago.toFixed(0)}小时`;
  }

  ago /= 24; // 天
  if (ago < 30) {
    return `${ago.toFixed(0)}天`;
  }

  ago /= 30; // 月
  if (ago < 12) {
    return `${ago.toFixed(0)}个月`;
  }

  ago /= 12; // 年
  if (ago < 100) {
    return `${ago.toFixed(0)}年`;
  }

  ago /= 100; // 世纪 // 真的会有地方用到这个嘛

  return `${ago.toFixed(0)}个世纪`;
};
