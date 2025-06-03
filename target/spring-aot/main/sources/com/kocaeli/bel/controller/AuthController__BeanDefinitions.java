package com.kocaeli.bel.controller;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.InstanceSupplier;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link AuthController}.
 */
@Generated
public class AuthController__BeanDefinitions {
  /**
   * Get the bean definition for 'authController'.
   */
  public static BeanDefinition getAuthControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(AuthController.class);
    InstanceSupplier<AuthController> instanceSupplier = InstanceSupplier.using(AuthController::new);
    instanceSupplier = instanceSupplier.andThen(AuthController__Autowiring::apply);
    beanDefinition.setInstanceSupplier(instanceSupplier);
    return beanDefinition;
  }
}
