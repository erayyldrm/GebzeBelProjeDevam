package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.service.kurumsal.MeclisUyesiService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link MeclisUyesiController}.
 */
@Generated
public class MeclisUyesiController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'meclisUyesiController'.
   */
  private static BeanInstanceSupplier<MeclisUyesiController> getMeclisUyesiControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<MeclisUyesiController>forConstructor(MeclisUyesiService.class)
            .withGenerator((registeredBean, args) -> new MeclisUyesiController(args.get(0)));
  }

  /**
   * Get the bean definition for 'meclisUyesiController'.
   */
  public static BeanDefinition getMeclisUyesiControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(MeclisUyesiController.class);
    beanDefinition.setInstanceSupplier(getMeclisUyesiControllerInstanceSupplier());
    return beanDefinition;
  }
}
