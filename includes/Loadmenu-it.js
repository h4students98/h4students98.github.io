document.write('<mynav><ul>' +
    '<li><a href="about-it.php">Home</a></li>' +
    '<li ' + (activePage === 'Codinghome-it' ? 'class="active"' : '') + '><a href="Codinghome-it.php">Progetti di Coding</a></li>' +
    '<li ' + (activePage === 'Physicshome-it' ? 'class="active"' : '') + '><a href="Physicshome-it.php">Progetti di Fisica</a></li>' +
    '<li ' + (activePage === 'Otherhome-it' ? 'class="active"' : '') + '><a href="Otherhome-it.php">Altri Progetti</a></li>' +
    '</ul></mynav>');