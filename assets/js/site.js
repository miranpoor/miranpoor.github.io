// memoyad.com scripts, shared by every page. Each block does nothing on pages without its elements.

// Video loop with 3-second pause
const demoVideo = document.getElementById('demoVideo');
if (demoVideo) {
    demoVideo.addEventListener('ended', function() {
        setTimeout(() => {
            demoVideo.currentTime = 0;
            demoVideo.play();
        }, 2000); // 2-second pause before restart
    });
}

// Beta waitlist – submissions handled by Formspree

const waitlistForm = document.getElementById('waitlist-form');
const waitlistBtn = document.getElementById('waitlist-btn');
const waitlistMessage = document.getElementById('waitlist-message');

if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
        e.preventDefault();

        waitlistMessage.style.display = 'none';
        waitlistMessage.className = 'waitlist-message';
        waitlistBtn.disabled = true;
        waitlistBtn.textContent = 'Submitting\u2026';

        const data = new FormData(waitlistForm);

        fetch(waitlistForm.action, {
            method: waitlistForm.method,
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            waitlistBtn.disabled = false;
            waitlistBtn.textContent = 'Join Beta Waitlist';
            waitlistMessage.style.display = 'block';

            if (response.ok) {
                waitlistMessage.className = 'waitlist-message success';
                waitlistMessage.textContent = "Thank you! You're on the beta waitlist.";
                waitlistForm.reset();
            } else {
                response.json().then(errData => {
                    waitlistMessage.className = 'waitlist-message error';
                    if (Object.hasOwn(errData, 'errors')) {
                        waitlistMessage.textContent = errData['errors'].map(err => err['message']).join(', ');
                    } else {
                        waitlistMessage.textContent = 'Something went wrong. Please try again.';
                    }
                });
            }
        }).catch(() => {
            waitlistBtn.disabled = false;
            waitlistBtn.textContent = 'Join Beta Waitlist';
            waitlistMessage.style.display = 'block';
            waitlistMessage.className = 'waitlist-message error';
            waitlistMessage.textContent = 'Network error. Please try again.';
        });
    });
}

// Contact form (contact.html) - submissions handled by Formspree
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const sendBtn = document.getElementById('contact-send');
    const status = document.getElementById('contact-status');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        status.className = 'form-status';
        status.textContent = '';
        sendBtn.disabled = true;
        sendBtn.textContent = 'Sending\u2026';
        fetch(contactForm.action, { method: 'POST', body: new FormData(contactForm), headers: { 'Accept': 'application/json' } })
            .then(async (response) => {
                if (response.ok) {
                    status.className = 'form-status ok';
                    status.textContent = 'Thanks! Your message was sent. We will reply by email.';
                    contactForm.reset();
                } else {
                    const data = await response.json().catch(() => ({}));
                    status.className = 'form-status err';
                    status.textContent = (data.errors || []).map(x => x.message).join(', ') ||
                        'Your message could not be sent. Please try again, or email us instead.';
                }
            })
            .catch(() => {
                status.className = 'form-status err';
                status.textContent = 'Your message could not be sent. Check your connection and try again, or email us instead.';
            })
            .finally(() => { sendBtn.disabled = false; sendBtn.textContent = 'Send message'; });
    });
}

// Simple Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simple Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});
