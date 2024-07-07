function validateRegistrationData(req, res, next) {
    const { firstName, lastName, password, email, phone } = req.body;
    const errors = [];

    // Validate first & last name
    if (!/^[A-Z]/.test(firstName)) {
        errors.push("First name must start with a capital letter.")
    }
    if (!/^[A-Z]/.test(lastName)) {
        errors.push("Last name must start with a capital letter.");
    }

    // validate password
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/(?=.*\d)/.test(password)) {
        errors.push("Password must contain at least one numeric character.");
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    //validate email
    if (!/@/.test(email)) {
        errors.push("Email must contain the '@' symbol.");
    }

    //validate phone number
    if (phone.length < 10) {
        errors.push("Phone number must be at least 10 digits long.");
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();

}

module.exports = validateRegistrationData;