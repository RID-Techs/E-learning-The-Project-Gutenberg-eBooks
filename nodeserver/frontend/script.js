// testRequests.js

// Function to test GET request
async function testGet() {
    try {
        const response = await fetch('http://127.0.0.1:3000/test-server');
        const data = await response.json();
        console.log('GET Request Result:', data);
    } catch (error) {
        console.error('Error in GET request:', error);
    }
}

// Function to test POST request
async function testPost() {
    const postData = { param: 500, ridwane: 'Developpeur' };

    try {
        const response = await fetch('http://127.0.0.1:3000/testpost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        const data = await response.json();
        console.log('POST Request Result:', data);
    } catch (error) {
        console.error('Error in POST request:', error);
    }
}

// Testing GET request
testGet();

// Testing POST request
testPost();
