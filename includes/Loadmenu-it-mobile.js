document.write('<mynav><ul>' +
    '<li><a href="about-it-mobile.html">Home</a></li>' +
    '<li ' + (activePage === 'Codinghome-it' ? 'class="active"' : '') + '><a href="Codinghome-it-mobile.html">Coding</a></li>' +
    '<li ' + (activePage === 'Physicshome-it' ? 'class="active"' : '') + '><a href="Physicshome-it-mobile.html">Fisica</a></li>' +
    '<li ' + (activePage === 'Otherhome-it' ? 'class="active"' : '') + '><a href="Otherhome-it-mobile.html">Altro</a></li>' +
    '</ul></mynav>');