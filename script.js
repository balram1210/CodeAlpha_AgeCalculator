function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");
  const error = document.getElementById("error");

  if (!dobInput) {
    error.textContent = "⚠ Please select a valid Date of Birth.";
    result.textContent = "";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    error.textContent = "⚠ Date of Birth cannot be in the future.";
    result.textContent = "";
    return;
  }

  error.textContent = "";

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent = `🎉 Your Age: ${years} Years, ${months} Months, ${days} Days`;
}