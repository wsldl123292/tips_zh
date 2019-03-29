/**
 * @file description
 * @author email
 */

let fileServer;
let env = 'unknown';
export default function getFileServer() {
    let hostname = document.location.hostname;
    let port = Math.floor(document.location.port);

    if (hostname === 'guoke.map.baidu.com') {
        env = 'product';
    }
    else if (hostname === 'pregz.guoke.map.baidu.com') {
        env = 'prepare';
    }
    else if (hostname.includes('nj02-map-rd-zhongye11.nj02')) {
        if (port === 8228) {
            env = 'prepare';
        }
        else if (port === 8118) {
            env = 'product';
        }
        else {
            env = 'develop';
        }
    }
    else if (hostname === 'fe.dev.baidu.com' || hostname === '127.0.0.1') {
        env = 'local';
    }


    if (env === 'product') {
        fileServer = 'http://10.111.82.230:8081';
    }
    else if (env === 'prepare') {
        fileServer = 'http://10.126.81.100:8081';
    }
    else {
        fileServer = 'http://10.126.81.100:8081/fileserver?space=hpthindtest';
    }

    return fileServer;
}
