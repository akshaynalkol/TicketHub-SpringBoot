//package com.tickethub.service;
//
//import org.springframework.core.io.ByteArrayResource;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Service;
//
//import jakarta.mail.internet.MimeMessage;
//
//@Service
//public class EmailService {
//
//	private final JavaMailSender mailSender;
//	private final TicketService ticketService;
//
//	public EmailService(JavaMailSender mailSender, TicketService ticketService) {
//		this.mailSender = mailSender;
//		this.ticketService = ticketService;
//	}
//
//	public void sendTicketEmail(String toEmail, String name, String event, String date, String seat, String venue,
//			String price) {
//		try {
//			MimeMessage message = mailSender.createMimeMessage();
//			MimeMessageHelper helper = new MimeMessageHelper(message, true);
//
//			helper.setTo(toEmail);
//			helper.setSubject("Your TicketHub Booking Confirmation");
//			helper.setText("Attached is your ticket!");
//
//			byte[] ticketPdf = ticketService.generateTicketPdf(name, event, date, seat, venue, price);
//			helper.addAttachment("Ticket.pdf", new ByteArrayResource(ticketPdf));
//
//			mailSender.send(message);
//		} catch (Exception e) {
//			throw new RuntimeException("Error sending email", e);
//		}
//	}
//}
