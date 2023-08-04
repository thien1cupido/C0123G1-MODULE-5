package com.example.demo;

public class ExpiredJwtException extends RuntimeException{
    protected ExpiredJwtException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
