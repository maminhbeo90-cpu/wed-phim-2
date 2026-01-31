let isLoginMode = true;

function toggleMode() {
    isLoginMode = !isLoginMode;
    document.getElementById("title").innerText =
        isLoginMode ? "Đăng nhập" : "Đăng ký";

    document.querySelector(".switch").innerText =
        isLoginMode
            ? "Chưa có tài khoản? Đăng ký"
            : "Đã có tài khoản? Đăng nhập";
}

function handleAuth() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
        alert("⚠️ Nhập đầy đủ thông tin");
        return;
    }

    if (isLoginMode) {
        // LOGIN
        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (!savedUser || savedUser.user !== user || savedUser.pass !== pass) {
            alert("❌ Sai tài khoản hoặc mật khẩu");
            return;
        }

       localStorage.setItem("isLogin", "true");
localStorage.setItem("currentUser", user); // 👈 LƯU TÊN
alert("✅ Đăng nhập thành công");
window.location.href = "index.html";
    } else {
        // REGISTER
        localStorage.setItem(
            "user",
            JSON.stringify({ user, pass })
        );
        alert("✅ Đăng ký thành công, hãy đăng nhập");
        toggleMode();
    }
}