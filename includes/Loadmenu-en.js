document.write('<mynav><ul>' +
    '<li><a href="about-en.html">About Me</a></li>' +
    '<li ' + (activePage === 'Codinghome' ? 'class="active"' : '') + '><a href="Codinghome.html">Coding Projects</a></li>' +
    '<li ' + (activePage === 'Physicshome' ? 'class="active"' : '') + '><a href="Physicshome.html">Physics Projects</a></li>' +
    '<li ' + (activePage === 'Otherhome' ? 'class="active"' : '') + '><a href="Otherhome.html">Other Projects</a></li>' +
    '</ul></mynav>');


