package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.service.kurumsal.BaskanService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link BaskanController}.
 */
@Generated
public class BaskanController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'baskanController'.
   */
  private static BeanInstanceSupplier<BaskanController> getBaskanControllerInstanceSupplier() {
    return BeanInstanceSupplier.<BaskanController>forConstructor(BaskanService.class)
            .withGenerator((registeredBean, args) -> new BaskanController(args.get(0)));
  }

  /**
   * Get the bean definition for 'baskanController'.
   */
  public static BeanDefinition getBaskanControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(BaskanController.class);
    beanDefinition.setInstanceSupplier(getBaskanControllerInstanceSupplier());
    return beanDefinition;
  }
}
