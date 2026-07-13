const appcontainer = document.getElementById("appContainer");
 const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", function() {
    const profilecard=document.createElement("div");
    profilecard.className="profile-card";
     const profileimage=document.createElement("img");
     profileimage.src="https://media.licdn.com/dms/image/v2/D5635AQF3AWu2v_pMjQ/profile-framedphoto-shrink_400_400/B56Zzi0k3uKAAc-/0/1773331959586?e=1784534400&v=beta&t=iq0vdDj2wdN9Cmjgwejmp5_P9qZoYiG4OA3S2PFp6I0";
     profileheading=document.createElement("h2");
     profileheading.textContent="vijay raj soni";
     profilebio=document.createElement("p");
     profilebio.textContent="I am a web developer and I love to create beautiful and functional websites.";
     profilecard.appendChild(profileimage);
     profilecard.appendChild(profileheading);
     profilecard.appendChild(profilebio);
     appcontainer.appendChild(profilecard);
});