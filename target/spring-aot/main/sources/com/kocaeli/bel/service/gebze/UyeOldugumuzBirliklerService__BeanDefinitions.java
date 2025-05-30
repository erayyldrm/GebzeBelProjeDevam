package com.kocaeli.bel.service.gebze;

import com.kocaeli.bel.repository.gebze.UyeOldugumuzBirliklerRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link UyeOldugumuzBirliklerService}.
 */
@Generated
public class UyeOldugumuzBirliklerService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'uyeOldugumuzBirliklerService'.
   */
  private static BeanInstanceSupplier<UyeOldugumuzBirliklerService> getUyeOldugumuzBirliklerServiceInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<UyeOldugumuzBirliklerService>forConstructor(UyeOldugumuzBirliklerRepository.class)
            .withGenerator((registeredBean, args) -> new UyeOldugumuzBirliklerService(args.get(0)));
  }

  /**
   * Get the bean definition for 'uyeOldugumuzBirliklerService'.
   */
  public static BeanDefinition getUyeOldugumuzBirliklerServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(UyeOldugumuzBirliklerService.class);
    beanDefinition.setInstanceSupplier(getUyeOldugumuzBirliklerServiceInstanceSupplier());
    return beanDefinition;
  }
}
