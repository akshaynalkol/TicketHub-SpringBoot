package com.tickethub.exception_handler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;   

import com.tickethub.custom_exceptions.ResourceNotFoundException;
import com.tickethub.dto.ApiResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {
	// add exception handling methods => catch block
	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e) {
		System.out.println("in handle Resourcenot found exc ");
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
	}

	// add exception handling methods => catch blocks
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		System.out.println("in handle P.L failures associated @Valid @RequestBody exc ");
		List<FieldError> rejectedFields = e.getFieldErrors();
		Map<String, String> map = rejectedFields.stream()
				.collect(Collectors.toMap(FieldError::getField, FieldError::getDefaultMessage));
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map);
	}

	// catch-all equivalent add exception handling methods => catch blocks
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleAnyException(Exception e) {
		e.printStackTrace();
		System.out.println("in catch-all "+ e);  
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(e.getMessage()));
	}

}
