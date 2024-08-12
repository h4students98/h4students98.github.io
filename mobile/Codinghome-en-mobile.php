<!DOCTYPE html>
<html>
<head>
	<title>Coding Projects Colombini</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../assets/css/stylemobile.css">
</head>
<body>

	<script> var activePage = "Codinghome"; </script>  <!-- Set the active page as Codinghome -->
	<script type="text/javascript" language="javascript" src="../includes/Loadmenu-en-mobile.js"></script>


<div class="main-content">	<!-- ---START OF MAIN CONTENT--- -->
	<div class="title">My Coding Projects</div>
	<div class="textmain">Explore this section to discover presentations and occasional code snippets from my coding projects spanning several years. Dive into a brief overview of my coding journey!</div>

    <div class="row">
        	<div class="gradientbox_project">
            <div class="col_proj_1">
				<b>Applied Machine Learning project</b>
            </div>
            <div class="col_proj_2">
                <a href="../downloads/pdf/Presentazione_ML.pdf"><img src="../assets/images/pdf_pic.svg" alt="icona di download"></a>
                <span style="margin: 0 2%;"></span> <!-- Aggiungi uno spazio tra le immagini -->
                <a href="../downloads/ppt/Presentazione_ML.pptx"><img src="../assets/images/ppt_pic.svg" alt="icona di download"></a>
            </div>
        </div>
    </div> 

  <div class="spacebox"></div>
  
  <div class="row">
        	<div class="gradientbox_project">
            <div class="col_proj_1">
				<b>The template for this website</b>
            </div>
             <div class="col_proj_2">
                <a href="../downloads/folder/Site_template.zip"><img src="../assets/images/folder_pic.svg" alt="download icon" ></a>
            </div>
        </div>
    </div> 

  <div class="spacebox"></div>

  <div class="row">
        	<div class="gradientbox_project">
            <div class="col_proj_1">
				<b>Tecniche Digitali di Presa Dati</b>
            </div>
             <div class="col_proj_2">
                <a href="../downloads/folder/Site_template.zip"><img src="../assets/images/folder_pic.svg" alt="download icon" ></a>
            </div>
        </div>
    </div> 

  <div class="spacebox"></div>


</div>  <!-- ---END OF MAIN CONTENT--- -->
	
<script>
    // JavaScript to toggle the "active" class and change button text
    var dropdowns = document.querySelectorAll('.gradientbox_project_mobile');

    dropdowns.forEach(function(dropdown) {
        var content = dropdown.querySelector('.gradientbox_content');
        var toggleButton = dropdown.querySelector('.toggle-button');
        var buttonText = dropdown.querySelector('.button-text');

        toggleButton.addEventListener('click', function() {
            dropdown.classList.toggle('active');

            if (dropdown.classList.contains('active')) {
                buttonText.textContent = 'See less';
            } else {
                buttonText.textContent = 'Explore more';
            }
        });
    });
</script>

<footer class="footer">
	<script type="text/javascript" language="javascript" src="../includes/Loadfooter-en.js"></script>
</footer>
</body>

</html>

<!-- <script>
    // JavaScript to toggle the "show-dropdown" class on mobile
    var dropdowns = document.querySelectorAll('.gradientbox_project_mobile');

    dropdowns.forEach(function(dropdown) {
        var content = dropdown.querySelector('.dropdown-content-mobile');
        dropdown.addEventListener('touchstart', function(event) {
            event.preventDefault(); // Prevent default touch behavior
            dropdown.classList.toggle('show-dropdown');
        });
    });
</script> -->