const form = document.getElementById('myForm');
const submitBtn = document.getElementById('btn');

// Add an event listener to the form for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the default form submission behavior

  // Select the input values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  // Validate the inputs
  if (name === '' || age === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create a promise that resolves after 4 seconds
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
promise
.then((message) => alert(message))
.catch((error) => alert(error));
});
