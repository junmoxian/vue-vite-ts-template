export function calculateTheTimeDifference(startDate?: Date | string | number, endDate?: Date | string | number) {
  const now = new Date()
  const start = startDate ? new Date(startDate) : now
  const end = endDate ? new Date(endDate) : now
  // Ensure we use numeric timestamps for arithmetic to satisfy TypeScript
  const startMs = Number.isNaN(start.getTime()) ? now.getTime() : start.getTime()
  const endMs = Number.isNaN(end.getTime()) ? now.getTime() : end.getTime()
  // If end is before start, take the absolute difference (you can change this behavior if you prefer signed results)
  let diffMs = endMs - startMs
  if (diffMs < 0) diffMs = Math.abs(diffMs)

  const diffInSeconds = Math.floor(diffMs / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)
  const diffInMonths = Math.floor(diffInDays / 30)
  const diffInYears = Math.floor(diffInMonths / 12)

  if (diffInYears > 0) {
    return `${diffInYears}年${diffInMonths % 12}月${diffInDays % 30}天`
  } else if (diffInMonths > 0) {
    return `${diffInMonths}月${diffInDays % 30}天`
  } else if (diffInDays > 0) {
    return `${diffInDays}天${diffInHours % 24}小时`
  } else if (diffInHours > 0) {
    return `${diffInHours}小时${diffInMinutes % 60}分钟`
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes}分钟${diffInSeconds % 60}秒`
  } else {
    return `${diffInSeconds}秒`
  }
}
