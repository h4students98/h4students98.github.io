The folder structure is: 

my_personal_website/
│
├── assets/
│   ├── css/
│   │   ├── styles.css         # Common CSS styles
│   │   ├── mobile.css         # CSS for mobile version
│   │   ├── desktop.css        # CSS for desktop version
│   │   ├── ...
│   │
│   ├── js/
│   │   ├── script.js          # Common JavaScript
│   │   ├── mobile.js          # JavaScript for mobile version
│   │   ├── desktop.js         # JavaScript for desktop version
│   │   ├── ...
│   │
│   ├── images/                # Images for your website
│   │   ├── logo.png
│   │   ├── background.jpg
│   │   ├── ...
│
├── downloads/
│   ├── pdf/
│   │   ├── file1.pdf         # PDF files for download
│   │   ├── file2.pdf
│   │   ├── ...
│   │
│   ├── docs/
│   │   ├── document1.docx    # Document files for download
│   │   ├── document2.docx
│   │   ├── ...
│
├── includes/                  # PHP includes for reusability
│   ├── header.php
│   ├── footer.php
│   ├── ...
│
├── mobile/
│   ├── index.php              # Mobile version homepage
│   ├── about.php              # Mobile version about page
│   ├── ...
│
├── desktop/
│   ├── index.php              # Desktop version homepage
│   ├── about.php              # Desktop version about page
│   ├── ...
│
├── index.php                  # PHP logic to determine language and redirect
│
├── .htaccess                  # For configuring URL rewriting (if using Apache)
│
├── config.php                 # Configuration settings
│
├── .gitignore                 # List of files/folders to be ignored by Git
│
└── README.md                  # Project documentation