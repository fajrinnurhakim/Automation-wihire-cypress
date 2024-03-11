const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            BASE_URL: process.env.BASE_URL,
            email_login: process.env.LOGIN_EMAIL,
            email_login2: process.env.LOGIN_EMAIL2,
            password_login: process.env.LOGIN_PASSWORD,
            password_login2: process.env.LOGIN_PASSWORD2,
            name_register: process.env.REGISTER_EMAIL,
            email_register: process.env.REGISTER_EMAIL,
            password_register: process.env.REGISTER_PASSWORD,
            password_confirm_register: process.env.REGISTER_CONFIRM_PASSWORD,
            province_register: process.env.REGISTER_PROVINCE,
            address_register: process.env.REGISTER_ADDRESS,
            company_scope_register: process.env.REGISTER_COMPANY_SCOPE,
            total_employee_register: process.env.REGISTER_TOTAL_EMPLOYEE,
            gender_register: process.env.REGISTER_GENDER,
            date_register: process.env.REGISTER_DATE,
            phone_register: process.env.REGISTER_PHONE,
        },
        viewportWidth: 1200,
        viewportHeight: 800,
        defaultCommandTimeout: 20000,
        requestTimeout: 20000,
    },
});
