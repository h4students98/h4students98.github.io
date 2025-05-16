const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Run simulation when the page loads
window.onload = function() {
    simulate();
};

function simulate() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const incidentAngle = parseFloat(document.getElementById('angle').value);
    const showRefracted = document.getElementById('showRefracted').checked;
    const showReflected = document.getElementById('showReflected').checked;
    const showInfo = document.getElementById('showInfo').checked;

    // Update the manual inputs when sliders are moved
    document.getElementById('n1Manual').value = n1.toFixed(2);
    document.getElementById('n2Manual').value = n2.toFixed(2);
    document.getElementById('angleManual').value = incidentAngle.toFixed(1);

    // Calculate the angle of refraction using Snell's law
    const radianIncident = incidentAngle * Math.PI / 180;
    const sinRefraction = (n1 / n2) * Math.sin(radianIncident);
    
    let refractedAngle;
    if (sinRefraction > 1) {
        refractedAngle = null; // Total internal reflection, no refracted ray
    } else {
        refractedAngle = Math.asin(sinRefraction) * 180 / Math.PI;
    }

    const reflectedAngle = incidentAngle;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the two materials
    ctx.fillStyle = '#d9d9d9';  // Material 1
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
    ctx.fillStyle = '#cce7ff';  // Material 2
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
    
    // Draw the blue boundary line
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Draw the normal (dashed vertical line)
    ctx.strokeStyle = 'black';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw the incident ray
    drawIncidentRay(ctx, canvas.width / 2, canvas.height / 2, incidentAngle, '#ff0000');
    
    // Draw the reflected ray (if checkbox is checked)
    if (showReflected) {
        drawReflectedRay(ctx, canvas.width / 2, canvas.height / 2, reflectedAngle, '#ff0000');
    }

    // Draw the refracted ray (if checkbox is checked and no total internal reflection)
    if (showRefracted && refractedAngle !== null) {
        drawRefractedRay(ctx, canvas.width / 2, canvas.height / 2, refractedAngle, '#ff0000');
    }

    // Display the selected values and resulting angles if the checkbox is checked
    if (showInfo) {
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(`n₁ = ${n1.toFixed(2)}`, 10, 20);
        ctx.fillText(`n₂ = ${n2.toFixed(2)}`, 10, (canvas.height / 2) + 20);

        // Draw θ_INC
        ctx.fillText(`θ`, (canvas.width / 3.5), 20);
        ctx.font = '12px Arial'; // Smaller font for subscript
        ctx.fillText(`INC`, (canvas.width / 3.5) + 10, 20);
        ctx.font = '16px Arial'; // Reset font size for next text
        ctx.fillText(` = ${incidentAngle.toFixed(1)}°`, (canvas.width / 3.5) + 30, 20); // Angle value

        // Draw θ_TRA
        if (showRefracted) {
            if (refractedAngle !== null) {
                ctx.fillText(`θ`, (canvas.width / 2) + 10, (canvas.height / 2) + 20);
                ctx.font = '12px Arial'; // Smaller font for subscript
                ctx.fillText(`TRA`, (canvas.width / 2) + 20, (canvas.height / 2) + 20);
                ctx.font = '16px Arial'; // Reset font size for next text
                ctx.fillText(`  = ${refractedAngle.toFixed(1)}°`, (canvas.width / 2) + 40, (canvas.height / 2) + 20); // Angle value
            } else {
                ctx.fillText(`Riflessione Totale`, (canvas.width / 5), (canvas.height / 2) + 20);
            }
        }

        // Draw θ_RIF
        if (showReflected) {
            ctx.fillText(`θ`, (canvas.width / 2) + 10, 20);
            ctx.font = '12px Arial'; // Smaller font for subscript
            ctx.fillText(`RIF`, (canvas.width / 2) + 20, 20);
            ctx.font = '16px Arial'; // Reset font size for next text
            ctx.fillText(` = ${reflectedAngle.toFixed(1)}°`, (canvas.width / 2) + 40, 20); // Angle value
        }
    }


}

// Update the slider based on the manual input
function updateSlider(sliderId, value) {
    document.getElementById(sliderId).value = value;
}

// Draw the incident ray
function drawIncidentRay(ctx, x, y, angle, color) {
    const length = canvas.width;
    const radianAngle = angle * Math.PI / 180;

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - length * Math.sin(radianAngle), y - length * Math.cos(radianAngle));
    ctx.stroke();
}

// Draw the reflected ray
function drawReflectedRay(ctx, x, y, angle, color) {
    const length = canvas.width;
    const radianAngle = angle * Math.PI / 180;

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * Math.sin(radianAngle), y - length * Math.cos(radianAngle));
    ctx.stroke();
}

// Draw the refracted ray
function drawRefractedRay(ctx, x, y, angle, color) {
    const length = canvas.width;
    const radianAngle = angle * Math.PI / 180;

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length * Math.sin(radianAngle), y + length * Math.cos(radianAngle));
    ctx.stroke();
}




//PROBLEM SOLVER//
// Function to solve the problem using Snell's law
function solveSnellProblem() {
    const theta1Input = document.getElementById('solverAngle1');
    const theta2Input = document.getElementById('solverAngle2');
    const n1Input = document.getElementById('solverN1');
    const n2Input = document.getElementById('solverN2');
    
    let theta1, theta2, n1, n2, resultText;

    // Check if the input values are empty
    const isTheta1Missing = theta1Input.value.trim() === "";
    const isTheta2Missing = theta2Input.value.trim() === "";
    const isN1Missing = n1Input.value.trim() === "";
    const isN2Missing = n2Input.value.trim() === "";

    // Ensure exactly one field is missing
    if (isTheta1Missing + isTheta2Missing + isN1Missing + isN2Missing !== 1) {
        resultText = "Lascia vuota la tua incognita e null'altro";
    } else {
        // Parse available inputs to float
        if (!isTheta1Missing) theta1 = parseFloat(theta1Input.value);
        if (!isTheta2Missing) theta2 = parseFloat(theta2Input.value);
        if (!isN1Missing) n1 = parseFloat(n1Input.value);
        if (!isN2Missing) n2 = parseFloat(n2Input.value);

        // Snell's Law: n₁ * sin(θ₁) = n₂ * sin(θ₂)
        if (isTheta1Missing) {
            // Solve for θ₁
            const sinTheta2 = Math.sin(theta2 * Math.PI / 180);
            const sinTheta1 = (n2 * sinTheta2) / n1;
            if (sinTheta1 > 1) {
                resultText = "Avviene la riflessione totale. L'angolo di incidenza non è valido";
                // Clear input if invalid
                theta1Input.value = "";
                theta1Input.style.color = "";
            } else {
                theta1 = Math.asin(sinTheta1) * 180 / Math.PI;
                theta1Input.value = theta1.toFixed(1);
                theta1Input.style.color = "red";
                resultText = "";  // No need for additional output
            }

        } else if (isTheta2Missing) {
            // Solve for θ₂
            const sinTheta1 = Math.sin(theta1 * Math.PI / 180);
            const sinTheta2 = (n1 * sinTheta1) / n2;
            if (sinTheta2 > 1) {
                resultText = "Avviene la riflessione totale. L'angolo del raggio rifratto non è valido";
                // Clear input if invalid
                theta2Input.value = "";
                theta2Input.style.color = "";
            } else {
                theta2 = Math.asin(sinTheta2) * 180 / Math.PI;
                theta2Input.value = theta2.toFixed(1);
                theta2Input.style.color = "red";
                resultText = "";  // No need for additional output
            }

        } else if (isN1Missing) {
            // Solve for n₁
            const sinTheta1 = Math.sin(theta1 * Math.PI / 180);
            const sinTheta2 = Math.sin(theta2 * Math.PI / 180);
            n1 = (n2 * sinTheta2) / sinTheta1;
            n1Input.value = n1.toFixed(2);
            n1Input.style.color = "red";
            resultText = "";  // No need for additional output

        } else if (isN2Missing) {
            // Solve for n₂
            const sinTheta1 = Math.sin(theta1 * Math.PI / 180);
            const sinTheta2 = Math.sin(theta2 * Math.PI / 180);
            n2 = (n1 * sinTheta1) / sinTheta2;
            n2Input.value = n2.toFixed(2);
            n2Input.style.color = "red";
            resultText = "";  // No need for additional output
        }
    }

    // Display the result in the output paragraph
    document.getElementById('solverOutput').innerText = resultText;
}

function showOnCanvas() {
    // Get values from the inputs
    const angle1 = document.getElementById('solverAngle1').value;
    const angle2 = document.getElementById('solverAngle2').value;
    const n1 = document.getElementById('solverN1').value;
    const n2 = document.getElementById('solverN2').value;

    // Count empty inputs
    const emptyInputs = [angle1, angle2, n1, n2].filter(value => value === "").length;

    // Check if more than one input is empty
    if (emptyInputs > 1) {
        document.getElementById('solverOutput').innerText = "Hai lasciato più di un campo vuoto. Per favore, lascia una sola incognita.";
        return;
    }

    // Set values to the simulation inputs
    if (n1 !== "") {
        document.getElementById('n1Manual').value = n1;
        document.getElementById('n1').value = n1;
    }
    if (n2 !== "") {
        document.getElementById('n2Manual').value = n2;
        document.getElementById('n2').value = n2;
    }
    if (angle1 !== "") {
        document.getElementById('angleManual').value = angle1;
        document.getElementById('angle').value = angle1;
    }

    // Call the simulate function to update the canvas with the new values
    simulate();
}


// Function to solve the velocity problem for refractive index
function solveVelocityProblem() {
    const refrIndexInput = document.getElementById('refrIndex');
    const velocityInput = document.getElementById('velOfRay');

    const c = 299792458; // Speed of light in vacuum in m/s
    let n1, v, resultText;

    // Check if the input values are empty
    const isN1Missing = refrIndexInput.value.trim() === "";
    const isVMissing = velocityInput.value.trim() === "";

    // Ensure exactly one field is filled
    if (isN1Missing + isVMissing !== 1) {
        resultText = "Per favore, inserisci uno solo dei due dati per poter risolvere l'esercizio";
    } else {
        // Parse available inputs to float
        if (!isN1Missing) {
            n1 = parseFloat(refrIndexInput.value);
            // Calculate velocity
            v = c / n1;
            velocityInput.value = v.toExponential(2); // Display the result in scientific notation
            velocityInput.style.color = "red"; // Highlight the input
            resultText = "";  // No additional output needed
        } else if (!isVMissing) {
            v = parseFloat(velocityInput.value);
            // Calculate refractive index
            n1 = c / v;
            refrIndexInput.value = n1.toFixed(2); // Display the result for refractive index
            refrIndexInput.style.color = "red"; // Highlight the input
            resultText = "";  // No additional output needed
        }
    }

    // Display the result in the output paragraph
    document.getElementById('velocitySolverOutput').innerText = resultText; // Show any result text if necessary
}

// Event listeners to reset color to var(--primary-color) on input change
document.getElementById('solverAngle1').addEventListener('input', function() {
    this.style.color = 'var(--fourth-color)';
});
document.getElementById('solverAngle2').addEventListener('input', function() {
    this.style.color = 'var(--fourth-color)';
});
document.getElementById('solverN1').addEventListener('input', function() {
    this.style.color = 'var(--fourth-color)';
});
document.getElementById('solverN2').addEventListener('input', function() {
    this.style.color = 'var(--fourth-color)';
});

// For the velocity problem inputs
document.getElementById('refrIndex').addEventListener('input', function() {
    this.style.color = 'var(--fourth-color)';
});
document.getElementById('velOfRay').addEventListener('input', function() {
    this.style.color = 'var(--fourth-color)';
});