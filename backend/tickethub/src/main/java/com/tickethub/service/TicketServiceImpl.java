package com.tickethub.service;

import java.io.ByteArrayOutputStream;

import org.springframework.stereotype.Service;

import com.itextpdf.barcodes.BarcodeQRCode;
import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.draw.SolidLine;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.borders.Border;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.LineSeparator;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.properties.HorizontalAlignment;
import com.itextpdf.layout.properties.TextAlignment;
import com.itextpdf.layout.properties.UnitValue;

@Service
public class TicketServiceImpl {

	public byte[] generateTicketPdf(String name, String event, String date, String seat, String venue, String price) {
		try {
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			PdfWriter writer = new PdfWriter(baos);
			PdfDocument pdf = new PdfDocument(writer);
			Document document = new Document(pdf);

			// 🎟 Load Font (iText 7 requires an explicit font)
			PdfFont boldFont = PdfFontFactory.createFont(com.itextpdf.io.font.constants.StandardFonts.HELVETICA_BOLD);
			PdfFont normalFont = PdfFontFactory.createFont(com.itextpdf.io.font.constants.StandardFonts.HELVETICA);

			// 🎟 Ticket Title
			Text titleText = new Text("🎟 TicketHub - Event Ticket").setFont(boldFont).setFontSize(20)
					.setFontColor(ColorConstants.RED);
			Paragraph title = new Paragraph(titleText).setTextAlignment(TextAlignment.CENTER);
			document.add(title);

			// Divider Line
			SolidLine line = new SolidLine(1f);
			document.add(new LineSeparator(line));

			// 🎟 Ticket Details in Table Format
			Table table = new Table(2);
			table.setWidth(UnitValue.createPercentValue(100));

			table.addCell(createStyledCell("Name:", boldFont));
			table.addCell(createStyledCell(name, normalFont));

			table.addCell(createStyledCell("Event:", boldFont));
			table.addCell(createStyledCell(event, normalFont));

			table.addCell(createStyledCell("Date:", boldFont));
			table.addCell(createStyledCell(date, normalFont));

			table.addCell(createStyledCell("Seat:", boldFont));
			table.addCell(createStyledCell(seat, normalFont));

			table.addCell(createStyledCell("Venue:", boldFont));
			table.addCell(createStyledCell(venue, normalFont));

			table.addCell(createStyledCell("Price:", boldFont));
			table.addCell(createStyledCell("₹" + price, normalFont));

			document.add(table);

			// 🎟 QR Code for Ticket Validation
			BarcodeQRCode qrCode = new BarcodeQRCode(name + "|" + event + "|" + date + "|" + seat);
			Image qrCodeImage = new Image(qrCode.createFormXObject(pdf));

			qrCodeImage.setWidth(100);
			qrCodeImage.setHeight(100);
			qrCodeImage.setHorizontalAlignment(HorizontalAlignment.CENTER);

			document.add(new Paragraph("\n")); // Space before QR Code
			document.add(qrCodeImage);

			// Closing Document
			document.close();
			return baos.toByteArray();

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	private Cell createStyledCell(String text, PdfFont font) {
		return new Cell().add(new Paragraph(text).setFont(font)).setPadding(5).setBorder(Border.NO_BORDER)
				.setBackgroundColor(ColorConstants.LIGHT_GRAY);
	}
}
