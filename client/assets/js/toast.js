/**
 * @file description
 * @author email
 */
/* eslint-disable fecs-camelcase */

const toasterTypes = {
    normal: 'primary',
    success: 'success',
    error: 'danger',
    warning: 'warning'
};
let titleQ;
let toastQ;
let subTitleQ;
let contentQ;
let bodyQ;
let timer;

function showToast(title, subTitle, msg, type = 'normal', timeout) {
    let typeName = 'toast-' + (toasterTypes[type] || 'normal');

    timer && (toastQ.attr('class', 'toast'));
    toastQ.addClass(typeName);

    titleQ.html(title);
    subTitleQ.html(subTitle);
    contentQ.html(msg);

    bodyQ.append(toastQ);

    toastQ.show();

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
        toastQ.hide();
        toastQ.removeClass(typeName);
    }, timeout || 3000);
}

export default Q => {
    bodyQ = Q('body');
    toastQ = Q(`<div class="toast">
                <i class="toast-close icon icon-times"></i>
                <h3 class="toast-title">
                    <span class="toast-main-title"></span>
                    <span class="toast-sub-title"></span>
                </h3>
                <div class="toast-content">
                    <p></p>
                </div>
            </div>`);
    titleQ = toastQ.find('.toast-main-title');
    subTitleQ = toastQ.find('.toast-sub-title');
    contentQ = toastQ.find('.toast-content p');
    toastQ.on('click', '.toast-close', function () {
        toastQ.hide();
    });

    return {
        Success(title, subTitle, msg, timeout) {
            showToast(title, subTitle, msg, 'success', timeout);
        },
        Error(title, subTitle, msg, timeout) {
            showToast(title, subTitle, msg, 'error', timeout);
        },
        Warning(title, subTitle, msg, timeout) {
            showToast(title, subTitle, msg, 'warning', timeout);
        },
        Toast(title, subTitle, msg, timeout) {
            showToast(title, subTitle, msg, 'normal', timeout);
        }
    };
};
