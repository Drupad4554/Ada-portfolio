document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents page refresh

    const selectedAnswer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById('quiz-result');

    if (!selectedAnswer) {
        result.textContent = 'Please select an answer before submitting!';
        result.style.color = 'red';
        return;
    }

    if (selectedAnswer.value === 'b') {
        result.textContent = '✅ Correct! Ada Lovelace is known for creating the first algorithm.';
        result.style.color = 'green';
    } else {
        result.textContent = '❌ Incorrect. Try again!';
        result.style.color = 'red';
    }
});

// Function to check when elements come into view
function revealElements() {
    let elements = document.querySelectorAll('section, .timeline-item, .step, .quiz');
    let windowHeight = window.innerHeight;

    elements.forEach(element => {
        let positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= -50) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
}

// Run function when scrolling
window.addEventListener('scroll', revealElements);

// // Trigger on page load
// document.addEventListener('DOMContentLoaded', revealElements);
// document.addEventListener('DOMContentLoaded', function() {
//     function revealSections() {
//         let sections = document.querySelectorAll('.legacy, .resources');
//         let windowHeight = window.innerHeight;

//         sections.forEach(section => {
//             let positionFromTop = section.getBoundingClientRect().top;

//             if (positionFromTop - windowHeight <= -50) {
//                 section.classList.add('show');
//             }
//         });
//     }

//     window.addEventListener('scroll', revealSections);
//     revealSections(); // Run on page load
// });


document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight + 10; // Adjust to prevent hiding behind the navbar

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });

    // Reveal Sections on Scroll
    function revealSections() {
        let sections = document.querySelectorAll("section, .timeline-item, .step, .quiz, .legacy, .resources");
        let windowHeight = window.innerHeight;

        sections.forEach(section => {
            let positionFromTop = section.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= -50) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger on load
});
