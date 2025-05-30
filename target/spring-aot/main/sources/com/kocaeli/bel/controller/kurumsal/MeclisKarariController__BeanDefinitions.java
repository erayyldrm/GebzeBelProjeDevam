package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.service.kurumsal.MeclisKarariService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link MeclisKarariController}.
 */
@Generated
public class MeclisKarariController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'meclisKarariController'.
   */
  private static BeanInstanceSupplier<MeclisKarariController> getMeclisKarariControllerInstanceSupplier(
      ) {
    return BeanInstanceSupplier.<MeclisKarariController>forConstructor(MeclisKarariService.class)
            .withGenerator((registeredBean, args) -> new MeclisKarariController(args.get(0)));
  }

  /**
   * Get the bean definition for 'meclisKarariController'.
   */
  public static BeanDefinition getMeclisKarariControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(MeclisKarariController.class);
    beanDefinition.setInstanceSupplier(getMeclisKarariControllerInstanceSupplier());
    return beanDefinition;
  }
}
