package edu.famu.thecoldestmarket.util;

public record  ApiResponse(boolean success, String message, Object data, Object error) { }