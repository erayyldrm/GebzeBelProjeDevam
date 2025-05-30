package com.kocaeli.bel.service.gebze;

import com.kocaeli.bel.repository.gebze.FotograflarlaGebzeRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link FotograflarlaGebzeService}.
 */
@Generated
public class FotograflarlaGebzeService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'fotograflarlaGebzeService'.
   */
  private static BeanInstanceSupplier<FotograflarlaGebzeService> getFotograflarlaGebzeServiceInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<FotograflarlaGebzeService>forConstructor(FotograflarlaGebzeRepository.class)
            .withGenerator((registeredBean, args) -> new FotograflarlaGebzeService(args.get(0)));
  }

  /**
   * Get the bean definition for 'fotograflarlaGebzeService'.
   */
  public static BeanDefinition getFotograflarlaGebzeServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(FotograflarlaGebzeService.class);
    beanDefinition.setInstanceSupplier(getFotograflarlaGebzeServiceInstanceSupplier());
    return beanDefinition;
  }
}
