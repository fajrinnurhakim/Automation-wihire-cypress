const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            BASE_URL: "https://wihire.vercel.app/",
            email_login: "nurhakimfajrin123@gmail.com",
            email_login2: "roihana.asfiati1996@gmail.com",
            password_login: "Okkynak11",
            password_login2: "Okkynak13",
            name_register: "sventh7",
            email_register: "sventh@gmail.com",
            password_register: "Sventh123",
            password_confirm_register: "Sventh123",
            province_register: "RIAU",
            address_register: "KABUPATEN PELALAWAN",
            company_scope_register: "Accounting",
            total_employee_register: "11-50 Employees",
            gender_register: "Female",
            date_register: "2001-11-11",
            phone_register: "https://wihire.vercel.app/",
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
