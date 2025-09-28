module.exports = {
    name: "Elevate Websites Design",
    email: "contact@elevatewebsitesdesign.com",
    phoneForTel: "470-983-1363",
    phoneFormatted: "(470) 983-1363",
    address: {
        //lineOne: "First Address Line",
       // lineTwo: "Second Address Line",
        city: "Atlanta",
        state: "GA",
        zip: "30326",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.elevatewebsitesdesign.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
