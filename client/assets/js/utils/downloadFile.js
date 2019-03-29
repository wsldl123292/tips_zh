/**
 * @file 下载文件，拼接csv
 * @author wuhaiping
 */

export function downloadExcel(filename, data) {
    let name = `${filename}.csv`;
    let link = document.createElement('a');
    link.setAttribute('download', name);
    link.setAttribute('href', `data:text/csv;charset=utf-8,\uFEFF${encodeURIComponent(data)}`);
    link.click();
}
