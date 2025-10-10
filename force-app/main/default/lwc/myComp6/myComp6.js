import { LightningElement } from 'lwc';
import signIn from './signIn.html';
import signUp from './signUp.html';          

import myComp6  from './myComp6.html'
export default class MyComp6 extends LightningElement {
    selected = null;

    // Sign In form fields
    signInUsername = '';
    signInPassword = '';

    // Sign Up form fields
    signUpFirstName = '';
    signUpLastName = '';
    signUpEmail = '';
    signUpPassword = '';

    // Error and success messages
    errorMessage = '';
    successMessage = '';
    render(){
        return this.selected === 'Sign Up' ? signUp:
        this.selected === 'Sign In'? signIn:
        myComp6
    }

    handleInputChange(event) {
        const field = event.target.dataset.field;
        const value = event.target.value;
        this[field] = value;

        // Clear error/success messages when user starts typing
        this.errorMessage = '';
        this.successMessage = '';
    }

    validateSignInForm() {
        if (!this.signInUsername.trim()) {
            this.errorMessage = 'Please enter your employee ID or username';
            return false;
        }
        if (!this.signInPassword.trim()) {
            this.errorMessage = 'Please enter your password';
            return false;
        }
        if (this.signInPassword.length < 6) {
            this.errorMessage = 'Password must be at least 6 characters long';
            return false;
        }
        return true;
    }

    validateSignUpForm() {
        if (!this.signUpFirstName.trim()) {
            this.errorMessage = 'Please enter your first name';
            return false;
        }
        if (!this.signUpLastName.trim()) {
            this.errorMessage = 'Please enter your last name';
            return false;
        }
        if (!this.signUpEmail.trim()) {
            this.errorMessage = 'Please enter your business email address';
            return false;
        }
        if (!this.isValidEmail(this.signUpEmail)) {
            this.errorMessage = 'Please enter a valid business email address';
            return false;
        }
        if (!this.signUpPassword.trim()) {
            this.errorMessage = 'Please enter your department or role';
            return false;
        }
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    handleClick(event){
        const buttonLabel = event.target.label;

        // Clear any existing messages when navigating
        this.errorMessage = '';
        this.successMessage = '';

        if (buttonLabel === 'Back') {
            // Navigate back to main selection page
            this.selected = null;

            // Clear form fields when going back
            this.clearSignInForm();
            this.clearSignUpForm();
        } else if (buttonLabel === 'Request Account') {
            // Handle account request navigation
            this.selected = 'Sign Up';
        } else {
            // Handle Sign In navigation
            this.selected = buttonLabel;
        }
    }
    
    submitHandler(event){
        try {
            this.errorMessage = '';
            this.successMessage = '';

            if(event.target.label === 'Sign In'){
                if (this.validateSignInForm()) {
                    console.log("Employee Sign In Data:", {
                        employeeId: this.signInUsername,
                        password: this.signInPassword,
                        timestamp: new Date().toISOString()
                    });
                    this.successMessage = 'Authentication successful. Redirecting to dashboard...';

                    // Clear form fields after successful submission
                    this.clearSignInForm();

                    // Optionally redirect back to main page after a delay
                    setTimeout(() => {
                        this.selected = null;
                        this.successMessage = '';
                    }, 3000);
                }
            } else if (event.target.label === 'Submit Request'){
                if (this.validateSignUpForm()) {
                    console.log("Account Request Data:", {
                        firstName: this.signUpFirstName,
                        lastName: this.signUpLastName,
                        businessEmail: this.signUpEmail,
                        department: this.signUpPassword,
                        requestDate: new Date().toISOString()
                    });
                    this.successMessage = 'Access request submitted successfully. You will receive an email confirmation within 2-3 business days.';

                    // Clear form fields after successful submission
                    this.clearSignUpForm();

                    // Optionally redirect back to main page after a delay
                    setTimeout(() => {
                        this.selected = null;
                        this.successMessage = '';
                    }, 4000);
                }
            }
        } catch (error) {
            console.error('Submit Handler Error:', error);
            this.errorMessage = 'An unexpected error occurred. Please try again.';
        }
    }

    clearSignInForm() {
        this.signInUsername = '';
        this.signInPassword = '';
    }

    clearSignUpForm() {
        this.signUpFirstName = '';
        this.signUpLastName = '';
        this.signUpEmail = '';
        this.signUpPassword = '';
    }
}