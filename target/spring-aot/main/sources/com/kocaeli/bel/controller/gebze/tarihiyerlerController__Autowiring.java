package com.kocaeli.bel.controller.gebze;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.AutowiredFieldValueResolver;
import org.springframework.beans.factory.support.RegisteredBean;

/**
 * Autowiring for {@link tarihiyerlerController}.
 */
@Generated
public class tarihiyerlerController__Autowiring {
  /**
   * Apply the autowiring.
   */
  public static tarihiyerlerController apply(RegisteredBean registeredBean,
      tarihiyerlerController instance) {
    AutowiredFieldValueResolver.forRequiredField("tarihiYerService").resolveAndSet(registeredBean, instance);
    return instance;
  }
}
