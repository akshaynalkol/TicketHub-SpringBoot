package com.tickethub.service;

import java.util.Random;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.tickethub.entities.EmailDetails;
import jakarta.servlet.http.HttpSession;

@Service
public class OTPServiceImpl {

    @Autowired
    private EmailService emailService;

    // Storing OTPs for each user
    private Map<String, String> otpStorage = new HashMap<>();

    // Generate OTP (6-digit)
    public String generateOTP() {
        Random random = new Random();
        return String.valueOf(100000 + random.nextInt(900000));
    }

    // Send OTP via Email
    public String sendOTP(String email) {
        String otp = generateOTP();  // Generate OTP
        otpStorage.put(email, otp);  // Store OTP mapped to the email

        EmailDetails emailDetails = new EmailDetails();
        emailDetails.setRecipient(email);
        emailDetails.setSubject("Your OTP for Login");
        emailDetails.setMsgBody("Your OTP for logging in is: " + otp);

        // Send OTP email
        emailService.sendSimpleMail(emailDetails);

        return otp;  // Return OTP for verification
    }

    // Verify OTP
    public boolean verifyOTP(String email, String enteredOTP) {
        String generatedOTP = otpStorage.get(email);

        if (generatedOTP == null) {
            return false;  // OTP expired or not sent
        }

        // Validate OTP and remove it after verification
        if (enteredOTP.equals(generatedOTP)) {
            otpStorage.remove(email);
            return true;
        }
        return false;
    }
}