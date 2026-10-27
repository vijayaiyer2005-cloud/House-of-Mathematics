const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const options = document.querySelectorAll('#answerOptions button');
const feedback = document.getElementById('quizFeedback');
options.forEach(button => button.addEventListener('click', () => {
  options.forEach(item => item.classList.remove('correct', 'wrong'));
  if (button.dataset.answer === '5') {
    button.classList.add('correct');
    feedback.textContent = 'Correct! Subtract 5, then divide by 3. x = 5.';
  } else {
    button.classList.add('wrong');
    feedback.textContent = 'Not quite. Try subtracting 5 from both sides first, then divide by 3.';
  }
}));
document.getElementById('showSolution').addEventListener('click', () => {
  const solution = document.getElementById('solution');
  solution.hidden = !solution.hidden;
  document.getElementById('showSolution').textContent = solution.hidden ? 'Show worked solution' : 'Hide worked solution';
});

// IMPORTANT: Replace this placeholder with the teacher's real enquiry email before publishing.
const TEACHER_EMAIL = 'replace-with-teacher-email@example.com';
document.getElementById('registrationForm').addEventListener('submit', event => {
  event.preventDefault();
  if (TEACHER_EMAIL === 'replace-with-teacher-email@example.com') {
    document.getElementById('formStatus').textContent = 'Setup needed: replace the placeholder teacher email in script.js before using registration enquiries.';
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Maths class enquiry - ' + data.get('classLevel'));
  const body = encodeURIComponent(
    'HOUSE OF MATHEMATICS enquiry\\n\\n' +
    'Student name: ' + data.get('studentName') + '\\n' +
    'Parent/guardian email: ' + data.get('parentEmail') + '\\n' +
    'Class: ' + data.get('classLevel') + '\\n' +
    'Preferred mode: ' + data.get('learningMode') + '\\n' +
    'Message: ' + (data.get('message') || 'Not provided')
  );
  window.location.href = 'mailto:' + TEACHER_EMAIL + '?subject=' + subject + '&body=' + body;
  document.getElementById('formStatus').textContent = 'Your email app should open. Please review and send the enquiry.';
});
