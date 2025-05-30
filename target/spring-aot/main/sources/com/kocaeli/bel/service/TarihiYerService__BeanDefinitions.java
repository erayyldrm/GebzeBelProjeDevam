package com.kocaeli.bel.service;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.InstanceSupplier;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link TarihiYerService}.
 */
@Generated
public class TarihiYerService__BeanDefinitions {
  /**
   * Get the bean definition for 'tarihiYerService'.
   */
  public static BeanDefinition getTarihiYerServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(TarihiYerService.class);
    InstanceSupplier<TarihiYerService> instanceSupplier = InstanceSupplier.using(TarihiYerService::new);
    instanceSupplier = instanceSupplier.andThen(TarihiYerService__Autowiring::apply);
    beanDefinition.setInstanceSupplier(instanceSupplier);
    return beanDefinition;
  }
}
