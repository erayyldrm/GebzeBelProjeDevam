package com.kocaeli.bel.service.gebze;

import com.kocaeli.bel.repository.gebze.KardesSehirlerRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link KardesSehirlerService}.
 */
@Generated
public class KardesSehirlerService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'kardesSehirlerService'.
   */
  private static BeanInstanceSupplier<KardesSehirlerService> getKardesSehirlerServiceInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<KardesSehirlerService>forConstructor(KardesSehirlerRepository.class)
            .withGenerator((registeredBean, args) -> new KardesSehirlerService(args.get(0)));
  }

  /**
   * Get the bean definition for 'kardesSehirlerService'.
   */
  public static BeanDefinition getKardesSehirlerServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(KardesSehirlerService.class);
    beanDefinition.setInstanceSupplier(getKardesSehirlerServiceInstanceSupplier());
    return beanDefinition;
  }
}
