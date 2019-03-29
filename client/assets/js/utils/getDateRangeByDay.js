/**
 * @file description
 * @author email
 */

export default function getDateRangeByDay(n) {
    let end = new Date();
    let start = new Date();
    start.setTime(start.getTime() - 3600 * 1000 * 24 * n);
    return [start, end];
}
