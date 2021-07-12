// 本文件提供了数据接口

import Papa from 'papaparse';

// 使用fetch API获取public路径下的csv文件，同时使用Papaparse库，解析该文件。
export function fetchCsvData(filePath) {
  return fetch(filePath)
    .then(res => res.text())
    .then(res => Papa.parse(res, { header: true }).data)
    .catch(e => console.error(e));
}

export function fetchJsonData(filePath) {
  return fetch(filePath)
    .then(res => res.json())
    .catch(e => console.error(e));
}