// Put this in src/main/java/com/kocaeli/bel/DTO/LoginRequest.java
package com.kocaeli.bel.DTO;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginRequest {
    // Getters and setters
    private String username;
    private String password;

}