package com.kocaeli.bel.controller.etkinlik;

import com.kocaeli.bel.service.etkinlik.EtkinlikService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link EtkinlikController}.
 */
@Generated
public class EtkinlikController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'etkinlikController'.
   */
  private static BeanInstanceSupplier<EtkinlikController> getEtkinlikControllerInstanceSupplier() {
    return BeanInstanceSupplier.<EtkinlikController>forConstructor(EtkinlikService.class)
            .withGenerator((registeredBean, args) -> new EtkinlikController(args.get(0)));
  }

  /**
   * Get the bean definition for 'etkinlikController'.
   */
  public static BeanDefinition getEtkinlikControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(EtkinlikController.class);
    beanDefinition.setInstanceSupplier(getEtkinlikControllerInstanceSupplier());
    return beanDefinition;
  }
}
