document.write('<mynav><ul>' +
    '<li><a href="about-it.html">Home</a></li>' +
    '<li ' + (activePage === 'Codinghome-it' ? 'class="active"' : '') + '><a href="Codinghome-it.html">Progetti di Coding</a></li>' +
    '<li ' + (activePage === 'Physicshome-it' ? 'class="active"' : '') + '><a href="Physicshome-it.html">Progetti di Fisica</a></li>' +
    '<li ' + (activePage === 'Otherhome-it' ? 'class="active"' : '') + '><a href="Otherhome-it.html">Altri Progetti</a></li>' +
    '</ul></mynav>');