document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const booking = {
    name: this.name.value,
    email: this.email.value,
    service: this.service.value,
    date: this.date.value,
    time: this.time.value
  };

  // Save to localStorage
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking successful!");
  this.reset();
});
