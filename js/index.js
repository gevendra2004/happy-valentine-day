window.addEventListener('load', () => {
    textAnim();
    smallHeartAnim();
});

// Insert smallHearts element
const total = 13;
const container = document.querySelector('.smallHearts');
for (var i = 0, span; i < total; i++) {
    span = document.createElement('span');
    span.className = 'smallHeart';
    container.appendChild(span);
}

function playAudio() {
    var audio = document.getElementById("backgroundAudio");
    audio.play();
    // Remove the onclick attribute to prevent multiple plays
    document.querySelector('.drawBox').removeAttribute("onclick");
  }
// Text animation
function textAnim() {
    const tl = gsap.timeline();
    tl.set('.s', {
        opacity: 1
    }).
    from('.s', {
        duration: 0.4,
        delay: '3',
        ease: 'power1.inOut',
        scale: 0,
        y: 40,
        stagger: 0.04
    });
}

// Small hearts animation
function smallHeartAnim() {
    const tl = gsap.timeline();
    tl.set('.smallHeart', {
        opacity: 1
    }).
    fromTo(
        '.smallHeart', {
            scale: 0,
            rotate: '-=25',
            y: '+=70'
        }, {
            duration: 3.4,
            delay: '3.6',
            ease: 'slow.out',
            rotate: 'random(-20, 20)',
            scale: 'random(0.5, 1.5)',
            y: '0',
            x: Math.PI * 4,
            modifiers: {
                x: function(x) {
                    return Math.sin(parseFloat(x)) * 15 + 'px';
                }
            },
            stagger: {
                each: 0.08,
                from: 'random'
            }
        });
}
