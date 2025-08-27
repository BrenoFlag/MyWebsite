module.exports = {
    name: "Elevate Websites Design",
    email: "hello@elevatewebsitesdesign.com",
    phoneForTel: "555-555-5555",
    phoneFormatted: "(555) 555-5555",
    address: {
        lineOne: "Atlanta, GA",
        lineTwo: "Serving small businesses nationwide",
        city: "Atlanta",
        state: "GA",
        zip: "",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
