package com.example.security.SecureRandom;

import java.security.SecureRandom;
import java.util.Base64;

public class SecretKeyGenerator {
    public static void main(String[] args) {
        SecureRandom secureRandom = new SecureRandom();
        byte[] secretKey = new byte[64];
        secureRandom.nextBytes(secretKey);
        String base64EncodedKey = Base64.getEncoder().encodeToString(secretKey);
        System.out.println("Generated Secret Key: " + base64EncodedKey);
    }
}
