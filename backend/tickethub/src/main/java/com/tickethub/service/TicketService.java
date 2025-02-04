package com.tickethub.service;

import java.io.ByteArrayOutputStream;

import org.springframework.stereotype.Service;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;

@Service
public class TicketService {
	public byte[] generateTicketPdf(String name, String event, String date, String seat, String venue, String price) {
        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            PdfWriter writer = new PdfWriter(baos);
            PdfDocument pdf = new PdfDocument(writer);
            Document document = new Document(pdf);

            document.add(new Paragraph("🎟 TicketHub - Event Ticket"));
            document.add(new Paragraph("Name: " + name));
            document.add(new Paragraph("Event: " + event));
            document.add(new Paragraph("Date: " + date));
            document.add(new Paragraph("Seat: " + seat));
            document.add(new Paragraph("Venue: " + venue));
            document.add(new Paragraph("Price: " + price));

            document.close();
            return baos.toByteArray();
        } catch (Exception e) {
            throw new RuntimeException("Error generating ticket PDF", e);
        }
    }
}
