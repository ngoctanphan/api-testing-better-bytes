const token = pm.environment.get("accessToken");
if(!token) {
    pm.sendRequest({
        url: "https://bblib-dev-api.betterbytesvn.cloud/v2/admin/auth/login",
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: {
            mode: "raw",
            raw: JSON.stringify({"username": "admin@betterbytesvn.com","password": "123@123A"})
        }
    }, function (err, res) {
        if (!err) {
            var token = res.json().data.accessToken;
            pm.environment.set("accessToken",token);
        }
    });
}