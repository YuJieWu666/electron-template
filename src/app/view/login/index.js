document.addEventListener('DOMContentLoaded', () => {
    // 获取导航项和登录区域元素
    const navItems = document.querySelectorAll('.nav-item');
    const accountLogin = document.querySelector('.account-login');
    const phoneLogin = document.querySelector('.phone-login');

    // 为每个导航项添加点击事件
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // 移除所有导航项的激活状态
            navItems.forEach(nav => nav.classList.remove('active'));
            // 为当前点击的导航项添加激活状态
            item.classList.add('active');

            // 根据点击的导航项切换登录方式
            if (index === 0) {
                accountLogin.classList.add('active');
                phoneLogin.classList.remove('active');
            } else {
                phoneLogin.classList.add('active');
                accountLogin.classList.remove('active');
            }
        });
    });

    // 获取发送验证码按钮
    const sendCodeBtn = document.querySelector('.send-code');
    let countdown = 60;
    let timer = null;

    // 发送验证码按钮点击事件
    sendCodeBtn.addEventListener('click', () => {
        if (sendCodeBtn.disabled) return;

        // 禁用按钮并开始倒计时
        sendCodeBtn.disabled = true;
        sendCodeBtn.textContent = `${countdown}秒后重新发送`;

        timer = setInterval(() => {
            countdown--;
            sendCodeBtn.textContent = `${countdown}秒后重新发送`;

            if (countdown === 0) {
                clearInterval(timer);
                sendCodeBtn.disabled = false;
                sendCodeBtn.textContent = '发送验证码';
                countdown = 60;
            }
        }, 1000);

        // TODO: 在这里添加发送验证码的实际逻辑
    });
});