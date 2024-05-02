function Loan(){
    let Date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let people = document.getElementById('people').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    if(Date === "" || time === "" || people == "" || name === "" || phone === "" || email === ""){
        alert('Fill all Details')
    }
    else {
        alert('Welcome')
    }
 }



 document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkin = document.getElementById('checkin').value.trim();
    const checkout = document.getElementById('checkout').value.trim();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('checkinError').innerText = '';
    document.getElementById('checkoutError').innerText = '';

    let isValid = true;

    if (name === '') {
      document.getElementById('nameError').innerText = 'Name is required';
      isValid = false;
    }

    if (email === '') {
      document.getElementById('emailError').innerText = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').innerText = 'Invalid email address';
      isValid = false;
    }

    if (checkin === '') {
      document.getElementById('checkinError').innerText = 'Check-in date is required';
      isValid = false;
    }

    if (checkout === '') {
      document.getElementById('checkoutError').innerText = 'Check-out date is required';
      isValid = false;
    }

    if (isValid) {
      // Form is valid, you can submit it here or perform other actions
      alert('Form submitted successfully! Please complete the payment below!!');
      document.getElementById('bookingForm').reset();
    }
  }

  function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }



  document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitPayment();
  });

  function submitPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const phone = document.getElementById('phone').value.trim();
    const googlePay = document.getElementById('googlePay').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();

    document.getElementById('phoneError').innerText = '';
    document.getElementById('googlePayError').innerText = '';
    document.getElementById('cardNumberError').innerText = '';

    let isValid = true;

    if (paymentMethod === 'phonePay' && phone === '') {
      document.getElementById('phoneError').innerText = 'Phone Pay number is required';
      isValid = false;
    }

    if (paymentMethod === 'googlePay' && googlePay === '') {
      document.getElementById('googlePayError').innerText = 'Google Pay ID is required';
      isValid = false;
    }

    if (paymentMethod === 'card' && cardNumber === '') {
      document.getElementById('cardNumberError').innerText = 'Card number is required';
      isValid = false;
    } else if (paymentMethod === 'card' && !isValidCardNumber(cardNumber)) {
      document.getElementById('cardNumberError').innerText = 'Invalid card number';
      isValid = false;
    }

    if (isValid) {
      // Form is valid, you can submit it here or perform other actions
      alert('Payment request sent successfully!');
      document.getElementById('paymentForm').reset();
    }
  }

  function isValidCardNumber(cardNumber) {
    // Simple card number validation regex (16 digits)
    const cardNumberRegex = /^\d{16}$/;
    return cardNumberRegex.test(cardNumber);
  }



  