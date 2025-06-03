package com.kocaeli.bel.controller.hizmetler;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.AutowiredFieldValueResolver;
import org.springframework.beans.factory.support.RegisteredBean;

/**
 * Autowiring for {@link GeriDonusumDetayliController}.
 */
@Generated
public class GeriDonusumDetayliController__Autowiring {
  /**
   * Apply the autowiring.
   */
  public static GeriDonusumDetayliController apply(RegisteredBean registeredBean,
      GeriDonusumDetayliController instance) {
    AutowiredFieldValueResolver.forRequiredField("service").resolveAndSet(registeredBean, instance);
    return instance;
  }
}
