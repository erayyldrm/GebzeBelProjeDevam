package com.kocaeli.bel.controller.hizmetler;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.AutowiredFieldValueResolver;
import org.springframework.beans.factory.support.RegisteredBean;

/**
 * Autowiring for {@link HizmetlerController}.
 */
@Generated
public class HizmetlerController__Autowiring {
  /**
   * Apply the autowiring.
   */
  public static HizmetlerController apply(RegisteredBean registeredBean,
      HizmetlerController instance) {
    AutowiredFieldValueResolver.forRequiredField("hizmetlerService").resolveAndSet(registeredBean, instance);
    return instance;
  }
}
