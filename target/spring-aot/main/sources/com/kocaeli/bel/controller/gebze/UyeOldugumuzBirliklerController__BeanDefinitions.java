package com.kocaeli.bel.controller.gebze;

import com.kocaeli.bel.service.gebze.UyeOldugumuzBirliklerService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link UyeOldugumuzBirliklerController}.
 */
@Generated
public class UyeOldugumuzBirliklerController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'uyeOldugumuzBirliklerController'.
   */
  private static BeanInstanceSupplier<UyeOldugumuzBirliklerController> getUyeOldugumuzBirliklerControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<UyeOldugumuzBirliklerController>forConstructor(UyeOldugumuzBirliklerService.class)
            .withGenerator((registeredBean, args) -> new UyeOldugumuzBirliklerController(args.get(0)));
  }

  /**
   * Get the bean definition for 'uyeOldugumuzBirliklerController'.
   */
  public static BeanDefinition getUyeOldugumuzBirliklerControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(UyeOldugumuzBirliklerController.class);
    beanDefinition.setInstanceSupplier(getUyeOldugumuzBirliklerControllerInstanceSupplier());
    return beanDefinition;
  }
}
