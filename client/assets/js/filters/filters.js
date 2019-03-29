/**
 * @file description
 * @author email
 */

import moment from 'moment';
import format from 'format';

moment.locale('zh-cn');

const filters = {
    int(value, radix) {
        if (!value) {
            if (value === 0 || value === '0') {
                return 0;
            }
            return '';
        }
        radix = radix || 10;
        return parseInt(value, radix);
    },
    float(value, fixed) {
        if (!value) {
            if (value === 0 || value === '0') {
                return 0;
            }
            return '';
        }
        fixed = fixed || 2;
        return parseFloat(value).toFixed(fixed);
    },
    split(value, separator) {
        if (!value) {
            return [];
        }
        return value.split(separator);
    },
    substr(value, startIndex, endIndex) {
        if (!value) {
            return '';
        }
        startIndex = startIndex || 0;
        endIndex = endIndex || value.length;
        return value.substr(startIndex, endIndex);
    },
    capitalize(value) {
        if (!value) {
            return '';
        }
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
    },
    uppercase(value) {
        return value.toUpperCase();
    },
    lowercase(value) {
        return value.toLowerCase();
    },
    find(value, key, content) {
        if (!content) {
            return value.filter(function (item) {
                return item[key];
            });
        }
        return value.filter(function (item) {
            return item[key] !== undefined && item[key] !== null && item[key].indexOf(content) !== -1;
        });
    },
    sort(value, key, order = 'desc') {
        return value.slice().sort(function (prev, next) {
            if (order === 'desc') {
                return prev[key] < next[key];
            }
            else if (order === 'asc') {
                return prev[key] > next[key];
            }
        });
    },
    join(value, separator) {
        if (Array.isArray(value)) {
            return value.join(separator);
        }
        return value;
    },
    slice(value, startIndex, endIndex) {
        if (!value) {
            return [];
        }
        if (parseInt(startIndex, 10) < 0) {
            startIndex = startIndex + value.length;
        }
        endIndex = endIndex || value.length;
        return value.slice(startIndex, endIndex);
    },
    date(value, fmt, locale) {
        let mnt = moment(value);
        if (mnt.isValid()) {
            if (fmt === 'fromNow') {
                return mnt.fromNow();
            }
            else if (fmt === undefined) {
                return mnt.format(fmt);
            }
            else {
                let mnt2;
                if (fmt === null) {
                    mnt2 = moment();
                }
                else {
                    mnt2 = moment(fmt);
                }
                if (mnt2.isValid()) {
                    let duration = moment.duration(mnt2.diff(mnt));
                    let days = parseInt(duration.asDays(), 10);
                    let hours = parseInt(duration.asHours(), 10) - days * 24;
                    let minutes = parseInt(duration.asMinutes(), 10) - days * 24 * 60 - hours * 60;
                    let secs = parseInt(duration.asSeconds(), 10) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
                    let ret = [];
                    locale = locale || 'zh-cn';
                    if (locale === 'en') {
                        if (days) {
                            ret.push(days + 'day');
                        }
                        if (hours) {
                            ret.push(hours + 'h');
                        }
                        if (minutes) {
                            ret.push(minutes + 'm');
                        }
                        if (secs) {
                            ret.push(secs + 's');
                        }
                    }
                    else {
                        if (days) {
                            ret.push(days + '天');
                        }
                        if (hours) {
                            ret.push(hours + '小时');
                        }
                        if (minutes) {
                            ret.push(minutes + '分钟');
                        }
                        if (secs) {
                            ret.push(secs + '秒');
                        }
                    }

                    return ret.join('');
                }
                else {
                    return value;
                }
            }
        }
        return value;
    },
    printf(value, fmt) {
        if (Array.isArray(value)) {
            let args = [].concat(fmt, value);
            return format.apply(null, args);
        }
        return format(fmt, value);
    },
    kv(key, map, alias) {
        if (Array.isArray(key)) {
            return key.map(function (key) {
                return kvParse(key, map, alias);
            });
        }
        return kvParse(key, map, alias);
    },
    percentage(value) {
        if (!value) {
            if (value === 0 || value === '0') {
                return 0;
            }
            return '';
        }
        value = parseFloat(value);
        if (value === -1) {
            return '';
        }
        return value * 100;
    },
    escape(value) {
        let re = /<|>|""|&/g;
        let reMap = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '&': '&amp;'
        };
        return value.replace(re, mat => reMap[mat]);
    },
    unescape(value) {
        let re = /&(?:lt|gt|quot|amp);/g;
        let reMap = {
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&amp;': '&'
        };
        return value.replace(re, mat => reMap[mat]);
    }
};

function kvParse(key, map, alias) {
    let val;
    if (Array.isArray(map)) {
        for (let item of map) {
            if (item.key === key) {
                val = alias ? item[alias] : item.value;
            }
        }
    }
    else if (typeof map === 'object' && map !== null) {
        val = map[key];
    }
    return val === undefined ? key : val;
}

export default function (Vue) {
    for (let key in filters) {
        Vue.filter(key, filters[key]);
    }
}
