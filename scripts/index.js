const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((section) => observer.observe(section));
var questions = document.getElementsByClassName("questions");
for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        var answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}
