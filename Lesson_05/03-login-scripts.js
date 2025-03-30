const jsonData = pm.response.json();
pm.environment.set("accessToken",jsonData.data.accessToken)

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201)
});

pm.test("Message is 'Login successful'", function (){
    pm.expect(jsonData.message).to.equal("Login successful")
});