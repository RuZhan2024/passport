const template = (opts = {}) => {
    const tpl = `
    <div id="no-autocomplete">
        <input type="text">
        <input type="password">
    </div>
        <div id="login-wrapper">
            <form id="login-form" onsubmit="return false">
                <label class="login-account-wrapper">
                    <span class="account-label">${ opts.accountLabel }</span>
                    <input id="login-account" name="account" type="text" placeholder="${ opts.accountPlaceholder }">
                    <span id="clear-account" class="del">
                </label>
                <label class="login-password-wrapper">
                <span class="password-label">${ opts.passwordLabel }</span>
                <input id="login-password" name="password" type="password" placeholder="${ opts.passwordPlaceholder }">
            </label>
            <input id="login-btn" class="login-btn" type="submit" value="${ opts.loginBtnText }">
            </form>
        </div>
    `;
    return tpl;
}

export default (conf = {}) => {
    conf.container.innerHTML = template(conf);
}