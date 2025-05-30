package com.kocaeli.bel.controller.gebze;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.InstanceSupplier;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link FotograflarlaGebzeController}.
 */
@Generated
public class FotograflarlaGebzeController__BeanDefinitions {
  /**
   * Get the bean definition for 'fotograflarlaGebzeController'.
   */
  public static BeanDefinition getFotograflarlaGebzeControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(FotograflarlaGebzeController.class);
    InstanceSupplier<FotograflarlaGebzeController> instanceSupplier = InstanceSupplier.using(FotograflarlaGebzeController::new);
    instanceSupplier = instanceSupplier.andThen(FotograflarlaGebzeController__Autowiring::apply);
    beanDefinition.setInstanceSupplier(instanceSupplier);
    return beanDefinition;
  }
}
