package com.tickethub.service;

import com.tickethub.entities.ContactRequest;

import jakarta.mail.MessagingException;

public interface ContactEmailService {
	void sendEmail(ContactRequest request) throws MessagingException;
}
