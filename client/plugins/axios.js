/**
 * @file description
 * @author email
 */
/* eslint-disable fecs-camelcase */

import API from '~/assets/constants/api/API';
import {Loading} from 'element-ui';
import {Message} from 'element-ui';

export default ({app, $axios, redirect}) => {

    let loading = {
        $apiStamp: null,
        instance: null
    };
    let apiStamp;
    let timer;


    $axios.onRequest(config => {

        apiStamp = `AXIOS_${(new Date()).getTime()}`;
        loading.$apiStamp = apiStamp;

        timer = setTimeout(() => {
            if (loading.$apiStamp === apiStamp && config.loading) {
                loading.instance = Loading.service({
                    background: 'rgba(0,0,0,0.5)',
                    // background: 'rgba(255,255,255, 0.2)',
                    lock: true,
                    spinner: 'el-icon-loading',
                    fullscreen: true
                });
            }
        }, config.loadingDelay);

        console.log('Making request to ' + config.url);
    });

    $axios.onResponse(() => {
        apiClean();
    });

    $axios.onError(error => {
        const url = error.request && error.request.responseURL;
        const code = error.response && error.response.status;
        const data = error.response && error.response.data;
        const text = error.response && error.response.statusText;

        apiClean();

        Message.error({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `<p><strong>UnExpected Server Error</strong> &nbsp; &nbsp; &nbsp; ${code} ${text}</p><br/><p>${url}</p>`,
            duration: 5000
        });
    });
    $axios.onWarningHandler = (data, options, resolve, reject) => {

        apiClean();

        if (options.plump) {
            return resolve(data);
        }

        let code = data.code;
        let msg = data.errorMsg || data.msg;

        // 登录信息失效
        if (code === 30001) {
            msg = '登录信息已失效, 请重新登录！';
            app.store.commit('USER_INIT', {user: {}});
            app.router.go(1);
        }

        Message.warning({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: `<p><strong>Warning</strong> &nbsp; &nbsp; &nbsp; 错误代码：${code}</p><br/><p>${msg}</p>`,
            duration: 4000
        });
    };

    API.forEach(api => {

        let type = api.type || 'query';
        let isReqInJson = type === 'json';

        $axios[api.name] = data => {
            let axiosOptions = Object.assign({
                method: 'get',
                validateStatus: function (status) {
                    return status >= 200 && status < 300; // default
                },
                plump: false,
                loading: true,
                loadingDelay: 200
            }, api);

            if (data) {
                for (let key in data) {
                    let v = data[key];
                    if ([null, undefined, ''].includes(v)) {
                        delete data[key];
                    }
                    // else if (isReqInJson && Array.isArray(v) && !v.length) {
                    //     debugger
                    //     delete data[key];
                    // }
                }
                if (isReqInJson) {
                    axiosOptions.data = data;
                }
                else {
                    axiosOptions.params = data;
                }
            }

            return new Promise((resolve, reject) => {
                return $axios(axiosOptions).then(res => {
                    let resData = res.data;
                    try {
                        if (!('code' in resData)) {
                            let code;
                            if ('status' in resData) {
                                switch (resData.status) {
                                    case 200:
                                        code = 0;
                                        break;
                                    case 400:
                                        code = 400;
                                        break;
                                    case 500:
                                        code = 500;
                                        break;
                                }
                                resData.errorMsg = resData.message;
                            }
                            else {
                                code = resData.errCode || 0;
                            }
                            resData.code = code;
                        }
                    }
                    catch (err) {
                        res.code = -1;
                        res.errorMsg = res.data;
                        return $axios.onWarningHandler(res, axiosOptions, resolve, reject);
                    }

                    if (resData.code === 0) {
                        return resolve(resData);
                    }
                    else {
                        $axios.onWarningHandler(resData, axiosOptions, resolve, reject);
                    }
                }).catch(error => {});
            });
        };
    });


    function apiClean() {
        clearTimeout(timer);
        setTimeout(() => {
            let instance = loading.instance;
            if (loading.$apiStamp === apiStamp) {
                instance && instance.close();
                loading.$apiStamp = null;
            }
        }, 200);
    }
}
