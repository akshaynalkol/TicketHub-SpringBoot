package com.tickethub.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.tickethub.entities.ContactRequest;

@Service
@RequiredArgsConstructor
public class ContactEmailServiceImpl implements ContactEmailService {

	private final JavaMailSender mailSender;

	@Override
	public void sendEmail(ContactRequest request) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);

		helper.setTo(request.getEmail());
		helper.setSubject("Thank You for Contacting Us!");
		helper.setText("<h3>Hello " + request.getName() + ",</h3>"
				+ "<p>Thank you for reaching out! We have received your message:</p>" + "<blockquote>"
				+ request.getMessage() + "</blockquote>" + "<p>We will get back to you soon.</p><br>"
				+ "<p>Best Regards,<br>TicketHub Support Team</p>", true);

		mailSender.send(message);
	}
}
