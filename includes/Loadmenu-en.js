document.write('<mynav><ul>' +
    '<li><a href="about-en.php">About Me</a></li>' +
    '<li ' + (activePage === 'Codinghome' ? 'class="active"' : '') + '><a href="Codinghome.php">Coding Projects</a></li>' +
    '<li ' + (activePage === 'Physicshome' ? 'class="active"' : '') + '><a href="Physicshome.php">Physics Projects</a></li>' +
    '<li ' + (activePage === 'Otherhome' ? 'class="active"' : '') + '><a href="Otherhome.php">Other Projects</a></li>' +
    '</ul></mynav>');


