
import { getId } from '../common/utils.js';

const template = (opts = {}) => {
    const autocompleteTpl = `
    <div id="no-autocomplete">
    <input type="text">
    <input type="password">
</div>
    `;

    const autocompleteAdapter = opts.autocomplete ? '' : autocompleteTpl;

    const autocompleteValue = opts.autocomplete ? 'on' : 'off'



    const tpl = `
        <div id="login-wrapper">
            <form id="login-form" onsubmit="return false">
                ${ autocompleteAdapter }
                <label class="login-account-wrapper">
                    <span class="account-label">${ opts.accountLabel }</span>
                    <input id="login-account" autocomplete="${ autocompleteValue }" name="account" type="text" placeholder="${ opts.accountPlaceholder }">
                    <span id="clear-account" class="del">
                </label>
                <label class="login-password-wrapper">
                <span class="password-label">${ opts.passwordLabel }</span>
                <input id="login-password" autocomplete="${ autocompleteValue }" name="password" type="password" placeholder="${ opts.passwordPlaceholder }">
            </label>
            <input id="login-btn" class="login-btn" type="submit" value="${ opts.loginBtnText }">
            </form>
        </div>
    `;
    return tpl;
}

export default (conf = {}) => {
    conf.container.innerHTML = template(conf);
    const $noAutocompete = getId('no-autocomplete');
    if ($noAutocompete) {
        $noAutocompete.style.opacity = 0;
        $noAutocompete.style.height = 0;
    }
}