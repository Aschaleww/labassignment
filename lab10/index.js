// Calculate age based on the given date of birth
function calculateAge(dateOfBirth) {
    const today = new Date();
    const dob = new Date(dateOfBirth);
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    // if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    //   age--;
    // }
    return age;
  }
  
  // Get the form and table elements
  const registrationForm = document.getElementById('registrationForm');
  const patientsTable = document.getElementById('tbodyPatientsList');
  
  // Register Patient button click event handler
  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    const patientIdNumber = document.getElementById('patientIdNumber').value;
    const firstName = document.getElementById('firstName').value;
    const middleInitials = document.getElementById('middleInitials').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const department = document.getElementById('ddlDepartment').value;
    const isOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked').value;
  
    // Create a new row for the patient data
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${patientIdNumber}</td>
      <td>${firstName}</td>
      <td>${middleInitials}</td>
      <td>${lastName}</td>
      <td>${dateOfBirth}</td>
      <td>${department}</td>
      <td>${isOutPatient}</td>
    `;
  
    // Append the row to the patients table
    patientsTable.appendChild(row);
  
    // Reset the form
    registrationForm.reset();
  });
  
  // Show Elderly Patients only checkbox change event handler
  const chkElderlyPatients = document.getElementById('chkElderlyPatients');
  chkElderlyPatients.addEventListener('change', function () {
    const elderlyPatients = document.querySelectorAll('tr:not(:first-child)'); // Exclude table header row
  
    if (this.checked) {
      elderlyPatients.forEach(function (patient) {
        const dateOfBirth = new Date(patient.children[4].textContent);
        const age = calculateAge(dateOfBirth);
  
        if (age >= 65) {
          patient.style.display = '';
        } else {
          patient.style.display = 'none';
        }
      });
    } else {
      elderlyPatients.forEach(function (patient) {
        patient.style.display = '';
      });
    }
  });
  
  // Show Out-Patients only checkbox change event handler
  const chkShowOutPatients = document.getElementById('chkShowOutPatients');
  chkShowOutPatients.addEventListener('change', function () {
    const outPatients = document.querySelectorAll('tr:not(:first-child)'); // Exclude table header row
  
    if (this.checked) {
      outPatients.forEach(function (patient) {
        const isOutPatient = patient.children[6].textContent;
  
        if (isOutPatient === 'Yes') {
          patient.style.display = '';
        } else {
          patient.style.display = 'none';
        }
      });
    } else {
      outPatients.forEach(function (patient) {
        patient.style.display = '';
      });
    }
  });