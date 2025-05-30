package com.kocaeli.bel.controller;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.AutowiredFieldValueResolver;
import org.springframework.beans.factory.support.RegisteredBean;

/**
 * Autowiring for {@link DepartmentController}.
 */
@Generated
public class DepartmentController__Autowiring {
  /**
   * Apply the autowiring.
   */
  public static DepartmentController apply(RegisteredBean registeredBean,
      DepartmentController instance) {
    AutowiredFieldValueResolver.forRequiredField("departmentService").resolveAndSet(registeredBean, instance);
    AutowiredFieldValueResolver.forRequiredField("mudurRepository").resolveAndSet(registeredBean, instance);
    return instance;
  }
}
