document.write('<mynav><ul>' +
    '<li><a href="about-it-mobile.php">Home</a></li>' +
    '<li ' + (activePage === 'Codinghome-it' ? 'class="active"' : '') + '><a href="Codinghome-it-mobile.php">Coding</a></li>' +
    '<li ' + (activePage === 'Physicshome-it' ? 'class="active"' : '') + '><a href="Physicshome-it-mobile.php">Fisica</a></li>' +
    '<li ' + (activePage === 'Otherhome-it' ? 'class="active"' : '') + '><a href="Otherhome-it-mobile.php">Altro</a></li>' +
    '</ul></mynav>');