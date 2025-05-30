package com.kocaeli.bel.service.gebze;

import com.kocaeli.bel.repository.gebze.MuhtarlarRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link MuhtarlarService}.
 */
@Generated
public class MuhtarlarService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'muhtarlarService'.
   */
  private static BeanInstanceSupplier<MuhtarlarService> getMuhtarlarServiceInstanceSupplier() {
    return BeanInstanceSupplier.<MuhtarlarService>forConstructor(MuhtarlarRepository.class)
            .withGenerator((registeredBean, args) -> new MuhtarlarService(args.get(0)));
  }

  /**
   * Get the bean definition for 'muhtarlarService'.
   */
  public static BeanDefinition getMuhtarlarServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(MuhtarlarService.class);
    beanDefinition.setInstanceSupplier(getMuhtarlarServiceInstanceSupplier());
    return beanDefinition;
  }
}
