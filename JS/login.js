const googleClient = google.accounts.oauth2.initCodeClient({
    client_id: "67122605006-tnmob8te9mjqnrisctffsfjti5bnt4pb.apps.googleusercontent.com",
    scope: "openid email profile",
    ux_mode: "popup",

    callback: (response) => {
        console.log("Google Response:", response);
    }
});

document.getElementById("google-btn").addEventListener("click", () => {
    googleClient.requestCode();
});