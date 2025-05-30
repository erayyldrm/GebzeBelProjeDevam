package com.kocaeli.bel.controller.gebze;

import com.kocaeli.bel.service.gebze.AktiviteService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link AktiviteController}.
 */
@Generated
public class AktiviteController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'aktiviteController'.
   */
  private static BeanInstanceSupplier<AktiviteController> getAktiviteControllerInstanceSupplier() {
    return BeanInstanceSupplier.<AktiviteController>forConstructor(AktiviteService.class)
            .withGenerator((registeredBean, args) -> new AktiviteController(args.get(0)));
  }

  /**
   * Get the bean definition for 'aktiviteController'.
   */
  public static BeanDefinition getAktiviteControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(AktiviteController.class);
    beanDefinition.setInstanceSupplier(getAktiviteControllerInstanceSupplier());
    return beanDefinition;
  }
}
