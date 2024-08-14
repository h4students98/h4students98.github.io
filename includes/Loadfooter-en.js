 // document.write('<div class="blockfooter"> Website of William Colombini | Contact me: <i class="fa-solid fa-envelopes-bulk" style="color: #4598dc;"></i><a href=""mailto:ColombiniWilliam98@gmail.com" style="color: #FFB757;">ColombiniWilliam98@gmail.com</a> | Download my CV : <i class="fa-solid fa-newspaper" style="color: #3698da;"></i><a href="CV_William.pdf" download style="color: #FFB757;" style="text-decoration:none;">CVofWilliam.pdf</a> </div>');
// Define styles for icons
const iconStyle = 'style="width: 1em; height: 1em; margin-right: 0.2em;"';
const linkStyle = 'style="color: #FFB757;"';
const downloadLinkStyle = 'style="color: #FFB757; text-decoration:none;"';

// Email section
const emailIcon = `<img src="../assets/images/mail_pic.svg" alt="email icon" ${iconStyle}>`;
const email = `<a href="mailto:h4students98@gmail.com" ${linkStyle}>${emailIcon}h4students98@gmail.com</a>`;

// Phone section
const phoneIcon = `<img src="../assets/images/phone_pic.svg" ${iconStyle}>`;
const phone = `${phoneIcon} +39 3519869993`;

// Instagram section
const igIcon = `<img src="../assets/images/ig_pic.svg" ${iconStyle}>`;
const instagram = `${igIcon} @willy.colo`;

// CV Download section
const paperIcon = `<img src="../assets/images/paper_pic.svg" alt="download icon" ${iconStyle}>`;
const downloadCV = `<a href="../downloads/pdf/CV_Colombini_eng.pdf" download ${downloadLinkStyle}>${paperIcon}CV_Colombini_eng.pdf</a>`;

// Combine all sections
const footerContent = `
  <div class="blockfooter">
    Website of William Colombini | Contact me: ${email} | ${instagram} | Download CV: ${downloadCV}
  </div>
`;

// Write the footer content to the document
document.write(footerContent);

// For making it work on firefox
 window.onload = function() {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.clientHeight, html.clientHeight);

    if (height <= window.innerHeight) {
        document.getElementById("footer").style.position = "absolute";
        document.getElementById("footer").style.bottom = "0px";
    } else {
        document.getElementById("footer").style.position = "static";
    }
} 

// for mail : <i class="fa-solid fa-envelopes-bulk" style="color: #4598dc;"></i>

// for CV : <i class="fa-solid fa-newspaper" style="color: #3698da;"></i>
