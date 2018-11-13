const person = {
  firstName: 'André',
  lastName: 'Gonçalves',
  address: {
    city: 'Coimbra',
    country: 'Portugal'
  }
};

// Accessing values
const fname = myObject['firstName']
const fname2 = myObject.firstName;
fname === fname2 // true

// Changing values

myObject.firstName = 'Andreia'
