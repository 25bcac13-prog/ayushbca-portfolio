// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// TYPING EFFECT
const words = ["Web Developer", "Creative Coder", "Future Engineer"];
let i = 0, j = 0, current = "", deleting = false;

function type() {
    current = words[i];

    if (!deleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            deleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j < 0) {
            deleting = false;
            i = (i + 1) % words.length;
        }
    }
    setTimeout(type, deleting ? 50 : 100);
}
type();

// SCROLL ANIMATION (Better)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// SCROLL PROGRESS BAR
window.onscroll = () => {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress-bar").style.width = (scroll / height) * 100 + "%";
};

// PARTICLES
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true }
    }
});

// 3D TILT EFFECT
document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
        let x = e.offsetX;
        let y = e.offsetY;
        let rotateX = (y / card.offsetHeight - 0.5) * 10;
        let rotateY = (x / card.offsetWidth - 0.5) * -10;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});