package com.kocaeli.bel.security;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.AutowiredFieldValueResolver;
import org.springframework.beans.factory.support.RegisteredBean;

/**
 * Autowiring for {@link JwtTokenProvider}.
 */
@Generated
public class JwtTokenProvider__Autowiring {
  /**
   * Apply the autowiring.
   */
  public static JwtTokenProvider apply(RegisteredBean registeredBean, JwtTokenProvider instance) {
    AutowiredFieldValueResolver.forRequiredField("jwtSecret").resolveAndSet(registeredBean, instance);
    AutowiredFieldValueResolver.forRequiredField("jwtExpirationMs").resolveAndSet(registeredBean, instance);
    return instance;
  }
}
