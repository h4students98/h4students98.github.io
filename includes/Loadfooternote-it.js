 // document.write('<div class="blockfooter"> Website of William Colombini | Contact me: <i class="fa-solid fa-envelopes-bulk" style="color: #4598dc;"></i><a href=""mailto:ColombiniWilliam98@gmail.com" style="color: #87CEEB;">ColombiniWilliam98@gmail.com</a> | Download my CV : <i class="fa-solid fa-newspaper" style="color: #3698da;"></i><a href="CV_William.pdf" download style="color: #87CEEB;" style="text-decoration:none;">CVofWilliam.pdf</a> </div>');
document.write('<div class="blockfooter"> Sito Web di William Colombini | Contatti: <a href="mailto:h4students98@gmail.com" style="color: #F9F871;"> <img src="../assets/images/mailnotes_pic.svg" alt="email icon" style="width: 1em; height: 1em; margin-right: 0.2em;"> h4students98@gmail.com</a> | <img src="../assets/images/phonenotes_pic.svg" style="width: 1em; height: 1em; margin-right: 0.2em;"> +39 3519869993 | <img src="../assets/images/ignotes_pic.svg" style="width: 1em; height: 1em; margin-right: 0.2em;"> @willy.colo | Scarica CV : <a href="../downloads/pdf/CV_Colombini_ita.pdf" download style="color: #F9F871; text-decoration:none;"><img src="../assets/images/papernotes_pic.svg" alt="download icon" style="width: 1em; height: 1em; margin-right: 0.2em;">CV_Colombini_ita.pdf</a></div>')


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