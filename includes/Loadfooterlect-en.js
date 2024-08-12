 // document.write('<div class="blockfooter"> Website of William Colombini | Contact me: <i class="fa-solid fa-envelopes-bulk" style="color: #4598dc;"></i><a href=""mailto:ColombiniWilliam98@gmail.com" style="color: #87CEEB;">ColombiniWilliam98@gmail.com</a> | Download my CV : <i class="fa-solid fa-newspaper" style="color: #3698da;"></i><a href="CV_William.pdf" download style="color: #87CEEB;" style="text-decoration:none;">CVofWilliam.pdf</a> </div>');
document.write('<div class="blockfooter"> Website of William Colombini | Contact me: <a href="mailto:h4students98@gmail.com" style="color: #FFE4E0;"> <img src="../assets/images/maillect_pic.svg" alt="email icon" style="width: 1em; height: 1em; margin-right: 0.2em;"> h4students98@gmail.com</a> | <img src="../assets/images/phonelect_pic.svg" style="width: 1em; height: 1em; margin-right: 0.2em;"> +39 3519869993 | <img src="../assets/images/iglect_pic.svg" style="width: 1em; height: 1em; margin-right: 0.2em;"> @willy.colo | Download CV : <a href="../downloads/pdf/CV_Colombini_eng.pdf" download style="color: #FFE4E0; text-decoration:none;"><img src="../assets/images/paperlect_pic.svg" alt="download icon" style="width: 1em; height: 1em; margin-right: 0.2em;">CV_Colombini_eng.pdf</a></div>')

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