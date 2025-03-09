document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed.");

    // 🎆 Fireworks Effect Fix
    const canvas = document.getElementById("fireworksCanvas");
    if (!canvas) {
        console.error("Fireworks canvas not found!");
    } else {
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Firework {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                this.particles = [];

                for (let i = 0; i < 50; i++) {
                    this.particles.push({
                        x: this.x,
                        y: this.y,
                        angle: Math.random() * Math.PI * 2,
                        speed: Math.random() * 5 + 1,
                        alpha: 1
                    });
                }
            }

            update() {
                this.particles.forEach(p => {
                    p.x += Math.cos(p.angle) * p.speed;
                    p.y += Math.sin(p.angle) * p.speed;
                    p.alpha -= 0.02;
                });

                this.particles = this.particles.filter(p => p.alpha > 0);
            }

            draw() {
                ctx.globalAlpha = 1;
                this.particles.forEach(p => {
                    ctx.globalAlpha = p.alpha;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        }

        let fireworks = [];

        function launchFirework() {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height * 0.5;
            let color = `hsl(${Math.random() * 360}, 100%, 60%)`;
            fireworks.push(new Firework(x, y, color));
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fireworks.forEach(f => f.update());
            fireworks.forEach(f => f.draw());

            fireworks = fireworks.filter(f => f.particles.length > 0);
            requestAnimationFrame(animate);
        }

        setInterval(launchFirework, 1000);
        animate();
    }

    // 🎶 Background Music Fix
    const bgMusic = document.getElementById("bgMusic");
    const playMusicButton = document.getElementById("playMusicButton");

    if (playMusicButton && bgMusic) {
        playMusicButton.addEventListener("click", function () {
            bgMusic.play()
                .then(() => {
                    playMusicButton.style.display = "none"; // Hide button after playing
                })
                .catch(error => console.log("Error playing music:", error));
        });
    }

    // 🎥 Stop Background Music When Video Plays
    const video = document.querySelector("video");

    if (video && bgMusic) {
        video.addEventListener("play", function () {
            bgMusic.pause(); // Stop music when video starts
        });

        video.addEventListener("pause", function () {
            bgMusic.play(); // Resume music when video is paused
        });

        video.addEventListener("ended", function () {
            bgMusic.play(); // Restart music when video ends
        });
    }

    // ✅ Fix: Ensure the correct canvas exists
    var mainCanvas = document.getElementById("myCanvas");
    if (mainCanvas) {
        var ctx = mainCanvas.getContext("2d");
        console.log("Canvas context initialized:", ctx);
    } else {
        console.error("Canvas element not found!");
    }

    // 🚀 Login Fix
    var loginForm = document.getElementById("loginForm");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginContainer = document.querySelector(".login-container");
    var wishContainer = document.querySelector(".wish-container");
    var usernameDisplay = document.getElementById("usernameDisplay");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        var username = usernameInput.value.trim();
        var password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Please enter both username and password.");
            return;
        }

        // ✅ Fix: Correct Login Credentials
        var validUsername = "Mr.Thejuoo<<3!!..";
        var validPassword = "theja@soundharya";

        if (username === validUsername && password === validPassword) {
            alert("Login successful!");

            // Hide login form and show birthday wishes
            loginContainer.style.display = "none";
            wishContainer.style.display = "block";
            usernameDisplay.innerText = username;
        } else {
            alert("Invalid username or password. Try again.");
        }
    });

    // ✅ Fix: Remove Unnecessary fetch Call to `login.php`
    /*
    fetch("login.php", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = "home.html";
        } else {
            alert("Invalid login details");
        }
    })
    .catch(error => console.error("Error:", error));
    */

    // 🚀 Logout Functionality
    var logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", function () {
        wishContainer.style.display = "none";
        loginContainer.style.display = "block";
    });
});
