HOUSE OF MATHEMATICS — WEBSITE STARTER KIT

FILES
- index.html: page content
- style.css: design and responsive layout
- script.js: mobile menu, practice question, and email enquiry form
- assets/sample-formula-sheet.pdf: sample downloadable formula sheet
- assets/sample-worksheet.txt: sample downloadable worksheet

RUN LOCALLY
1. Extract the ZIP file to a folder on your computer.
2. Open the folder.
3. Double-click index.html to preview it in your browser.
4. For a more realistic local preview, use Visual Studio Code and its Live Server extension, or run:
   python -m http.server 8000
   Then visit http://localhost:8000 in your browser.

BEFORE PUBLISHING
1. Open script.js in a text editor.
2. Find: const TEACHER_EMAIL = 'replace-with-teacher-email@example.com';
3. Replace the placeholder with the teacher's real enquiry email address.
4. Replace sample PDF/worksheet with approved teaching resources.
5. Add real video links and class timetable. The current video area is a design placeholder.
6. The registration form does not save student data on a server; it prepares an email enquiry. Test it after adding the email address.
7. Do not collect or publish sensitive student information. For students under 18, use parent/guardian contact and follow applicable privacy rules.

LOW-COST HOSTING OPTION: GITHUB PAGES
1. Create/sign in to a GitHub account.
2. Create a new public repository named house-of-mathematics (or another name).
3. Upload index.html, style.css, script.js, and the assets folder, preserving the folder structure.
4. Open repository Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch; select main and /(root), then Save.
6. Wait for GitHub Pages to publish. The URL usually resembles https://YOUR-USERNAME.github.io/house-of-mathematics/
7. In Settings > Pages, follow the Custom domain instructions if you later buy a domain.

CUSTOM DOMAIN
A custom .com or .in domain usually has a yearly fee. Buy from a reputable registrar, then follow the hosting provider's exact DNS instructions. Prices vary; check the current renewal fee before purchasing.

LIMITATIONS OF THIS FIRST VERSION
- Static website: no database or admin dashboard.
- Registration: email-based, not stored online.
- Live classes: add meeting links manually; avoid publishing private meeting links publicly.
- Videos: embed teacher-approved videos or add private links.
- No online payment or student login system yet.

NEXT UPGRADE
If you want online student accounts, saved registrations, private course content, or automatic live-class scheduling, add a hosted backend/form service after choosing the required privacy and budget level.
